export interface MandayaChapter {
  id: string;
  index: string;
  label: string;
  href: string;
}

export const mandayaChapters: MandayaChapter[] = [
  { id: "introduction", index: "01", label: "Introduction", href: "#introduction" },
  { id: "history", index: "02", label: "History", href: "#history" },
  { id: "social", index: "03", label: "Social", href: "#social" },
  { id: "political", index: "04", label: "Political", href: "#political" },
  { id: "economic", index: "05", label: "Economic", href: "#economic" },
  { id: "culture", index: "06", label: "Culture", href: "#culture" },
  { id: "religion", index: "07", label: "Religion", href: "#religion" },
  { id: "issues", index: "08", label: "Issues", href: "#issues" },
  { id: "reflections", index: "09", label: "Reflections", href: "#reflections" },
  { id: "references", index: "10", label: "References", href: "#references" },
];
