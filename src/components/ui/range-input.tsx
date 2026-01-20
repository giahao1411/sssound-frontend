import * as React from "react";
import { cn } from "@/lib/cn";

type RangeInputProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type"
>;

export const RangeInput = React.forwardRef<HTMLInputElement, RangeInputProps>(
    ({ className, min = 0, max = 100, onChange, ...props }, ref) => {
        const updateFill = (el: HTMLInputElement) => {
            const value = Number(el.value);
            const percent =
                ((value - Number(min)) / (Number(max) - Number(min))) * 100;
            el.style.backgroundSize = `${percent}% 100%`;
        };

        return (
            <input
                ref={(el) => {
                    if (typeof ref === "function") ref(el);
                    else if (ref) ref.current = el;
                    if (el) updateFill(el);
                }}
                type="range"
                min={min}
                max={max}
                onChange={(e) => {
                    updateFill(e.currentTarget);
                    onChange?.(e);
                }}
                className={cn("", className)}
                {...props}
            />
        );
    },
);

RangeInput.displayName = "RangeInput";
