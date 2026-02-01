import type { JSX } from "react";

export type AppRoute = {
    path: string;
    element: JSX.Element;
    layout?: "auth" | "app";
};

export type ToastType = "success" | "error" | "info";

export type Sections =
    | "Default"
    | "Playlists"
    | "Albums"
    | "EPs"
    | "Artists"
    | "Genres";

export type RecentsOption =
    | "Recently Played"
    | "Recently Added"
    | "Alphabetical"
    | "Creator";

export type SortOrder = "asc" | "desc";

export type Direction = "left" | "right";

export type Position =
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end"
    | "right"
    | "right-start"
    | "right-end";

export type PostType = "track" | "album" | "playlist" | "repost";
export type MediaType = "playlist" | "artist" | "album";
export type TrackType = "single" | "album" | "ep";
