import React from "react";

export default function TensuraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="tensura-theme min-h-screen bg-[#05060f] text-[#e2f3fe]">
      {children}
    </div>
  );
}
