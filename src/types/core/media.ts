export type MediaInfo = "id" | "title" | "coverUrl";
export type UserInfo = "id" | "username" | "avatarUrl";

export type AlbumType = "Album" | "EP";
export type MediaType = "Track" | "Playlist" | "Artist" | "Genre" | AlbumType;
export type UserType = "User" | "Artist";

export type FeedItemType =
    | "Track"
    | "Album"
    | "EP"
    | "Repost Track"
    | "Repost Album"
    | "Repost EP";
