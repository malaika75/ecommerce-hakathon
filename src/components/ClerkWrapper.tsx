"use client";

import React, { useEffect, useState } from "react";

export default function ClerkWrapper({ children }: { children: React.ReactNode }) {
  const [ClerkProvider, setClerkProvider] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    import("@clerk/nextjs").then((mod) => {
      // Convert to unknown first then to React.ComponentType<any>
      setClerkProvider(() => (mod.ClerkProvider as unknown) as React.ComponentType<any>);
    });
  }, []);

  if (!ClerkProvider) {
    return null; // or a loading indicator
  }

  return <ClerkProvider>{children}</ClerkProvider>;
}

