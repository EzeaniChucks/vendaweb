// components/ui/button.tsx - UPDATE to use theme colors
"use client";

import { ReactNode, ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "sm" | "default" | "lg";
  asChild?: boolean;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "default",
      size = "default",
      className,
      asChild = false,
      href,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95";

    const variants = {
      default:
        "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl",
      outline:
        "border-2 border-border bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      default: "h-11 px-6",
      lg: "h-14 px-8 text-lg",
    };

    const buttonClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    if (asChild && href) {
      return (
        <Link href={href} className={buttonClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
