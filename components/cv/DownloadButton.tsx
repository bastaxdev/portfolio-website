"use client";

import { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import CvPdf from "./CvPdf";
import { cvData } from "@/data/cv";

export default function DownloadButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const blob = await pdf(<CvPdf />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${cvData.personal.name.replace(" ", "_")}_CV.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleDownload}
        disabled={loading}
        className="rounded-full px-6 py-3 text-sm font-semibold transition-all hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed"
        style={{ background: "var(--accent)", color: "#fff" }}
      >
        {loading ? "Generating..." : "↓ Download CV"}
      </button>
      <span
        className="text-xs font-mono"
        style={{ color: "var(--text-faint)" }}
      >
        {cvData.personal.website}/cv
      </span>
    </div>
  );
}
