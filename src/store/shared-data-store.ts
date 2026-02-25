import type {
    FeedItem,
    RecentlyPlayed,
    Suggestion,
    Notification,
} from "@/types";
import { create } from "zustand";

type SharedDataStore = {
    // Define your shared data properties and methods here
    suggestions: Suggestion[];
    recentlyPlayed: RecentlyPlayed[];
    recommendTracks: Suggestion[];
    notifications: Notification[];
    posts: FeedItem[];
    // Add methods to update the shared data if needed
    setSuggestions: (suggestions: Suggestion[]) => void;
    setRecentlyPlayed: (recentlyPlayed: RecentlyPlayed[]) => void;
    setRecommendTracks: (recommendTracks: Suggestion[]) => void;
    setNotifications: (notifications: Notification[]) => void;
    setPosts: (posts: FeedItem[]) => void;
};

export const useSharedDataStore = create<SharedDataStore>((set) => ({
    suggestions: [],
    recentlyPlayed: [],
    recommendTracks: [],
    notifications: [],
    posts: [],
    setSuggestions: (suggestions) => set({ suggestions }),
    setRecentlyPlayed: (recentlyPlayed) => set({ recentlyPlayed }),
    setRecommendTracks: (recommendTracks) => set({ recommendTracks }),
    setNotifications: (notifications) => set({ notifications }),
    setPosts: (posts) => set({ posts }),
}));
