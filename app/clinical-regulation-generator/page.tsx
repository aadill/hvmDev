"use client";

import { ChangeEvent, DragEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { DashboardShell } from "../../components/dashboard-shell";

const steps = [
  {
    label: "Analysing document structure",
    animationTitle: "Processing Data",
    subheadings: [
      "Analysing document structure",
      "Sorting content into categories",
      "Building database tables",
    ],
    title: "ANALYSING DOCUMENT STRUCTURE",
    copy: "The uploaded PDF is being parsed page by page — content is segmented into typed blocks and committed to the database, forming the structured foundation for the next steps.",
    gif: "/upload-steps/processing.gif",
  },
  {
    label: "Scanning for clinical values",
    animationTitle: "Exctracting Values",
    subheadings: [
      "Scanning for clinical values",
      "Extracting key measurements",
      "Validating extracted fields",
    ],
    title: "SCANNING FOR CLINICAL VALUES",
    copy: "Clinical values, measurements, and coded terms are identified, validated against expected ranges, and mapped to their corresponding schema fields — ready for rule matching.",
    gif: "/upload-steps/extracting.gif",
  },
  {
    label: "Matching guideline rules",
    animationTitle: "Processing clinical rules",
    subheadings: [
      "Matching guideline rules",
      "Inserting clinical annotations",
      "Finalising your PDF output",
    ],
    title: "MATCHING GUIDELINE RULES",
    copy: "Each guideline rule is evaluated against the mapped values, matched rules generate positioned annotations, and the enriched content is compiled into your final fine-tuned PDF.",
    gif: "/upload-steps/clinical.gif",
  },
  {
    label: "Complete",
    animationTitle: "Your document is ready",
    subheadings: [""],
    title: "FINE-TUNED PDF READY",
    copy: "All three processing steps have completed successfully. Clinical guidelines have been evaluated against your document, and every matching rule has been embedded as a traceable annotation in the correct position. Your fine-tuned PDF is now ready. Download it below to access the enriched document with all clinical guidance applied and structured for review.",
    gif: "/upload-steps/check.gif",
  },
];

export default function ClinicalRegulationGeneratorPage() {
  const [fileName, setFileName] = useState("");
  const [progress, setProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const currentStepIndex = useMemo(() => {
    if (progress >= 100) {
      return steps.length - 1;
    }

    return Math.min(steps.length - 2, Math.floor(progress / 33.34));
  }, [progress]);

  const currentStep = steps[currentStepIndex];
  const activeStepProgress = currentStepIndex < steps.length - 1 ? progress - currentStepIndex * (100 / (steps.length - 1)) : 100;
  const activeSubheadingIndex =
    currentStep.subheadings.length > 1
      ? Math.min(currentStep.subheadings.length - 1, Math.floor(activeStepProgress / (100 / (steps.length - 1) / currentStep.subheadings.length)))
      : 0;
  const currentSubheading = currentStep.subheadings[activeSubheadingIndex];

  useEffect(() => {
    if (!isProcessing) {
      return;
    }

    const timer = window.setInterval(() => {
      setProgress((value) => {
        const nextValue = Math.min(100, value + 2);

        if (nextValue >= 100) {
          window.clearInterval(timer);
          window.setTimeout(() => setIsProcessing(false), 450);
        }

        return nextValue;
      });
    }, 140);

    return () => window.clearInterval(timer);
  }, [isProcessing]);

  const startProcessing = (files: FileList | null) => {
    const file = files?.[0];
    if (!file) {
      return;
    }

    setFileName(file.name);
    setProgress(0);
    setIsProcessing(true);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    startProcessing(event.target.files);
    event.target.value = "";
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    startProcessing(event.dataTransfer.files);
  };

  const handleDragOver = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
  };

  const downloadExcel = () => {
    const safeFileName = (fileName || "uploaded-document")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
    const generatedDate = new Date().toLocaleString("en-GB");
    const worksheet = `
      <table>
        <thead>
          <tr>
            <th>Document</th>
            <th>Status</th>
            <th>Generated On</th>
            <th>Clinical Summary</th>
            <th>Recommended Next Step</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${safeFileName}</td>
            <td>Draft output ready</td>
            <td>${generatedDate}</td>
            <td>Clinical information extracted and prepared for dashboard review.</td>
            <td>Proceed to HVM dashboard introduction.</td>
          </tr>
        </tbody>
      </table>
    `;
    const blob = new Blob([worksheet], { type: "application/vnd.ms-excel" });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "clinical-regulation-output.xls";
    anchor.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <DashboardShell
      pageClassName="introPage uploadPage"
      title="Clinical Guidelines Generator"
      breadcrumbCurrent="Clinical Guidelines Generator"
      activeNav="clinicalGenerator"
      bodyClassName="uploadContent"
      showEventCalendar={false}
    >
      <section className="uploadPanel">
        {fileName ? (
          <div className="uploadProgressView">
            <div className="uploadProgressCenter">
              <h2 className="uploadAnimationTitle">{currentStep.animationTitle}</h2>

              <div className="uploadStepAnimation">
                <img src={currentStep.gif} alt={`${currentStep.label} animation`} />
              </div>

              <div className="uploadProgressTrack" aria-label={`${currentStep.label}: ${progress}% complete`}>
                <span style={{ width: `${progress}%` }} />
              </div>

              <div className="uploadProgressMeta">
                <h2>{currentSubheading}</h2>
                <p>{currentStep.copy}</p>
                <strong>{fileName}</strong>
              </div>

              <div className="uploadStepList" aria-label="Processing status">
                {steps.slice(0, -1).map((step, index) => (
                  <span
                    key={step.label}
                    className={index < currentStepIndex || progress >= 100 ? "complete" : index === currentStepIndex ? "active" : ""}
                  >
                    {step.label}
                  </span>
                ))}
              </div>

              {progress >= 100 ? (
                <div className="uploadCompleteActions">
                  <button type="button" className="uploadBrowseButton uploadDownloadButton" onClick={downloadExcel}>
                    Download Document ↓
                  </button>
                  <Link className="uploadBrowseButton uploadDashboardButton" href="/introduction">
                    Visit Platform ↗
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <div className="uploadInner">
            <h2>Upload your documents here</h2>

            <label className="uploadDropzone" onDrop={handleDrop} onDragOver={handleDragOver}>
              <input type="file" multiple accept=".pdf,.doc,.docx,.txt" onChange={handleFileChange} />
              <span className="uploadDropText">
                Drag &amp; Drop your files here
                <small>or</small>
              </span>
              <span className="uploadBrowseButton">UPLOAD DOCUMENT</span>
              <span className="uploadHelp">Allowed Formats pdf, doc, docx, txt</span>
              <span className="uploadHelp">Max Size - 10MB</span>
            </label>

            <div className="uploadIntroCopy">
              <h3>INTRODUCTION</h3>
              <p>
                This tool takes your clinical PDF and runs it through a three-step intelligent
                processing pipeline. It parses the document structure, extracts all relevant clinical
                values, and applies a curated set of guidelines — then returns a fine-tuned PDF with
                every annotation embedded and traceable.
                <br />
                <br />
                No manual tagging or formatting is required on your end. Simply upload your document
                and the system handles the rest, from reading the raw content right through to
                generating the enriched output file.
              </p>
            </div>
          </div>
        )}
      </section>
    </DashboardShell>
  );
}
