import { useEffect, useState } from "react";

export const RadialCircle = () => {
  const [{ x, y }, setCursorPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setCursorPosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      className="pointer-events-none inset-0 z-30 transition duration-300 lg:fixed bg-slate-700 max-sm:hidden"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
};
