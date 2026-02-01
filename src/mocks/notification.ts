import type { FollowNotification, TrackPost } from "@/types/notification";

export const followerMocks: FollowNotification[] = [
    {
        id: "1",
        avatar: "./avatar.jpg",
        username: "Ngọt",
        timestamp: Date.now() - 2 * 60 * 60 * 1000, // 2 hours ago
        followed: true,
    },
    {
        id: "2",
        avatar: "./avatar.jpg",
        username: "MAYDAYs",
        timestamp: new Date("2024-09-09").getTime(),
        followed: true,
    },
    {
        id: "3",
        avatar: "./avatar.jpg",
        username: "Cá Hồi Hoang",
        timestamp: Date.now() - 24 * 60 * 60 * 1000, // yesterday
        followed: false,
    },
    {
        id: "4",
        avatar: "./avatar.jpg",
        username: "Keshi",
        timestamp: Date.now(), // just now
        followed: false,
    },
    {
        id: "5",
        avatar: "./avatar.jpg",
        username: "Post Malone",
        timestamp: Date.now() - 30 * 1000, // just now (30s ago)
        followed: true,
    },
];

export const postMocks: TrackPost[] = [
    {
        id: "1",
        title: "Yellow Hearts",
        artist: "Antony Russo",
        artistArt: "./avatar.jpg",
        trackCover: "./avatar.jpg",
        duration: 210,
        tags: ["Pop", "Indie"],
        type: "track",
        likes: 1200,
        reposts: 300,
        liked: false,
        reposted: false,
        createdAt: new Date("2024-09-10T10:00:00Z").getTime(),
    },
    {
        id: "2",
        title: "Sunflower",
        artist: "Post Malone",
        artistArt: "./avatar.jpg",
        trackCover: "./avatar.jpg",
        duration: 158,
        tags: ["Hip-Hop", "Rap"],
        type: "track",
        likes: 2500,
        reposts: 450,
        liked: true,
        reposted: false,
        createdAt: new Date("2024-09-09T10:00:00Z").getTime(),
    },
    {
        id: "3",
        title: "Blinding Lights",
        artist: "The Weeknd",
        artistArt: "./avatar.jpg",
        trackCover: "./avatar.jpg",
        duration: 200,
        tags: ["Pop", "Disco"],
        type: "track",
        likes: 3000,
        reposts: 600,
        liked: false,
        reposted: true,
        createdAt: new Date("2024-09-08T10:00:00Z").getTime(),
    },
    {
        id: "4",
        title: "Levitating",
        artist: "Dua Lipa",
        artistArt: "./avatar.jpg",
        trackCover: "./avatar.jpg",
        duration: 203,
        tags: ["Pop", "Disco"],
        type: "track",
        likes: 1800,
        reposts: 350,
        liked: true,
        reposted: true,
        createdAt: new Date("2024-09-07T10:00:00Z").getTime(),
    },
];
