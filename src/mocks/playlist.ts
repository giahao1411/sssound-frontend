import type { Suggestion } from "@/types/playlist";
import type { Track } from "@/types/track";

// artist, album, playlist included
export const suggestionMocks: Suggestion[] = [
    {
        id: "suggestion1",
        title: "Lo-Fi Beats",
        type: "playlist",
        featuring: ["Various Artists", "Chillhop Music", "Lofi"],
        description: "Chill lo-fi beats to study and relax",
        coverImageUrl: "./avatar.jpg",
        tracks: ["track1", "track2", "track3"],
    },
    {
        id: "suggestion2",
        title: "Indie Rock Classics",
        type: "playlist",
        featuring: ["Various Artists", "Chillhop Music", "Lofi"],
        description: "The best indie rock tracks from the 2000s",
        coverImageUrl: "./avatar.jpg",
        tracks: ["track4", "track5", "track6"],
    },
    {
        id: "suggestion3",
        title: "Nguyễn Hùng",
        type: "artist",
        featuring: [],
        description: "The most popular tracks of 2023",
        coverImageUrl: "./avatar.jpg",
        tracks: ["track7", "track8", "track9"],
    },
    {
        id: "suggestion4",
        title: "Vất Vả",
        type: "artist",
        featuring: [],
        description: "Relaxing acoustic tracks",
        coverImageUrl: "./avatar.jpg",
        tracks: ["track10", "track11", "track12"],
    },
    {
        id: "suggestion5",
        title: "Dreamy Synthpop",
        type: "album",
        featuring: ["Synthwave Artist"],
        description: "A collection of dreamy synthpop tracks",
        coverImageUrl: "./avatar.jpg",
        tracks: ["track13", "track14", "track15"],
    },
    {
        id: "suggestion6",
        title: "Acoustic Mornings",
        type: "album",
        featuring: ["Acoustic Artist"],
        description: "Soothing acoustic tracks to start your day",
        coverImageUrl: "./avatar.jpg",
        tracks: ["track16", "track17", "track18"],
    },
];

// recently played
export const recentlyPlayedMocks: Suggestion[] = [
    {
        id: "playlist1",
        title: "Chill Vibes",
        type: "playlist",
        description: "Relaxing tunes to unwind",
        coverImageUrl: "./avatar.jpg",
        tracks: ["track1", "track2", "track3"],
        lastPlayedTimestamp: new Date().getTime() - 3600 * 1000, // 1 hour ago
    },
    {
        id: "playlist2",
        title: "Workout Hits",
        type: "playlist",
        description: "Get pumped with these energetic tracks",
        coverImageUrl: "./avatar.jpg",
        tracks: ["track4", "track5", "track6"],
        lastPlayedTimestamp: new Date().getTime() - 7200 * 1000, // 2 hours ago
    },
    {
        id: "playlist3",
        title: "Top 50 Global",
        type: "playlist",
        description: "The most popular tracks worldwide",
        coverImageUrl: "./avatar.jpg",
        tracks: ["track7", "track8", "track9"],
        lastPlayedTimestamp: new Date().getTime() - 1800 * 1000, // 30 minutes ago
    },
    {
        id: "playlist4",
        title: "Indie Essentials",
        type: "playlist",
        description: "Must-listen indie tracks",
        coverImageUrl: "./avatar.jpg",
        tracks: ["track10", "track11", "track12"],
        lastPlayedTimestamp: new Date().getTime() - 10800 * 1000, // 3 hours ago
    },
    {
        id: "playlist5",
        title: "Jazz Classics",
        type: "playlist",
        description: "Timeless jazz tunes",
        coverImageUrl: "./avatar.jpg",
        tracks: ["track13", "track14", "track15"],
        lastPlayedTimestamp: new Date().getTime() - 5400 * 1000, // 1.5 hours ago
    },
    {
        id: "playlist6",
        title: "Pop Party",
        type: "playlist",
        description: "Upbeat pop tracks to get the party started",
        coverImageUrl: "./avatar.jpg",
        tracks: ["track16", "track17", "track18"],
        lastPlayedTimestamp: new Date().getTime() - 3000 * 1000, // 50 minutes ago
    },
    {
        id: "playlist7",
        title: "Classical Focus",
        type: "playlist",
        description: "Classical music to help you concentrate",
        coverImageUrl: "./avatar.jpg",
        tracks: ["track19", "track20", "track21"],
        lastPlayedTimestamp: new Date().getTime() - 4000 * 1000, // ~1.1 hours ago
    },
    {
        id: "playlist8",
        title: "Rock Anthems",
        type: "playlist",
        description: "Legendary rock tracks",
        coverImageUrl: "./avatar.jpg",
        tracks: ["track22", "track23", "track24"],
        lastPlayedTimestamp: new Date().getTime() - 2500 * 1000, // ~42 minutes ago
    },
];

export const recommendMocks: Track[] = [
    {
        id: "track1",
        title: "3 (Tuyển Tập Nhạc Ngọt Mới Trẻ Sôi Động 2019)",
        artist: "Ngọt",
        type: "album",
        album: "Evening Vibes",
        duration: 210,
        coverImageUrl: "./avatar.jpg",
        audioUrl: "./audio1.mp3",
    },
    {
        id: "track2",
        title: "Midnight Drive",
        artist: "Synthwave Artist",
        type: "single",
        album: "Neon Nights",
        duration: 185,
        coverImageUrl: "./avatar.jpg",
        audioUrl: "./audio2.mp3",
    },
    {
        id: "track3",
        title: "Acoustic Sunrise",
        artist: "Acoustic Artist",
        type: "ep",
        album: "Morning Melodies",
        duration: 240,
        coverImageUrl: "./avatar.jpg",
        audioUrl: "./audio3.mp3",
    },
    {
        id: "track4",
        title: "City Lights",
        artist: "The Urbanites",
        type: "album",
        album: "Nightlife",
        duration: 200,
        coverImageUrl: "./avatar.jpg",
        audioUrl: "./audio4.mp3",
    },
];
