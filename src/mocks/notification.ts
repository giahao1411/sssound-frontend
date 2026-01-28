export const followerMocks = [
    {
        id: 1,
        avatar: "./avatar.jpg",
        username: "Ngọt",
        timestamp: Date.now() - 2 * 60 * 60 * 1000, // 2 hours ago
        followed: true,
    },
    {
        id: 2,
        avatar: "./avatar.jpg",
        username: "MAYDAYs",
        timestamp: new Date("2024-09-09").getTime(),
        followed: true,
    },
    {
        id: 3,
        avatar: "./avatar.jpg",
        username: "Cá Hồi Hoang",
        timestamp: Date.now() - 24 * 60 * 60 * 1000, // yesterday
        followed: false,
    },
    {
        id: 4,
        avatar: "./avatar.jpg",
        username: "Keshi",
        timestamp: Date.now(), // just now
        followed: false,
    },
    {
        id: 5,
        avatar: "./avatar.jpg",
        username: "Post Malone",
        timestamp: Date.now() - 30 * 1000, // just now (30s ago)
        followed: true,
    },
];
