import type { Engagement } from "../core/engagement";
import type { AlbumType } from "../core/media";
import type { Track } from "./track";
import type { User } from "./user";

export interface Album extends Engagement {
    id: string;
    title: string;
    description?: string;
    coverUrl?: string;
    type: AlbumType;

    artist: User;
    tracks?: Track[];

    releaseDate: string;
    createdAt: string;
}
