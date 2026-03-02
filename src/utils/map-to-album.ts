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
            email: item.artist.email,
            role: item.artist.role,
            verified: item.artist.verified,
            createdAt: item.artist.createdAt,
            updatedAt: item.artist.updatedAt,
        },

        tracks: item.tracks
            ? item.tracks.map((track: any) => mapToTrack(track))
            : [],

        releaseDate: item.releaseDate,
        createdAt: item.createdAt,

        liked: item.liked,
        reposted: item.reposted,
        likesCount: item.likesCount,
        repostsCount: item.repostsCount,
    };
};
