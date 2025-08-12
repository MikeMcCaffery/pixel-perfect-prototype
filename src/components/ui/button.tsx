'use client'

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-blue-600)] text-white border border-[var(--color-blue-600)] hover:bg-[var(--color-blue-700)] active:bg-[var(--color-blue-700)] active:border-2 pl-3",
        blueSolid:
          "bg-[var(--color-blue-600)] text-white border border-[var(--color-blue-600)] hover:bg-[var(--color-blue-700)] active:bg-[var(--color-blue-700)] active:border-2 pl-3",
        secondary: "bg-muted text-foreground hover:bg-muted/80",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        // Blue outline button with persistent blue text/border, hover background, and active 2px border
        blueOutline:
          "border border-[var(--color-blue-600)] text-[var(--color-blue-600)] bg-transparent hover:bg-[#EBF5FD] active:bg-[#EBF5FD] active:border-2 pl-3",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, leftIcon, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {leftIcon ? (
          <span className="inline-flex items-center justify-center text-current">{leftIcon}</span>
        ) : null}
        <span>{children}</span>
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
