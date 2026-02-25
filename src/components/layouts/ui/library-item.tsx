import { cn } from "@/lib/cn";
import { BsPinAngleFill } from "react-icons/bs";

interface LibraryItemProps {
    item: any; // TODO: type this properly
    collapsed: boolean;
}

export default function LibraryItem({ item, collapsed }: LibraryItemProps) {
    return (
        <div className="flex items-center p-2 gap-3 rounded-lg hover:bg-surface-muted cursor-pointer">
            <div className="w-11 h-11 shrink-0 flex items-center justify-center">
                <img
                    src={item.coverImage}
                    alt={item.title}
                    className={cn(
                        "w-full h-full object-cover",
                        item.type === "Artist" ? "rounded-full" : "rounded-sm",
                    )}
                />
            </div>

            {!collapsed && (
                <div className="flex flex-col min-w-0 gap-1">
                    <div className="truncate text-sm w-full">
                        <span className="">{item.title}</span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-foreground-muted">
                        {item.isPinned && (
                            <BsPinAngleFill
                                size={15}
                                className="text-success shrink-0"
                            />
                        )}

                        <span className="truncate">
                            {item.type}
                            {item.artist && ` • ${item.artist}`}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
