import type { User } from "./user";
import type { Album } from "./album";
import type { Track } from "./track";
import type { Engagement } from "../core/engagement";

export type FeedItem =
    | ({
          type: "TRACK";
          track: Track;
          artist: User;
      } & Engagement)
    | ({
          type: "ALBUM" | "EP";
          album: Album;
          artist: User;
      } & Engagement)
    | ({
          type: "REPOST_TRACK";
          track: Track;
          repostedBy: User;
      } & Engagement)
    | ({
          type: "REPOST_ALBUM" | "REPOST_EP";
          album: Album;
          repostedBy: User;
      } & Engagement);
