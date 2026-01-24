import * as React from "react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "ghost" | "media" | "section";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-small transition cursor-pointer focus:outline-none",
                    variant === "primary" &&
                        "bg-primary text-primary-foreground hover:opacity-90",
                    variant === "ghost" &&
                        "bg-transparent text-foreground-muted hover:text-foreground",
                    variant === "media" &&
                        "bg-foreground text-background hover:opacity-90",
                    variant === "section" &&
                        "bg-surface-muted text-foreground hover:bg-surface-muted-hover",
                    className,
                )}
                {...props}
            />
        );
    },
);

Button.displayName = "Button";
