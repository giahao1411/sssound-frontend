import { cn } from "@/lib/cn";

interface BadgeProps {
    title: string;
    className?: string;
}

export default function Badge({ title, className }: BadgeProps) {
    return (
        <div
            className={cn(
                "px-1 py-0 rounded-xl text-sm transition cursor-pointer focus:outline-none",
                "bg-surface-muted text-foreground hover:bg-surface-muted-hover",
                className,
            )}
        >
            {title}
        </div>
    );
}
