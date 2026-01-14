import LoginPage from "@/pages/login";
import TestPage from "@/pages/test";
import type { AppRoute } from "@/types/app";

export const appRoutes: AppRoute[] = [
    { path: "/login", title: "Login", element: <LoginPage /> },
    { path: "/test", title: "Test", element: <TestPage /> },
];
