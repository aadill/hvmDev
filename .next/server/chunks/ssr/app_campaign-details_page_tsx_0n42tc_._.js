module.exports=[24945,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(72657),e=a.i(58153),f=a.i(1396);let g=["Entity 1","Entity 2","Entity 3","Entity 4","Entity 5","Entity 6","Entity 7","Entity 8","Entity 9"],h=["Wk 1","Wk 2","Wk 3","Wk 4","Wk 5","Wk 6","Wk 7","Wk 8"],i=["Mon","Tue","Wed","Thu","Fri"],j=["09.00","10.00","11.00","12.00","13.00","14.00","15.00","16.00","17.00","18.00"],k=[[.82,.8,.52,.47,.78],[.4,.25,.24,.82,.48],[.38,.82,.86,.48,.5],[.22,.83,.24,.48,.52],[.8,.42,.4,.45,.77],[.48,.52,.26,.46,.24],[.46,.24,.42,.29,.4],[.24,.82,.42,.24,.21],[.43,.27,.5,.46,.31],[.82,.24,.83,.8,.22]];async function l(a){let b=await fetch(a),c=await b.blob();return await new Promise((b,d)=>{let e=new FileReader;e.onloadend=()=>b(String(e.result)),e.onerror=()=>d(Error(`Failed to embed image: ${a}`)),e.readAsDataURL(c)})}async function m(a,b){let c=Array.from(a.querySelectorAll("img")),d=Array.from(b.querySelectorAll("img"));await Promise.all(c.map(async(a,b)=>{let c=d[b];if(!c)return;let e=a.currentSrc||a.src;if(!e)return;let f=await l(e);c.src=f,c.srcset="",c.setAttribute("src",f)}))}async function n(a){let b,c,d=a.getBoundingClientRect(),e=Math.ceil(d.width),f=Math.ceil(d.height),g=a.cloneNode(!0);g.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),g.style.margin="0",g.style.width=`${e}px`,g.style.height=`${f}px`,g.style.maxWidth="none",g.style.maxHeight="none",g.style.transform="none",b=[a,...Array.from(a.querySelectorAll("*"))],c=[g,...Array.from(g.querySelectorAll("*"))],b.forEach((a,b)=>{let d=c[b];if(!d)return;let e=window.getComputedStyle(a),f=Array.from(e).map(a=>`${a}:${e.getPropertyValue(a)};`).join("");d.setAttribute("style",f),a instanceof HTMLImageElement&&d instanceof HTMLImageElement&&(d.src=a.currentSrc||a.src,d.srcset="",d.loading="eager")}),await m(a,g);let h=new XMLSerializer().serializeToString(g),i=`
    <svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${f}" viewBox="0 0 ${e} ${f}">
      <foreignObject x="0" y="0" width="100%" height="100%">${h}</foreignObject>
    </svg>
  `;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`}async function o(a){await new Promise((b,c)=>{let d=document.createElement("iframe");d.setAttribute("aria-hidden","true"),d.style.position="fixed",d.style.right="0",d.style.bottom="0",d.style.width="0",d.style.height="0",d.style.border="0",d.style.opacity="0",d.style.pointerEvents="none",document.body.appendChild(d);let e=()=>{d.onload=null,d.onerror=null,d.parentNode&&d.parentNode.removeChild(d)};d.onload=()=>{try{let a=d.contentWindow;if(!a){e(),c(Error("Unable to open print frame."));return}a.focus(),a.print(),setTimeout(()=>{e(),b()},1e3)}catch(a){e(),c(a instanceof Error?a:Error("Unable to print PDF."))}},d.onerror=()=>{e(),c(Error("Unable to load export frame."))};let f=d.contentDocument;if(!f){e(),c(Error("Unable to initialize export frame."));return}f.open(),f.write(a),f.close()})}a.s(["default",0,function(){let a=(0,c.useMemo)(()=>(0,f.getOverviewDatasetDateRange)(),[]),l=(0,c.useMemo)(()=>(0,f.getCampaignDetailsFilterOptions)(),[]),m=l.campaignNames[0]??"All",[p,q]=(0,c.useState)({startDate:a.startDate,endDate:a.endDate,region:"All",campaignStage:"All",condition:"All",campaignName:m}),[r,s]=(0,c.useState)(p),[t,u]=(0,c.useState)(!1),[v,w]=(0,c.useState)(!1),x=(0,c.useRef)(null),y=(0,c.useMemo)(()=>(0,f.getCampaignDetailsDataset)(p),[p]),z=y.periodLabels,A=y.patientsAttended,B=y.revenueBars,C=y.costSeries,D=y.metrics,E=y.channelBreakdown,F=y.conversionSegments,G=y.dropoff,H=y.entitySummary,I=y.entitySeries,J=`\xd0 ${y.revenueCurrent.toLocaleString("en-US")}K`,K=`\xd0 ${y.revenueTarget.toLocaleString("en-US")}K`,L=y.costCurrent,M=y.costTarget,N=async()=>{if(x.current&&!v){w(!0);try{var a,b;let c,d=(a=await n(x.current),b=y.campaignName,c=new Intl.DateTimeFormat("en-AE",{dateStyle:"medium",timeStyle:"short"}).format(new Date),`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${b} PDF Export</title>
        <style>
          @page { size: A4 landscape; margin: 14mm; }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            color: #1f3347;
            background: #ffffff;
          }
          .page {
            width: 100%;
          }
          .header {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 24px;
            margin-bottom: 14px;
            padding-bottom: 10px;
            border-bottom: 2px solid #d4e5f6;
          }
          .brand {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .brand strong {
            font-size: 24px;
            letter-spacing: 0.02em;
            color: #235fe8;
          }
          .brand span {
            font-size: 12px;
            font-weight: 700;
            color: #5a7087;
          }
          .meta {
            text-align: right;
          }
          .meta h1 {
            margin: 0 0 4px;
            font-size: 24px;
            font-weight: 700;
            color: #2e455d;
          }
          .meta p {
            margin: 0;
            font-size: 12px;
            color: #6d8499;
          }
          .capture {
            width: 100%;
            display: block;
            border: 1px solid #dbe8f6;
            border-radius: 12px;
          }
          @media print {
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          }
        </style>
      </head>
      <body>
        <div class="page">
          <div class="header">
            <div class="brand">
              <strong>HVM</strong>
              <span>HEALTH VALUE MANAGEMENT</span>
            </div>
            <div class="meta">
              <h1>${b}</h1>
              <p>Exported ${c}</p>
            </div>
          </div>
          <img class="capture" src="${a}" alt="${b}" />
        </div>
        <script>
          window.addEventListener('load', () => {
            setTimeout(() => window.print(), 250);
          });
        </script>
      </body>
    </html>
  `);await o(d)}catch(a){console.error(a),window.alert(a instanceof Error?a.message:"Unable to export the PDF right now.")}finally{w(!1)}}};return(0,b.jsxs)(d.DashboardShell,{pageClassName:"overviewPage campaignDetailsPage",title:"Campaign Details",breadcrumbCurrent:"Campaign Details",breadcrumbTrail:[{label:"Overview",href:"/overview"},{label:"Life Stage",href:"/lifestage-overview/acquire"},{label:"Sub Condition Details",href:"/campaign-sub-condition"},{label:"Campaign Details"}],entityTabs:g,activeEntityTab:"Entity 1",activeNav:"campaignDetails",headerTabsClassName:"overviewTabs",bodyClassName:"campaignDetailsBody",eventCalendarActive:!0,children:[(0,b.jsxs)("div",{ref:x,className:"campaignDetailsExportFrame",children:[(0,b.jsxs)("div",{className:"campaignDetailsFilterRow",children:[(0,b.jsxs)("div",{className:"filterGroup campaignNameFilter",children:[(0,b.jsx)("span",{children:"Campaign Name"}),(0,b.jsx)("label",{className:"filterSelectWrap",children:(0,b.jsxs)("select",{className:"filterInput filterSelect campaignNameSelect",value:r.campaignName,onChange:a=>s(b=>({...b,campaignName:a.target.value})),children:[(0,b.jsx)("option",{value:"All",children:"All Campaigns"}),l.campaignNames.map(a=>(0,b.jsx)("option",{value:a,children:a},a))]})})]}),(0,b.jsx)("span",{className:"subConditionDivider"}),(0,b.jsxs)("div",{className:"filterGroup",children:[(0,b.jsx)("span",{children:"Date Range"}),(0,b.jsx)("input",{type:"date",className:"filterInput short",value:r.startDate,onChange:a=>s(b=>({...b,startDate:a.target.value}))}),(0,b.jsx)("input",{type:"date",className:"filterInput short",value:r.endDate,onChange:a=>s(b=>({...b,endDate:a.target.value}))})]}),(0,b.jsxs)("div",{className:"filterGroup",children:[(0,b.jsx)("span",{children:"Regions"}),(0,b.jsx)("label",{className:"filterSelectWrap",children:(0,b.jsxs)("select",{className:"filterInput filterSelect",value:r.region,onChange:a=>s(b=>({...b,region:a.target.value})),children:[(0,b.jsx)("option",{value:"All",children:"All"}),l.providers.map(a=>(0,b.jsx)("option",{value:a,children:a},a))]})})]}),(0,b.jsxs)("div",{className:"filterGroup",children:[(0,b.jsx)("span",{children:"Campaign Type"}),(0,b.jsx)("label",{className:"filterSelectWrap",children:(0,b.jsxs)("select",{className:"filterInput filterSelect",value:r.campaignStage,onChange:a=>s(b=>({...b,campaignStage:a.target.value})),children:[(0,b.jsx)("option",{value:"All",children:"All"}),l.campaignStages.map(a=>(0,b.jsx)("option",{value:a,children:a},a))]})})]}),(0,b.jsxs)("div",{className:"filterGroup",children:[(0,b.jsx)("span",{children:"Condition"}),(0,b.jsx)("label",{className:"filterSelectWrap",children:(0,b.jsxs)("select",{className:"filterInput filterSelect",value:r.condition,onChange:a=>s(b=>({...b,condition:a.target.value})),children:[(0,b.jsx)("option",{value:"All",children:"All"}),l.conditions.map(a=>(0,b.jsx)("option",{value:a,children:a},a))]})})]}),(0,b.jsx)("button",{type:"button",className:"applyButton",onClick:()=>q(r),children:"APPLY"})]}),(0,b.jsx)("div",{className:"campaignDetailsMetricGrid",children:D.map(a=>(0,b.jsxs)("article",{className:"metricCard campaignDetailsMetricCard",children:[(0,b.jsx)("img",{src:a.icon,alt:"",className:"metricIcon"}),(0,b.jsxs)("div",{className:"metricContent",children:[(0,b.jsx)("h2",{children:a.title}),(0,b.jsxs)("div",{className:"metricValueRow campaignDetailsMetricValue",children:[(0,b.jsx)("strong",{className:"success"===a.tone?"successValue":void 0,children:a.value}),a.note?(0,b.jsx)("span",{className:"campaignDetailsMetricNote",children:a.note}):null]})]})]},a.title))}),(0,b.jsxs)("div",{className:"campaignDetailsTopGrid",children:[(0,b.jsxs)("section",{className:"glassCard campaignPatientsPanel",children:[(0,b.jsx)("h2",{children:"Patients Attended"}),(0,b.jsxs)("div",{className:"campaignDetailsLineChart",children:[(0,b.jsx)(e.ExportLineChart,{values:A,max:1.15*Math.max(...A,1),labels:z,color:"#2563EB",area:!0}),(0,b.jsx)("span",{className:"campaignYearLabel",children:"2025"}),(0,b.jsx)("span",{className:"campaignAxisLabel",children:"Patients"})]})]}),(0,b.jsxs)("section",{className:"glassCard campaignRevenuePanel",children:[(0,b.jsx)("h2",{children:"Revenue Generated"}),(0,b.jsxs)("div",{className:"campaignRevenueSummary",children:[(0,b.jsx)("strong",{children:J}),(0,b.jsxs)("span",{children:["of ",K," target"]})]}),(0,b.jsx)("div",{className:"campaignRevenueProgress",children:(0,b.jsx)("span",{style:{width:`${y.revenueCurrent/y.revenueTarget*100}%`}})}),(0,b.jsx)("div",{className:"campaignRevenueBars",children:(0,b.jsx)(e.ExportBarValueChart,{values:B,labels:h,max:1.15*Math.max(...B,1)})})]}),(0,b.jsxs)("section",{className:"glassCard campaignChannelPanel",children:[(0,b.jsx)("h2",{children:"Channel Breakdown"}),(0,b.jsx)("div",{className:"donutLegend campaignDonutLegend",children:E.map(a=>(0,b.jsx)("span",{className:"legend donut",style:{color:a.color},children:a.label},a.label))}),(0,b.jsx)(e.ExportLabeledDonutChart,{data:E.map(a=>({label:a.label,pct:a.value,color:a.color,value:a.amount})),height:320})]}),(0,b.jsxs)("section",{className:"glassCard campaignDropoffPanel",children:[(0,b.jsx)("h2",{children:"Drop-off Rate"}),(0,b.jsx)(e.ExportFunnelChart,{data:G,height:285})]})]}),(0,b.jsxs)("div",{className:"campaignDetailsBottomGrid",children:[(0,b.jsxs)("section",{className:"glassCard campaignEntitiesPanel",children:[(0,b.jsx)("h2",{children:"Entities in Campaign"}),(0,b.jsx)(e.ExportEntitiesSummary,{summary:H,series:I,chartHeight:190})]}),(0,b.jsxs)("section",{className:"glassCard campaignConversionPanel",children:[(0,b.jsx)("h2",{children:"Conversion by Segment"}),(0,b.jsx)("div",{className:"chartLegend",children:F.map(a=>(0,b.jsx)("span",{className:"legend donut",style:{color:a.color},children:a.label},a.label))}),(0,b.jsx)(e.ExportBubbleChart,{data:F,height:300,metricLabel:"Conversion",detailLabel:"(Booked / Contacted)"})]}),(0,b.jsxs)("section",{className:"glassCard campaignHeatmapPanel",children:[(0,b.jsx)("h2",{children:"Booked Appointment Heatmap"}),(0,b.jsxs)("div",{className:"campaignHeatLegend",children:[(0,b.jsx)("span",{children:"Low"}),(0,b.jsx)("div",{children:[.15,.3,.45,.6,.8].map(a=>(0,b.jsx)("span",{style:{background:`rgba(18, 182, 224, ${a})`}},a))}),(0,b.jsx)("span",{children:"High"})]}),(0,b.jsx)(e.ExportHeatmap,{values:k,columns:i,rows:j})]}),(0,b.jsxs)("section",{className:"glassCard campaignCostPanel",children:[(0,b.jsx)("h2",{children:"Campaign Cost Efficiency"}),(0,b.jsxs)("div",{className:"campaignCostLegend",children:[(0,b.jsx)("span",{className:"legend acquire",children:"Cost/ Conv"}),(0,b.jsx)("span",{className:"legend target",children:"Target"})]}),(0,b.jsxs)("div",{className:"campaignCostSummary",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("strong",{className:"successValue",children:L}),(0,b.jsx)("span",{children:"Current"})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("strong",{className:"dangerValue",children:M}),(0,b.jsx)("span",{children:"Target"})]})]}),(0,b.jsx)("div",{className:"campaignCostChart",children:(0,b.jsx)(e.ExportLineChart,{values:C,max:1.15*Math.max(...C,y.targetLine,1),labels:h,color:"#22C55E",area:!0})})]})]})]}),(0,b.jsxs)("button",{type:"button",className:"campaignInfoFab",onClick:()=>u(!0),children:[(0,b.jsx)("span",{className:"campaignInfoFabIcon",children:"i"}),(0,b.jsx)("span",{children:"Campaign info"})]}),t?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("button",{type:"button",className:"campaignInfoBackdrop","aria-label":"Close campaign info",onClick:()=>u(!1)}),(0,b.jsxs)("aside",{className:"campaignInfoDrawer","aria-label":"Campaign info",children:[(0,b.jsxs)("div",{className:"campaignInfoDrawerHeader",children:[(0,b.jsx)("h2",{children:"CAMPAIGN INFO"}),(0,b.jsx)("button",{type:"button",className:"campaignInfoClose","aria-label":"Close campaign info",onClick:()=>u(!1),children:"×"})]}),(0,b.jsxs)("div",{className:"campaignInfoHero",children:[(0,b.jsx)("h3",{children:y.campaignName}),(0,b.jsxs)("p",{children:["ID: ",y.campaignId]})]}),(0,b.jsxs)("section",{className:"campaignInfoSection",children:[(0,b.jsxs)("div",{className:"campaignInfoSectionTitle",children:[(0,b.jsx)("h4",{children:"TIMELINE"}),(0,b.jsx)("span",{})]}),(0,b.jsxs)("div",{className:"campaignInfoTimelineGrid",children:[(0,b.jsxs)("article",{className:"campaignInfoMiniCard",children:[(0,b.jsx)("img",{src:"/overview-seen-rate.png",alt:""}),(0,b.jsxs)("div",{children:[(0,b.jsx)("strong",{children:"Start Date"}),(0,b.jsx)("span",{children:y.timeline.startDate})]})]}),(0,b.jsxs)("article",{className:"campaignInfoMiniCard",children:[(0,b.jsx)("img",{src:"/overview-seen-rate.png",alt:""}),(0,b.jsxs)("div",{children:[(0,b.jsx)("strong",{children:"End Date"}),(0,b.jsx)("span",{children:y.timeline.endDate})]})]})]}),(0,b.jsxs)("div",{className:"campaignInfoProgressRow",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("strong",{children:"Duration & Progress"}),(0,b.jsxs)("p",{children:[y.timeline.progress,"% of selected period complete"]}),(0,b.jsx)("strong",{children:"Review Checkpoint"}),(0,b.jsx)("p",{children:"15 February 2025 · Completed"})]}),(0,b.jsx)("div",{className:"campaignInfoProgressRing",children:(0,b.jsx)("div",{className:"campaignInfoProgressCircle",children:(0,b.jsxs)("div",{children:[(0,b.jsxs)("strong",{children:[y.timeline.progress,"%"]}),(0,b.jsx)("span",{children:"COMPLETED"})]})})})]})]}),(0,b.jsxs)("section",{className:"campaignInfoSection",children:[(0,b.jsxs)("div",{className:"campaignInfoSectionTitle",children:[(0,b.jsx)("h4",{children:"FINANCIALS"}),(0,b.jsx)("span",{})]}),(0,b.jsxs)("article",{className:"campaignInfoWideCard",children:[(0,b.jsx)("img",{src:"/overview-candidate.png",alt:""}),(0,b.jsxs)("div",{children:[(0,b.jsx)("strong",{children:"Targeted Patients"}),(0,b.jsx)("span",{children:D[0]?.value??"0"})]})]}),(0,b.jsxs)("div",{className:"campaignInfoStatsGrid",children:[(0,b.jsxs)("article",{className:"campaignInfoMiniCard",children:[(0,b.jsx)("img",{src:"/overview-announcement.png",alt:""}),(0,b.jsxs)("div",{children:[(0,b.jsx)("strong",{children:"Contacted"}),(0,b.jsx)("span",{children:D[1]?.value??"0"})]})]}),(0,b.jsxs)("article",{className:"campaignInfoMiniCard",children:[(0,b.jsx)("img",{src:"/overview-candidate.png",alt:""}),(0,b.jsxs)("div",{children:[(0,b.jsx)("strong",{children:"Attend"}),(0,b.jsx)("span",{children:A.reduce((a,b)=>a+b,0).toLocaleString("en-US")})]})]})]})]}),(0,b.jsxs)("section",{className:"campaignInfoSection",children:[(0,b.jsxs)("div",{className:"campaignInfoSectionTitle",children:[(0,b.jsx)("h4",{children:"OPERATIONS"}),(0,b.jsx)("span",{})]}),(0,b.jsxs)("div",{className:"campaignInfoOperationsGrid",children:[(0,b.jsxs)("article",{className:"campaignInfoListCard",children:[(0,b.jsx)("strong",{children:"Running Locations"}),(0,b.jsx)("ul",{children:y.locations.map(a=>(0,b.jsx)("li",{children:a},a))})]}),(0,b.jsxs)("article",{className:"campaignInfoListCard",children:[(0,b.jsx)("strong",{children:"Active channels"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:"SMS"}),(0,b.jsx)("li",{children:"Phone Call"}),(0,b.jsx)("li",{children:"Whatsapp"}),(0,b.jsx)("li",{children:"Patient app"})]})]})]})]}),(0,b.jsxs)("section",{className:"campaignInfoSection",children:[(0,b.jsxs)("div",{className:"campaignInfoSectionTitle",children:[(0,b.jsx)("h4",{children:"CAMPAIGN DESCRIPTION"}),(0,b.jsx)("span",{})]}),(0,b.jsx)("p",{className:"campaignInfoDescription",children:"A structured 90-day outreach program targeting patients at elevated risk of Type 2 diabetes across five entities facilities in Abu Dhabi. The campaign focuses on early screening, lifestyle intervention referrals, and medication adherence tracking. Patients are contacted via multi-channel outreach and routed into the Build segment for long-term health management. Success is measured by screening completion rates, referral uptake, and revenue realisation against the allocated budget."})]}),(0,b.jsxs)("div",{className:"campaignInfoActions",children:[(0,b.jsx)("button",{type:"button",className:"campaignInfoGhostButton",onClick:()=>u(!1),children:"Close"}),(0,b.jsx)("button",{type:"button",className:"campaignInfoPrimaryButton",onClick:N,disabled:v,children:v?"Exporting...":"Export PDF"})]})]})]}):null]})}])}];

//# sourceMappingURL=app_campaign-details_page_tsx_0n42tc_._.js.map