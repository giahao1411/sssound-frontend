import * as React from "react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "ghost" | "media" | "section" | "custom";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-md px-4 py-2 transition cursor-pointer focus:outline-none",
                    "text-sm font-small font-osans",
                    variant === "primary" &&
                        "bg-primary text-primary-foreground hover:opacity-90",
                    variant === "ghost" &&
                        "bg-transparent text-foreground-muted hover:text-foreground",
                    variant === "media" &&
                        "bg-foreground text-background hover:opacity-90",
                    variant === "section" &&
                        "bg-surface-muted text-foreground hover:bg-surface-muted-hover",
                    variant === "custom" &&
                        "bg-success text-white hover:opacity-90",
                    className,
                )}
                {...props}
            />
        );
    },
);

Button.displayName = "Button";
