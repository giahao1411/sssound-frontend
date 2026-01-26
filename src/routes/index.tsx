import BrowsePage from "@/pages/browse";
import LoginPage from "@/pages/login";
import NotificationPage from "@/pages/notification";
import TestPage from "@/pages/test";
import type { AppRoute } from "@/types/app";

export const appRoutes: AppRoute[] = [
    { path: "/login", element: <LoginPage />, layout: "auth" },
    { path: "/test", element: <TestPage />, layout: "app" },
    { path: "/browse", element: <BrowsePage />, layout: "app" },
    { path: "/notifications", element: <NotificationPage />, layout: "app" },
];
