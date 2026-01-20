import type { JSX } from "react";

export type AppRoute = {
    path: string;
    title?: string;
    element: JSX.Element;
    layout?: "auth" | "app";
};
