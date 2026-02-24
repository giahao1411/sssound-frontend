export type MediaInfo = "id" | "title" | "coverUrl";
export type UserInfo = "id" | "username" | "avatarUrl";

export type AlbumType = "ALBUM" | "EP";
export type MediaType = "TRACK" | "ALBUM" | "EP";
export type SuggestionType = MediaType | "ARTIST";
export type UserType = "USER" | "ARTIST";

export type FeedItemType =
    | "TRACK"
    | "ALBUM"
    | "EP"
    | "REPOST_TRACK"
    | "REPOST_ALBUM"
    | "REPOST_EP";
