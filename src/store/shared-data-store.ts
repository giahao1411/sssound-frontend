import type {
    FeedItem,
    RecentlyPlayed,
    Suggestion,
    Notification,
    LibraryItem,
} from "@/types";
import { create } from "zustand";

type SharedDataStore = {
    // Define your shared data properties and methods here
    libraryItems: LibraryItem[];
    suggestions: Suggestion[];
    recommendTracks: Suggestion[];
    recentlyPlayed: RecentlyPlayed[];
    notifications: Notification[];
    posts: FeedItem[];

    // Add methods to update the shared data if needed
    setLibraryItems: (libraryItems: LibraryItem[]) => void;
    setSuggestions: (suggestions: Suggestion[]) => void;
    setRecommendTracks: (recommendTracks: Suggestion[]) => void;
    setRecentlyPlayed: (recentlyPlayed: RecentlyPlayed[]) => void;
    setNotifications: (notifications: Notification[]) => void;
    setPosts: (posts: FeedItem[]) => void;
};

export const useSharedDataStore = create<SharedDataStore>((set) => ({
    libraryItems: [],
    suggestions: [],
    recentlyPlayed: [],
    recommendTracks: [],
    notifications: [],
    posts: [],

    setLibraryItems: (libraryItems) => set({ libraryItems }),
    setSuggestions: (suggestions) => set({ suggestions }),
    setRecommendTracks: (recommendTracks) => set({ recommendTracks }),
    setRecentlyPlayed: (recentlyPlayed) => set({ recentlyPlayed }),
    setNotifications: (notifications) => set({ notifications }),
    setPosts: (posts) => set({ posts }),
}));
