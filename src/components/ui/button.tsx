import * as React from "react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "ghost";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500",
                    variant === "primary" &&
                        "bg-blue-600 text-white hover:bg-blue-500",
                    variant === "ghost" &&
                        "bg-transparent text-white hover:bg-white/10",
                    className,
                )}
                {...props}
            />
        );
    },
);

Button.displayName = "Button";
