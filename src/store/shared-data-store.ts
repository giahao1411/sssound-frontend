import type { Suggestion, Track } from "@/types";
import { create } from "zustand";

type SharedDataStore = {
    // Define your shared data properties and methods here
    suggestions: Suggestion[];
    recentlyPlayed: Suggestion[];
    recommendTracks: Track[];
    notifications: Notification[];
    posts: Notification[];
    // Add methods to update the shared data if needed
    setSuggestions: (suggestions: Suggestion[]) => void;
    setRecentlyPlayed: (recentlyPlayed: Suggestion[]) => void;
    setRecommendTracks: (recommendTracks: Track[]) => void;
    setNotifications: (notifications: Notification[]) => void;
    setPosts: (posts: Notification[]) => void;
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
