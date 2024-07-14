// components/ThirdwebProvider.tsx
'use client';

import { ThirdwebProvider as ActualThirdwebProvider } from "@thirdweb-dev/react";
import { ReactNode } from "react";

export function ThirdwebProvider({ children }: { children: ReactNode }) {
  return (
    <ActualThirdwebProvider activeChain="mumbai">
      {children}
    </ActualThirdwebProvider>
  );
}
