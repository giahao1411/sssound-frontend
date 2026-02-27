import { cn } from "@/lib/cn";
import { GENRE_COLOR_MAP } from "@/utils/color-mapper";

interface BadgeProps {
    title: string;
    className?: string;
}

export default function Badge({ title, className }: BadgeProps) {
    const key = title.startsWith("#") ? title.slice(1) : title;
    const bg = GENRE_COLOR_MAP[key];

    return (
        <div
            className={cn(
                "px-1.5 py-0 rounded-xl text-sm transition cursor-pointer focus:outline-none",
                "bg-transparent text-white hover:opacity-80",
                bg,
                className,
            )}
        >
            {title}
        </div>
    );
}
