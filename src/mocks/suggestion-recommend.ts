import type { Suggestion } from "@/types";
import { mockArtists } from "./artist";

export const mockSuggestions: Suggestion[] = [
    {
        id: "s1",
        title: "Divide",
        type: "Album",
        artist: mockArtists[0],
        description: "Best hits album by Ed Sheeran",
        coverUrl: "https://picsum.photos/300?random=31",
        trackIds: ["t1", "t2", "t3"],
    },
    {
        id: "s2",
        title: "1989",
        type: "Album",
        artist: mockArtists[1],
        description: "Pop album by Taylor Swift",
        coverUrl: "https://picsum.photos/300?random=32",
        trackIds: ["t4", "t5", "t6"],
    },
    {
        id: "s3",
        title: "After Hours",
        type: "Album",
        artist: mockArtists[2],
        description: "Dark synth-pop vibes",
        coverUrl: "https://picsum.photos/300?random=33",
        trackIds: ["t7", "t8"],
    },
];

/* ------------------ Recommend Tracks ------------------ */
export const mockRecommendTracks: Suggestion[] = [
    {
        id: "r1",
        title: "Shape of You",
        type: "Track",
        artist: mockArtists[0],
        audioUrl: "/audio/shape-of-you.mp3",
        coverUrl: "https://picsum.photos/300?random=41",
        featuring: ["Stormzy"],
    },
    {
        id: "r2",
        title: "Blank Space",
        type: "Track",
        artist: mockArtists[1],
        audioUrl: "/audio/blank-space.mp3",
        coverUrl: "https://picsum.photos/300?random=42",
    },
    {
        id: "r3",
        title: "Blinding Lights",
        type: "Track",
        artist: mockArtists[2],
        audioUrl: "/audio/blinding-lights.mp3",
        coverUrl: "https://picsum.photos/300?random=43",
    },
    {
        id: "r4",
        title: "Bad Guy",
        type: "Track",
        artist: mockArtists[3],
        audioUrl: "/audio/bad-guy.mp3",
        coverUrl: "https://picsum.photos/300?random=44",
    },
];
