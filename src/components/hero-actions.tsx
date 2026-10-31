"use client";

import { ArrowUpRight } from "lucide-react";
import { Button as AnimateButton } from "@animate-ui/react/primitives/buttons/button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <AnimateButton asChild>
        <a href="#projects" className={cn(buttonVariants({ size: "lg" }), "group")}>
          View projects <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </AnimateButton>
    </div>
  );
}
