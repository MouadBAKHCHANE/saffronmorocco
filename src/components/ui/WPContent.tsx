"use client";

import sanitizeHtml from "sanitize-html";

interface WPContentProps {
  html: string;
  className?: string;
}

const sanitizeOptions: sanitizeHtml.IOptions = {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat([
    "img",
    "figure",
    "figcaption",
    "video",
    "source",
    "picture",
  ]),
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    img: ["src", "srcset", "alt", "title", "width", "height", "loading", "class"],
    figure: ["class"],
    figcaption: ["class"],
    video: ["src", "poster", "controls", "autoplay", "muted", "loop", "class"],
    source: ["src", "type"],
    a: ["href", "target", "rel", "class"],
    div: ["class", "id"],
    span: ["class", "id"],
    p: ["class"],
    h2: ["class", "id"],
    h3: ["class", "id"],
    h4: ["class", "id"],
    ul: ["class"],
    ol: ["class"],
    li: ["class"],
    blockquote: ["class", "cite"],
  },
  disallowedTagsMode: "discard",
};

export default function WPContent({ html, className }: WPContentProps) {
  const cleanHtml = sanitizeHtml(html, sanitizeOptions);

  return (
    <div
      className={`wp-content ${className ?? ""}`}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
}
