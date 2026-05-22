import type { ReactNode } from "react";

interface SectionShellProps {
  id: string;
  index: string;
  title: string;
  tag?: string;
  variant?: "default" | "editorial" | "immersive" | "dark";
  children: ReactNode;
  headingId?: string;
  hideIndex?: boolean;
}

export default function SectionShell({
  id,
  index,
  title,
  tag,
  variant = "default",
  children,
  headingId,
  hideIndex = false,
}: SectionShellProps) {
  const hId = headingId ?? `${id}-heading`;

  return (
    <section
      id={id}
      className={`md-section md-section--${variant}`}
      aria-labelledby={hId}
      data-chapter={id}
      data-chapter-index={index}
    >
      <div className={`md-section__chrome${hideIndex ? " md-section__chrome--no-index" : ""}`}>
        {!hideIndex ? (
          <span className="md-section__index" aria-hidden="true">
            {index}
          </span>
        ) : null}
        <header className="md-section__head">
          <h2 id={hId} className="md-section__title">
            {title}
          </h2>
          {tag ? <span className="md-section__tag">{tag}</span> : null}
        </header>
      </div>
      <div className="md-section__body">{children}</div>
    </section>
  );
}
