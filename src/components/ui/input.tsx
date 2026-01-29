import * as React from "react";
import { cn } from "@/lib/cn";

export const Input = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
    return (
        <input
            ref={ref}
            className={cn(
                "w-full rounded-md bg-background border border-foreground px-3 py-2 text-sm text-foreground",
                "focus:outline-none focus:ring-1 focus:ring-foreground focus:border-foreground",
                "placeholder:text-foreground-muted disabled:cursor-not-allowed disabled:opacity-50",
                className,
            )}
            {...props}
        />
    );
});

Input.displayName = "Input";
