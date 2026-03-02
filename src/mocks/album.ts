import type { Album } from "@/types";
import { mockTracks } from "./track";
import { mockArtists } from "./artist";

export const mockAlbums: Album[] = [
    {
        id: "a1",
        title: "After Hours",
        tracks: [mockTracks[0]],
        duration: 0,
        type: "EP",
        artist: mockArtists[0],
        releaseDate: "",
        createdAt: "",
        liked: false,
        reposted: false,
        likesCount: 0,
        repostsCount: 0,
    },
    {
        id: "a2",
        title: "1989",
        tracks: [mockTracks[1]],
        duration: 0,
        type: "EP",
        artist: mockArtists[1],
        releaseDate: "",
        createdAt: "",
        liked: false,
        reposted: false,
        likesCount: 0,
        repostsCount: 0,
    },
    {
        id: "ep1",
        title: "Don't Smile at Me",
        tracks: [mockTracks[2]],
        duration: 0,
        type: "EP",
        artist: mockArtists[2],
        releaseDate: "",
        createdAt: "",
        liked: false,
        reposted: false,
        likesCount: 0,
        repostsCount: 0,
    },
];
