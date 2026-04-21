import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { PriceTicker } from "./PriceTicker";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Fixed header: NavBar + Ticker stacked */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        <NavBar />
        <PriceTicker />
      </div>

      {/* Main content — offset by header height (NavBar ~56px + Ticker ~36px = 92px) */}
      <main className="flex-1 pt-[92px]">{children}</main>

      <Footer />
    </div>
  );
}
