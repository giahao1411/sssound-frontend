import type { LibraryItem } from "@/types/library-item";

export const libItemMocks: LibraryItem[] = [
    { 
        id: "0",
        coverImg: "./like.jpg",
        title: "Liked",
        type: "Playlist",
        artist: "GiaHaoooo",
        isPinned: false,
    },
    {
        id: "1",
        coverImg: "./avatar.jpg",
        title: "Ng'bthg",
        type: "Album",
        artist: "Ngọt",
        isPinned: true,
    },
    {
        id: "2",
        coverImg: "./avatar.jpg",
        title: "Chillhop Essentials - Spring 2023",
        type: "Playlist",
        artist: "Various Artists",
        isPinned: false,
    },
    {
        id: "3",
        coverImg: "./avatar.jpg",
        title: "Keshi",
        type: "Artist",
        artist: "",
        isPinned: false,
    },
    {
        id: "4",
        coverImg: "./avatar.jpg",
        title: "Suýt 1",
        type: "EP",
        artist: "Ngọt",
        isPinned: true,
    },
];
