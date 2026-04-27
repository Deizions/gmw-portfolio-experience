import { ImageIcon } from "lucide-react";

type ImagePlaceholderProps = {
  label: string;
  description: string;
  aspectRatio?: "square" | "landscape" | "portrait" | "wide" | "poster";
  variant?: "light" | "dark" | "accent";
  className?: string;
};

const aspectRatioMap = {
  square: "1 / 1",
  landscape: "4 / 3",
  portrait: "3 / 4",
  wide: "16 / 9",
  poster: "2 / 3",
};

export default function ImagePlaceholder({
  label,
  description,
  aspectRatio = "landscape",
  variant = "light",
  className = "",
}: ImagePlaceholderProps) {
  const bgClass = {
    light: "image-placeholder--light",
    dark: "image-placeholder--dark",
    accent: "image-placeholder--accent",
  }[variant];

  return (
    <div
      className={`image-placeholder ${bgClass} ${className}`}
      style={{ aspectRatio: aspectRatioMap[aspectRatio] }}
      role="img"
      aria-label={`${label}: ${description}`}
    >
      <div className="image-placeholder-content">
        <div className="image-placeholder-icon">
          <ImageIcon size={32} strokeWidth={2} />
        </div>
        <span className="image-placeholder-label">{label}</span>
        <p className="image-placeholder-description">{description}</p>
      </div>
      <div className="image-placeholder-grid" aria-hidden="true" />
      <div className="image-placeholder-corners" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
