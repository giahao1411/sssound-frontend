import { useState } from "react";
import { cn } from "@/lib/cn";

interface SwitchProps {
    defaultValue?: boolean;
    onChange?: (value: boolean) => void;
}

export default function Switch({
    defaultValue = false,
    onChange,
}: SwitchProps) {
    const [enabled, setEnabled] = useState(defaultValue);

    const toggle = () => {
        setEnabled((prev) => {
            const next = !prev;
            onChange?.(next);
            return next;
        });
    };

    return (
        <button
            type="button"
            onClick={toggle}
            className={cn(
                "relative inline-flex h-6 w-11.5 items-center rounded-full border transition-colors duration-200 focus:outline-none",
                enabled
                    ? "bg-success border-success"
                    : "bg-surface border-border",
            )}
            aria-pressed={enabled}
        >
            {/* Thumb */}
            <span
                className={cn(
                    "inline-flex h-4 w-4 items-center justify-center rounded-full bg-white shadow transition-transform duration-200",
                    enabled ? "translate-x-6" : "translate-x-1",
                )}
            ></span>
        </button>
    );
}
