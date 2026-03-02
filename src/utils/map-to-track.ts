import type { MediaType, Track, UserType } from "@/types";

export const mapToTrack = (item: any): Track => {
    return {
        id: item.id,
        title: item.title,
        audioUrl: item.audioUrl,
        coverUrl: item.coverUrl,
        type: item.type as MediaType,
        duration: item.duration,
        genre: item.genre,
        tags: item.tags,
        releaseDate: item.releaseDate,
        isExplicit: item.isExplicit,

        artist: {
            id: item.artist.id,
            username: item.artist.username,
            avatarUrl: item.artist.avatarUrl,
            email: item.artist.email,
            role: item.artist.role as UserType,
            verified: item.artist.verified,
            createdAt: item.artist.createdAt,
            updatedAt: item.artist.updatedAt,
        },

        album: item.album
            ? {
                  id: item.album.id,
                  title: item.album.title,
                  coverUrl: item.album.coverUrl,
              }
            : undefined,

        createdAt: item.createdAt,

        liked: item.liked,
        reposted: item.reposted,
        likesCount: item.likesCount,
        repostsCount: item.repostsCount,
    };
};
