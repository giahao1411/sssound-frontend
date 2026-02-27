import { mapToTrack } from "./map-to-track";

export const mapToAlbum = (item: any) => {
    return {
        id: item.id,
        title: item.title,
        description: item.description,
        coverUrl: item.coverUrl,
        duration: item.duration,
        type: item.type,

        artist: {
            id: item.artist.id,
            username: item.artist.username,
            avatarUrl: item.artist.avatarUrl,
            email: "",
            role: item.artist.role,
            verified: false,
            createdAt: "",
            updatedAt: "",
        },

        tracks: item.tracks
            ? item.tracks.map((track: any) => mapToTrack(track))
            : [],

        releaseDate: item.releaseDate,
        createdAt: item.createdAt,
    };
};
