import type { User } from "./user";
import type { Album } from "./album";
import type { Track } from "./track";
import type { Engagement } from "../core/engagement";

export type FeedItem =
    | ({
          id: string;
          type: "TRACK";
          track: Track;
          artist: User;
      } & Engagement)
    | ({
          id: string;
          type: "ALBUM" | "EP";
          album: Album;
          artist: User;
      } & Engagement)
    | ({
          id: string;
          type: "REPOST_TRACK";
          track: Track;
          repostedBy: User;
      } & Engagement)
    | ({
          id: string;
          type: "REPOST_ALBUM" | "REPOST_EP";
          album: Album;
          repostedBy: User;
      } & Engagement);
