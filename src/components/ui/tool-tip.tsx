import type { Position } from "@/types/app";
import { Tooltip } from "react-tooltip";

interface TooltipProps {
    anchorId: string;
    content: string;
    position: Position;
}

export default function ToolTip({ anchorId, content, position }: TooltipProps) {
    return (
        <Tooltip
            anchorSelect={`#${anchorId}`}
            content={content}
            place={position}
            className="bg-surface text-foreground border-border"
        />
    );
}
