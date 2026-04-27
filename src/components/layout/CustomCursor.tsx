import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>(".custom-cursor");
    const dot = document.querySelector<HTMLElement>(".custom-cursor-dot");

    if (!cursor || !dot) return;

    const moveCursor = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isInteractive = Boolean(
        target.closest("a, button, [data-cursor='pointer']")
      );

      setIsPointer(isInteractive);

      cursor.animate(
        {
          transform: `translate(${event.clientX}px, ${event.clientY}px)`,
        },
        {
          duration: 450,
          fill: "forwards",
          easing: "cubic-bezier(.2,.8,.2,1)",
        }
      );

      dot.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className={`custom-cursor ${isPointer ? "is-pointer" : ""}`} />
      <div className="custom-cursor-dot" />
    </>
  );
}