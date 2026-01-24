import { useEffect, useRef } from "react";

export function useToggleOutside<T extends HTMLElement>(
    isOpen: boolean,
    onClose: () => void,
) {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (e: MouseEvent) => {
            if (!ref.current) return;
            if (!ref.current.contains(e.target as Node)) {
                onClose();
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    return ref;
}
