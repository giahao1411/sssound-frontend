import type { PostType } from "./app";

export type FollowNotification = {
    id: string;
    avatar: string;
    username: string;
    timestamp: number;
    followed: boolean;
};

export type TrackPost = {
    id: string;
    title: string;
    artist: string;
    artistArt: string; // use artist avatar as artistArt
    trackCover: string; // use album cover as albumArt
    duration: number;
    tags: string[];
    type: PostType;
    likes: number; // number of likes
    reposts: number; // number of reposts
    liked: boolean; // whether the user has liked the track
    reposted: boolean; // whether the user has reposted the track
    createdAt: number;
};
