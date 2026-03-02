import type { FeedItem } from "@/types";
import { mockAlbums } from "./album";
import { mockArtists } from "./artist";
import { mockTracks } from "./track";

export const mockFeedItems: FeedItem[] = [
    // ===== TRACK =====
    {
        id: "f1",
        type: "TRACK",
        track: mockTracks[0],
        coverUrl: "https://picsum.photos/400?random=301",
        user: mockArtists[0],
        timestamp: new Date().toISOString(),
        liked: true,
        reposted: false,
        likesCount: 1240,
        repostsCount: 210,
    },

    // ===== ALBUM =====
    {
        id: "f2",
        type: "ALBUM",
        album: mockAlbums[0],
        coverUrl: "https://picsum.photos/400?random=302",
        user: mockArtists[1],
        timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
        liked: false,
        reposted: false,
        likesCount: 980,
        repostsCount: 120,
    },

    // ===== EP =====
    {
        id: "f3",
        type: "EP",
        album: mockAlbums[2],
        coverUrl: "https://picsum.photos/400?random=303",
        user: mockArtists[3],
        timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
        liked: false,
        reposted: true,
        likesCount: 560,
        repostsCount: 340,
    },

    // ===== REPOST TRACK =====
    {
        id: "f4",
        type: "REPOST_TRACK",
        track: mockTracks[1],
        coverUrl: "https://picsum.photos/400?random=304",
        user: mockArtists[2],
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
        liked: true,
        reposted: true,
        likesCount: 2100,
        repostsCount: 870,
    },

    // ===== REPOST ALBUM =====
    {
        id: "f5",
        type: "REPOST_ALBUM",
        album: mockAlbums[1],
        coverUrl: "https://picsum.photos/400?random=305",
        user: mockArtists[4],
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
        liked: false,
        reposted: true,
        likesCount: 1320,
        repostsCount: 640,
    },

    // ===== REPOST EP =====
    {
        id: "f6",
        type: "REPOST_EP",
        album: mockAlbums[2],
        coverUrl: "https://picsum.photos/400?random=306",
        user: mockArtists[0],
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
        liked: false,
        reposted: false,
        likesCount: 430,
        repostsCount: 90,
    },
];
