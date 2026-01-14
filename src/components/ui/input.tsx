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
                "w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-sm text-white",
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                "placeholder:text-slate-500",
                className,
            )}
            {...props}
        />
    );
});

Input.displayName = "Input";
