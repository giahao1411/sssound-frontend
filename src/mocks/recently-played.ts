import type { RecentlyPlayed } from "@/types";
import { mockArtists } from "./artist";

export const mockRecentlyPlayed: RecentlyPlayed[] = [
    {
        id: "rp1",
        title: "Shape of You",
        type: "Track",
        artist: mockArtists[0],
        audioUrl: "/audio/shape-of-you.mp3",
        coverUrl: "https://picsum.photos/300?random=51",
        lastPlayedAt: Date.now() - 1000 * 60 * 10, // 10 phút trước
    },
    {
        id: "rp2",
        title: "1989",
        type: "Album",
        artist: mockArtists[1],
        coverUrl: "https://picsum.photos/300?random=52",
        trackIds: ["t4", "t5", "t6"],
        lastPlayedAt: Date.now() - 1000 * 60 * 60, // 1 giờ trước
    },
    {
        id: "rp3",
        title: "Blinding Lights",
        type: "Track",
        artist: mockArtists[2],
        audioUrl: "/audio/blinding-lights.mp3",
        coverUrl: "https://picsum.photos/300?random=53",
        lastPlayedAt: Date.now() - 1000 * 60 * 60 * 5, // 5 giờ trước
    },
];
