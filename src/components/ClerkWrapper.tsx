// "use client";

// import React, { useEffect, useState } from "react";

// export default function ClerkWrapper({ children }: { children: React.ReactNode }) {
//   const [ClerkProvider, setClerkProvider] = useState<any>(null); // `any` use kiya hai

//   useEffect(() => {
//     import("@clerk/nextjs").then((mod) => {
//       // TypeScript error ignore karne ke liye `ts-ignore`
//       // @ts-ignore
//       setClerkProvider(() => mod.ClerkProvider);
//     });
//   }, []);

//   if (!ClerkProvider) {
//     return null; // Ya koi loading spinner
//   }

//   return <ClerkProvider>{children}</ClerkProvider>;
// }


// "use client";

// import { ClerkProvider } from "@clerk/nextjs";

// export default function ClerkWrapper({ children }: { children: React.ReactNode }) {
//   return <ClerkProvider>{children}</ClerkProvider>;
// }



