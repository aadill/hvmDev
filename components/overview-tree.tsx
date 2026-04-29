"use client";

import { useMemo, useState } from "react";
import { getOverviewTreeData, type Condition, type Segment, type StageColor, type StageKey, type StatusKey } from "./hvm-data";

type TreeNodeType = "stage" | "condition" | "segment" | "status";

type TreeNode = {
  id: string;
  label: string;
  valueLabel: string;
  color: string;
  type: TreeNodeType;
  children?: TreeNode[];
};

type PositionedNode = TreeNode & {
  x: number;
  y: number;
  depth: number;
  hasChildren: boolean;
};

type PositionedLink = {
  id: string;
  source: PositionedNode;
  target: PositionedNode;
};

const NODE_WIDTH = 132;
const NODE_HEIGHT = 48;
const CANVAS_WIDTH = 860;

const statusLabelMap: Record<StatusKey, string> = {
  active: "Active",
  planned: "Planned",
  paused: "Paused",
};

const stagePalette: Record<StageColor, string> = {
  blue: "#2367E8",
  green: "#0B9F30",
  orange: "#FF6900",
};

const levelPalette: Record<TreeNodeType, string> = {
  stage: "#2367E8",
  condition: "#5FA8F5",
  segment: "#46C7DE",
  status: "#22C55E",
};

const statusPalette: Record<StatusKey, string> = {
  active: "#22C55E",
  planned: "#1D6CFF",
  paused: "#F59E0B",
};

