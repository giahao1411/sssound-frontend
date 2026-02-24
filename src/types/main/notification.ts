import type { MediaInfo } from "../core/media";
import type { Album } from "./album";
import type { Track } from "./track";
import type { User } from "./user";

export type Notification =
    | {
          id: string;
          type: "FOLLOW";
          sender: User;
          receiver: User;
          isRead: boolean;
          createdAt: string;
      }
    // ===== NEW RELEASE =====
    | {
          id: string;
          type: "NEW_TRACK";
          sender: User;
          receiver: User;
          track: Pick<Track, MediaInfo>;
          isRead: boolean;
          createdAt: string;
      }
    | {
          id: string;
          type: "NEW_ALBUM" | "NEW_EP";
          sender: User;
          receiver: User;
          album: Pick<Album, MediaInfo>;
          isRead: boolean;
          createdAt: string;
      }
    // ===== LIKE =====
    | {
          id: string;
          type: "LIKE_TRACK";
          sender: User;
          receiver: User;
          track: Pick<Track, MediaInfo>;
          isRead: boolean;
          createdAt: string;
      }
    | {
          id: string;
          type: "LIKE_ALBUM" | "LIKE_EP";
          sender: User;
          receiver: User;
          album: Pick<Album, MediaInfo>;
          isRead: boolean;
          createdAt: string;
      }
    // ===== REPOST =====
    | {
          id: string;
          type: "REPOST_TRACK";
          sender: User;
          receiver: User;
          track: Pick<Track, MediaInfo>;
          isRead: boolean;
          createdAt: string;
      }
    | {
          id: string;
          type: "REPOST_ALBUM" | "REPOST_EP";
          sender: User;
          receiver: User;
          album: Pick<Album, MediaInfo>;
          isRead: boolean;
          createdAt: string;
      };
