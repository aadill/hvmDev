import { notFound } from "next/navigation";
import { LifestageDashboard } from "../../../components/lifestage-dashboard";

type StageKey = "acquire" | "build" | "contain";

export default async function LifestageStagePage({
  params,
}: {
  params: Promise<{ stage: string }>;
}) {
  const { stage } = await params;
  const normalizedStage = stage.toLowerCase() as StageKey;

  if (!["acquire", "build", "contain"].includes(normalizedStage)) {
    notFound();
  }

  return <LifestageDashboard stage={normalizedStage} />;
}
