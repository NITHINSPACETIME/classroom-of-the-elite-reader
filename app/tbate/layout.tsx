import React from "react";

export default function TbateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="theme-tbate min-h-screen bg-[#070503] text-[#fffbeb]">
      {children}
    </div>
  );
}
