import React, { useEffect, useRef } from "react";

interface SplineViewerProps {
  url: string;
  className?: string;
}

export function SplineViewer({ url, className }: SplineViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create the spline-viewer element
    const viewer = document.createElement("spline-viewer");
    viewer.setAttribute("url", url);

    // Append it to the container
    containerRef.current.appendChild(viewer);

    // Cleanup on unmount
    return () => {
      if (containerRef.current && viewer.parentNode === containerRef.current) {
        containerRef.current.removeChild(viewer);
      }
    };
  }, [url]);

  return <div ref={containerRef} className={className} />;
}
