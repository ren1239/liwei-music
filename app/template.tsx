import React from "react";
import { ShuffleLoaderSection } from "./components/ShuffleLoader/ShuffleLoader";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ShuffleLoaderSection />
      {children}
    </div>
  );
}
