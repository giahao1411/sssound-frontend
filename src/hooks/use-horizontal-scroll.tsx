import type { Direction } from "@/types";
import { useCallback, useEffect, useRef, useState } from "react";

interface UseHorizontalScrollOptions {
    cardSelector?: string;
    cardsPerScroll?: number;
    gap?: number;
}

export function useHorizontalScroll({
    cardSelector = "[data-playlist-card]",
    cardsPerScroll = 4,
    gap = 32,
}: UseHorizontalScrollOptions = {}) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const updateScrollState = useCallback(() => {
        if (!scrollRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }, []);

    const scrollByCards = useCallback(
        (direction: Direction) => {
            if (!scrollRef.current) return;

            const container = scrollRef.current;
            const card = container.querySelector(cardSelector) as HTMLElement;

            if (!card) return;

            const cardWidth = card.offsetWidth;
            const scrollAmount = (cardWidth + gap) * cardsPerScroll;

            container.scrollBy({
                left: direction === "right" ? scrollAmount : -scrollAmount,
                behavior: "smooth",
            });

            // sync state sau animation
            setTimeout(updateScrollState, 250);
        },
        [cardSelector, cardsPerScroll, gap, updateScrollState],
    );

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const raf = requestAnimationFrame(() => {
            updateScrollState();
        });

        el.addEventListener("scroll", updateScrollState);
        window.addEventListener("resize", updateScrollState);

        return () => {
            cancelAnimationFrame(raf);
            el.removeEventListener("scroll", updateScrollState);
            window.removeEventListener("resize", updateScrollState);
        };
    }, [updateScrollState]);

    return {
        scrollRef,
        canScrollLeft,
        canScrollRight,
        scrollByCards,
    };
}
