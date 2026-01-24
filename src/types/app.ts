import type { JSX } from "react";

export type AppRoute = {
    path: string;
    title?: string;
    element: JSX.Element;
    layout?: "auth" | "app";
};

export type Sections = "Playlists" | "Albums" | "Artists" | "Genres";

export type RecentsOption =
    | "Recently Played"
    | "Recently Added"
    | "Alphabetical"
    | "Creator";

export type SortOrder = "asc" | "desc";
