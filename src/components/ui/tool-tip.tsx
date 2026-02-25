import type { Position } from "@/types";
import { Tooltip } from "react-tooltip";

interface ToolTipProps {
    anchorId: string;
    content: string;
    position: Position;
}

export default function ToolTip({ anchorId, content, position }: ToolTipProps) {
    return (
        <Tooltip
            anchorSelect={`#${anchorId}`}
            content={content}
            place={position}
            positionStrategy="fixed"
            delayShow={200}
            className="
                bg-surface
                text-xs
                text-foreground
                px-2 py-1
                leading-none
                shadow-sm
            "
        />
    );
}
