export type ItemType = "Album" | "Playlist" | "EP" | "Podcast" | "Artist";

export type LibraryItem = {
    id: string;
    coverImg: string;
    title: string;
    type: ItemType;
    artist: string;
    isPinned: boolean;
};
