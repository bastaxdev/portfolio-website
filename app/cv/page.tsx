import CvWeb from "@/components/cv/CvWeb";
import type { Metadata } from "next";
import { cvData } from "@/data/cv";

export const metadata: Metadata = {
  title: `${cvData.personal.name} – CV`,
  description: cvData.personal.summary,
  openGraph: {
    title: `${cvData.personal.name} – Junior Frontend Developer`,
    description: cvData.personal.summary,
    url: `https://${cvData.personal.website}/cv`,
  },
};

export default function CvPage() {
  return <CvWeb />;
}