function formatCompact(value: number) {
  const abs = Math.abs(value);

  if (abs >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(abs >= 10_000_000 ? 0 : 1)}M`;
  }

  if (abs >= 1_000) {
    return `${(value / 1_000).toFixed(abs >= 10_000 ? 0 : 1)}k`;
  }

  return Math.round(value).toLocaleString();
}

function buildHierarchy(stage: ReturnType<typeof getOverviewTreeData>[StageKey]): TreeNode {
  return {
    id: `stage-${stage.key}`,
    label: stage.label.toUpperCase(),
    valueLabel: stage.total,
    color: stagePalette[stage.color],
    type: "stage",
    children: stage.conditions.map((condition: Condition) => ({
      id: `condition-${condition.id}`,
      label: condition.label,
      valueLabel: condition.value,
      color: levelPalette.condition,
      type: "condition",
      children: condition.segments.map((segment: Segment) => ({
        id: `segment-${condition.id}-${segment.id}`,
        label: segment.label,
        valueLabel: segment.value,
        color: levelPalette.segment,
        type: "segment",
        children: [
          {
            id: `status-${condition.id}-${segment.id}-${segment.status}`,
            label: statusLabelMap[segment.status],
            valueLabel: formatCompact(segment.total),
            color: statusPalette[segment.status],
            type: "status",
          },
        ],
      })),
    })),
  };
}

function visibleChildren(node: TreeNode, expandedIds: Set<string>) {
  if (!node.children?.length || !expandedIds.has(node.id)) {
    return [];
  }

  return node.children;
}

function layoutTree(root: TreeNode, expandedIds: Set<string>) {
  const nodes: PositionedNode[] = [];
  const links: PositionedLink[] = [];
  const rowGap = 54;
  const levelGap = 190;
  const startX = 58;
  const startY = 58;
  let leafIndex = 0;

  const walk = (node: TreeNode, depth: number, parent?: PositionedNode): PositionedNode => {
    const children = visibleChildren(node, expandedIds);
    let y: number;

    if (children.length) {
      const childNodes = children.map((child) => walk(child, depth + 1));
      y = childNodes.reduce((sum, child) => sum + child.y, 0) / childNodes.length;
    } else {
      y = startY + leafIndex * rowGap;
      leafIndex += 1;
    }

    const positioned: PositionedNode = {
      ...node,
      x: startX + depth * levelGap,
      y,
      depth,
      hasChildren: Boolean(node.children?.length),
    };

    nodes.push(positioned);

    if (parent) {
      links.push({ id: `${parent.id}-${positioned.id}`, source: parent, target: positioned });
    }

    children.forEach((child) => {
      const childNode = nodes.find((item) => item.id === child.id);
      if (childNode) {
        links.push({ id: `${positioned.id}-${childNode.id}`, source: positioned, target: childNode });
      }
    });

    return positioned;
  };

  walk(root, 0);

  return {
    nodes,
    links: links.filter((link, index, all) => all.findIndex((item) => item.id === link.id) === index),
    height: Math.max(248, startY + 34 + Math.max(1, leafIndex) * rowGap),
    width: CANVAS_WIDTH,
  };
}

function nodePath(source: PositionedNode, target: PositionedNode) {
  const sourceX = source.x + NODE_WIDTH;
  const sourceY = source.y;
  const targetX = target.x - 14;
  const targetY = target.y;
  const curve = Math.max(48, (targetX - sourceX) * 0.45);

  return `M ${sourceX} ${sourceY} C ${sourceX + curve} ${sourceY}, ${targetX - curve} ${targetY}, ${targetX} ${targetY}`;
}

export function OverviewTree() {
  const [activeStage, setActiveStage] = useState<StageKey>("acquire");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set());
  const treeData = useMemo(() => getOverviewTreeData(), []);
  const stage = treeData[activeStage];
  const hierarchy = useMemo(() => buildHierarchy(stage), [stage]);
  const layout = useMemo(() => layoutTree(hierarchy, expandedIds), [hierarchy, expandedIds]);
  const visibleDepths = useMemo(() => new Set(layout.nodes.map((node) => node.depth)), [layout.nodes]);

  const handleStageChange = (nextStage: StageKey) => {
    setActiveStage(nextStage);
    setExpandedIds(new Set());
  };

  const toggleNode = (node: PositionedNode) => {
    if (!node.hasChildren) {
      return;
    }

    setExpandedIds((current) => {
      const next = new Set(current);

      if (next.has(node.id)) {
        next.delete(node.id);
      } else {
        next.add(node.id);
      }

      return next;
    });
  };

  return (
    <div className="overviewTree overviewTreeLibrary">
      <div className="overviewTreeBody overviewTreeChartBody">
        <aside className="overviewTreeStages">
          {Object.values(treeData).map((item) => {
            const isActive = item.key === activeStage;
            return (
              <button
                key={item.key}
                type="button"
                className={`overviewTreeStageButton ${item.color} ${isActive ? "active" : ""}`}
                onClick={() => handleStageChange(item.key)}
              >
                <strong>{item.label}</strong>
                <span>{item.subtitle}</span>
              </button>
            );
          })}
        </aside>

        <div className="overviewDecompositionPanel">
          <div className="overviewDecompositionHeader">
            <div>
              <strong>{stage.label} Decomposition</strong>
              <span>Click a parent node to expand or collapse the hierarchy</span>
            </div>
            <button type="button" onClick={() => setExpandedIds(new Set())}>
              Reset
            </button>
          </div>

          <div className="overviewDecompositionCanvas">
            <svg viewBox={`0 0 ${layout.width} ${layout.height}`} preserveAspectRatio="xMidYMid meet" role="img">
              <defs>
                <filter id="overviewTreeShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#8eb1d8" floodOpacity="0.22" />
                </filter>
              </defs>
              <g className="overviewDecompositionHeadings">
                {visibleDepths.has(1) ? (
                  <text x={58 + 190 + NODE_WIDTH / 2} y="20" textAnchor="middle">
                    Condition
                  </text>
                ) : null}
                {visibleDepths.has(2) ? (
                  <text x={58 + 190 * 2 + NODE_WIDTH / 2} y="20" textAnchor="middle">
                    Sub-condition
                  </text>
                ) : null}
                {visibleDepths.has(3) ? (
                  <text x={58 + 190 * 3 + NODE_WIDTH / 2} y="20" textAnchor="middle">
                    Status
                  </text>
                ) : null}
              </g>
              <g>
                {layout.links.map((link) => (
                  <path key={link.id} className="overviewDecompositionLink" d={nodePath(link.source, link.target)} />
                ))}
              </g>
              <g>
                {layout.nodes.map((node) => {
                  const isExpanded = expandedIds.has(node.id);
                  const label = node.label.length > 42 ? `${node.label.slice(0, 39).trim()}...` : node.label;
                  const value = node.valueLabel.length > 24 ? `${node.valueLabel.slice(0, 21).trim()}...` : node.valueLabel;
                  const textWidth = node.hasChildren ? 92 : 108;
                  const isStatusNode = node.type === "status";

                  return (
                    <g
                      key={node.id}
                      className={`overviewDecompositionNode ${node.hasChildren ? "clickable" : ""}`}
                        transform={`translate(${node.x}, ${node.y - NODE_HEIGHT / 2})`}
                      onClick={() => toggleNode(node)}
                      role={node.hasChildren ? "button" : "img"}
                    >
                      <rect width={NODE_WIDTH} height={NODE_HEIGHT} rx="10" fill={node.color} opacity={node.type === "status" ? 0.18 : 0.95} filter="url(#overviewTreeShadow)" />
                      <rect width={NODE_WIDTH} height={NODE_HEIGHT} rx="10" fill={node.type === "status" ? "rgba(255,255,255,0.88)" : node.color} stroke={node.color} strokeWidth="1.4" />
                      <foreignObject x="12" y="7" width={textWidth} height="23">
                        <div className={`overviewNodeText overviewNodeLabel ${isStatusNode ? "status" : ""}`}>{label}</div>
                      </foreignObject>
                      <foreignObject x="12" y="31" width={textWidth} height="11">
                        <div className={`overviewNodeText overviewNodeValue ${isStatusNode ? "status" : ""}`}>{value}</div>
                      </foreignObject>
                      {node.hasChildren ? (
                        <g transform="translate(111 14)">
                          <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.9)" />
                          <path d={isExpanded ? "M5 10H15" : "M5 10H15M10 5V15"} stroke={node.color} strokeWidth="2" strokeLinecap="round" />
                        </g>
                      ) : null}
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
