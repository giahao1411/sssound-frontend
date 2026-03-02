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
    {
        id: "rp4",
        title: "After Hours",
        type: "Album",
        artist: mockArtists[2],
        coverUrl: "https://picsum.photos/300?random=54",
        trackIds: ["t7", "t8", "t9"],
        lastPlayedAt: Date.now() - 1000 * 60 * 60 * 24, // 1 ngày trước
    },
    {
        id: "rp5",
        title: "Levitating",
        type: "Track",
        artist: mockArtists[3],
        audioUrl: "/audio/levitating.mp3",
        coverUrl: "https://picsum.photos/300?random=55",
        lastPlayedAt: Date.now() - 1000 * 60 * 60 * 48, // 2 ngày trước
    },
    {
        id: "rp6",
        title: "Future Nostalgia",
        type: "Album",
        artist: mockArtists[3],
        coverUrl: "https://picsum.photos/300?random=56",
        trackIds: ["t10", "t11", "t12"],
        lastPlayedAt: Date.now() - 1000 * 60 * 60 * 72, // 3 ngày trước
    },
    {
        id: "rp7",
        title: "Watermelon Sugar",
        type: "Track",
        artist: mockArtists[1],
        audioUrl: "/audio/watermelon-sugar.mp3",
        coverUrl: "https://picsum.photos/300?random=57",
        lastPlayedAt: Date.now() - 1000 * 60 * 60 * 96, // 4 ngày trước
    },
    {
        id: "rp8",
        title: "Red",
        type: "Album",
        artist: mockArtists[1],
        coverUrl: "https://picsum.photos/300?random=58",
        trackIds: ["t13", "t14", "t15"],
        lastPlayedAt: Date.now() - 1000 * 60 * 60 * 120, // 5 ngày trước
    },
    {
        id: "rp9",
        title: "Save Your Tears",
        type: "Track",
        artist: mockArtists[2],
        audioUrl: "/audio/save-your-tears.mp3",
        coverUrl: "https://picsum.photos/300?random=59",
        lastPlayedAt: Date.now() - 1000 * 60 * 60 * 144, // 6 ngày trước
    },
];
