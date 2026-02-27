import BrowsePage from "@/pages/browse";
import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import NotificationPage from "@/pages/notification";
import TestPage from "@/pages/test";
import type { AppRoute } from "@/types";

export const appRoutes: AppRoute[] = [
    { path: "/login", element: <LoginPage />, layout: "auth" },
    { path: "/", element: <HomePage />, layout: "app" },
    { path: "/test", element: <TestPage />, layout: "app" },
    { path: "/browse", element: <BrowsePage />, layout: "app" },
    { path: "/notifications", element: <NotificationPage />, layout: "app" },
];
