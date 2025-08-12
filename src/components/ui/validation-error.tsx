import * as React from "react";
import { cn } from "@/lib/utils";

export interface ValidationErrorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  message?: string;
  children?: React.ReactNode;
}

export function ValidationError({
  className,
  message,
  children,
  ...props
}: ValidationErrorProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 px-4 py-4 border-0 border-l-[8px] rounded-none",
        "bg-[#FDDCE0] border-l-[#C21B2F] text-[#C21B2F]",
        className
      )}
      role="alert"
      aria-live="assertive"
      {...props}
    >
      <img
        src="/images/icon_small_alert_x2.png"
        alt="Validation error"
        className="block h-4 w-4"
      />
      <span className="text-sm">{children ?? message ?? "At least one option should be selected."}</span>
    </div>
  );
}

