import type { MediaType } from "./media";

export interface ToggleLikePayload {
    targetType: MediaType;
    targetId: string;
}

export interface ToggleRepostPayload {
    targetType: MediaType;
    targetId: string;
    caption?: string;
}
