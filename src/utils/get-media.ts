import type { Album, Track } from "@/types";
import { mapToTrack } from "./map-to-track";
import { mapToAlbum } from "./map-to-album";

export function getMedia(item: Track | Album) {
    const media =
        item.type === "Track" ? mapToTrack(item) : mapToAlbum(item).tracks[0];
    const mediaType = item.type === "Track" ? "track" : "album";

    return { media, mediaType };
}
