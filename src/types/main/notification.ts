import type { MediaInfo } from "../core/media";
import type { Album } from "./album";
import type { Track } from "./track";
import type { User } from "./user";

export type Notification =
    // ===== LIKE =====
    | {
          id: string;
          type: "LIKE_TRACK";
          sender: User;
          receiver: User;
          track: Pick<Track, MediaInfo>;
          isRead: boolean;
          timestamp: number;
      }
    | {
          id: string;
          type: "LIKE_ALBUM" | "LIKE_EP";
          sender: User;
          receiver: User;
          album: Pick<Album, MediaInfo>;
          isRead: boolean;
          timestamp: number;
      };
