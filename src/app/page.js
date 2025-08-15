"use client";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function FileUploader() {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [phase, setPhase] = useState("idle");
  const [uploading, setUploading] = useState(false);

  // Total duration for upload + processing combined
  const TOTAL_DURATION_MS = 180000; // 3 minutes
  const [remainingMs, setRemainingMs] = useState(TOTAL_DURATION_MS);
  const [progress, setProgress] = useState(0);

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const timerStartedRef = useRef(false); // prevents multiple timer starts

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) uploadFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) uploadFile(file);
  };

  const startCountdown = () => {
    if (timerStartedRef.current) return; // avoid restarting timer
    timerStartedRef.current = true;

    setPhase("waiting");
    setRemainingMs(TOTAL_DURATION_MS);
    setProgress(0);
    const start = Date.now();

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const remain = Math.max(TOTAL_DURATION_MS - elapsed, 0);
      setRemainingMs(remain);
      const pct = Math.min(
        100,
        Math.round((elapsed / TOTAL_DURATION_MS) * 100)
      );
      setProgress(pct);
    }, 1000);

    timeoutRef.current = setTimeout(() => {
      clearTimers();
      setRemainingMs(0);
      setProgress(100);
      setPhase("done");
    }, TOTAL_DURATION_MS + 400);
  };

  const clearTimers = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  const uploadFile = async (file) => {
    setUploading(true);
    setPhase("uploading");

    // Start countdown immediately when upload begins
    startCountdown();

    toast.dismiss();
    toast.loading("Uploading your file…");

    try {
      const webhookUrl =
        "https://wsi-utopiads.app.n8n.cloud/webhook/dfef9d24-252b-477b-a37b-03c69a4efd28";

      const formData = new FormData();
      formData.append("data", file);

      await fetch(webhookUrl, { method: "POST", body: formData });

      toast.dismiss();
      toast.success("Uploaded! The file is being processed right now…");

      // Switch to "waiting" phase if still uploading
      setPhase("waiting");
    } finally {
      setUploading(false);
      setIsDragging(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const minutes = Math.floor(remainingMs / 60000);
  const seconds = Math.floor((remainingMs % 60000) / 1000);
  const mmss = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;

  const openOutputSheet = () => {
    window.open(
      "https://docs.google.com/spreadsheets/d/1lNrqHX1c93VI7cZz84Fqrd4KJ5PZcXtYJShWGE1XU4o",
      "_blank"
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Toaster position="top-center" />

      {/* Upload Card */}
      <div
        onClick={() =>
          !uploading && phase !== "waiting" && fileInputRef.current?.click()
        }
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`p-10 border-4 border-dashed rounded-2xl cursor-pointer transition-all duration-300 ${
          isDragging ? "border-blue-400 bg-blue-50" : "border-gray-300 bg-white"
        } shadow-xl w-80 h-80 flex flex-col items-center justify-center`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 mb-4 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 3v12m0 0l-4-4m4 4l4-4m-9 8h10a2 2 0 002-2V9a2 2 0 00-2-2h-3.5l-1.5-1.5H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <p className="text-gray-600 text-center">
          {uploading
            ? "Uploading…"
            : isDragging
            ? "Drop your file here"
            : "Click or drag a PDF/TXT to upload"}
        </p>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.txt"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Status Box BELOW uploader */}
      {phase !== "idle" && (
        <div className="mt-8 w-full max-w-md bg-white/90 rounded-xl shadow-lg border border-blue-200 p-6 relative">
          {/* Blue Glow */}
          <div className="absolute -inset-4 rounded-xl bg-blue-300 blur-2xl opacity-30"></div>

          <div className="relative">
            <header className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">
                Invoices Are Being Processed
              </h2>
              <StatusBadge phase={phase} />
            </header>

            {(phase === "uploading" || phase === "waiting") && (
              <div>
                <p className="text-sm text-gray-700 mb-4">
                  {phase === "uploading"
                    ? "Sending your file…"
                    : "The file is being processed right now (~3 minutes total)."}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-[width] duration-1000"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="mt-2 text-xs text-gray-500">ETA: {mmss}</div>
                <StepList phase={phase} />
              </div>
            )}

            {phase === "done" && (
              <div className="space-y-5">
                <div className="p-4 border border-blue-200 rounded-lg bg-white">
                  <div className="flex items-center gap-3">
                    <CheckIcon />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Processing Complete
                      </h3>
                      <p className="text-sm text-gray-600">
                        Data saved into <strong>Electric</strong> and/or{" "}
                        <strong>Gas</strong> tabs.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={openOutputSheet}
                  className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 font-medium shadow-lg hover:shadow-xl transition"
                >
                  Open Output Sheet
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function StatusBadge({ phase }) {
  const map = {
    idle: { text: "Idle", cls: "bg-gray-100 text-gray-600" },
    uploading: { text: "Uploading", cls: "bg-blue-100 text-blue-700" },
    waiting: { text: "Processing", cls: "bg-blue-100 text-blue-700" },
    done: { text: "Success", cls: "bg-green-100 text-green-700" },
  }[phase] || { text: "Idle", cls: "bg-gray-100 text-gray-600" };

  return (
    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${map.cls}`}>
      {map.text}
    </span>
  );
}

function StepList({ phase }) {
  const steps = [
    { label: "Upload received", active: phase !== "idle" },
    { label: "Workflow triggered", active: phase !== "idle" },
    {
      label: "AI parsing & mapping",
      active: phase === "waiting" || phase === "done",
    },
    { label: "Saved to Sheets", active: phase === "done" },
  ];
  return (
    <ol className="space-y-2 mt-4">
      {steps.map((s, idx) => (
        <li key={idx} className="flex items-center gap-2 text-sm">
          <span
            className={`inline-flex h-2.5 w-2.5 rounded-full ${
              s.active ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
          <span className={s.active ? "text-gray-900" : "text-gray-500"}>
            {s.label}
          </span>
        </li>
      ))}
    </ol>
  );
}

function CheckIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" className="shrink-0">
      <circle cx="12" cy="12" r="10" fill="#3B82F6" opacity="0.15" />
      <path
        d="M6 12l4 4 8-8"
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
