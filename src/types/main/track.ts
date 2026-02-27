import type { Engagement } from "../core/engagement";
import type { MediaInfo, MediaType } from "../core/media";
import type { Album } from "./album";
import type { User } from "./user";

export interface Track extends Engagement {
    id: string;
    title: string;
    audioUrl: string;
    coverUrl?: string;
    type: MediaType;
    duration: number;
    genre?: string;
    tags?: string[];
    releaseDate: string;
    isExplicit: boolean;

    artist: User;
    album?: Pick<Album, MediaInfo>;

    createdAt: string;
}
