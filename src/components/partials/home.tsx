/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import PlaylistCardRec from "./ui/cards/playlist-card-rec";
import CardSqr from "./ui/cards/card-sqr";
import {
    recentlyPlayedMocks,
    recommendMocks,
    suggestionMocks,
} from "@/mocks/playlist";
import type { Suggestion } from "@/types/playlist";
import ScrollingRow from "./ui/scrolling-row";
import NewTrackCard from "./ui/cards/new-track-card";
import CardWithCover from "./ui/cards/card-with-cover";
import type { Track } from "@/types/track";

const headerClassName = "text-xl font-bold";

export default function Home() {
    const [playing, setPlaying] = useState<string | null>(null);
    const [playingTrack, setPlayingTrack] = useState<string | null>(null);

    const [suggestions, setSuggestions] =
        useState<Suggestion[]>(suggestionMocks);
    const [recentlyPlayed, setRecentlyPlayed] =
        useState<Suggestion[]>(recentlyPlayedMocks);
    const [recommendTracks, setRecommendTracks] =
        useState<Track[]>(recommendMocks);

    const filteredRecentPlayed = recentlyPlayed
        .sort((a, b) => b.lastPlayedTimestamp! - a.lastPlayedTimestamp!)
        .slice(0, 8);

    return (
        <div className="flex flex-col gap-10 pb-6">
            <div className="flex flex-col gap-3">
                <span className={headerClassName}>Recently Played</span>

                <div className="grid grid-cols-2 2xl:grid-cols-4 gap-2">
                    {filteredRecentPlayed.map((playlist) => (
                        <PlaylistCardRec
                            key={playlist.id}
                            playlist={playlist}
                            playingTrack={playingTrack}
                            setPlayingTrack={setPlayingTrack}
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <span className={headerClassName}>More of what you like</span>

                <ScrollingRow>
                    {suggestions.map((item) => (
                        <CardSqr
                            key={item.id}
                            item={item}
                            playing={playing}
                            setPlaying={setPlaying}
                        />
                    ))}
                </ScrollingRow>
            </div>

            {/* banner */}
            <div className="flex flex-col gap-3">
                <span className={headerClassName}>Notification</span>

                <NewTrackCard />
            </div>

            <div className="flex flex-col gap-3">
                <span className={headerClassName}>Jump back in</span>

                <ScrollingRow>
                    {suggestions.map((item) => (
                        <CardSqr
                            key={item.id}
                            item={item}
                            playing={playing}
                            setPlaying={setPlaying}
                        />
                    ))}
                </ScrollingRow>
            </div>

            <div className="flex flex-col gap-3">
                <span className={headerClassName}>
                    Popular albums and singles
                </span>

                <ScrollingRow>
                    {suggestions.map((item) => (
                        <CardSqr
                            key={item.id}
                            item={item}
                            playing={playing}
                            setPlaying={setPlaying}
                        />
                    ))}
                </ScrollingRow>
            </div>

            <div className="grid grid-cols-1 px-20 xl:px-36 2xl:px-12 2xl:grid-cols-2 gap-6 2xl:gap-x-12 2xl:gap-y-8">
                {recommendTracks.map((item) => (
                    <CardWithCover
                        key={item.id}
                        item={item}
                        playing={playing}
                        setPlaying={setPlaying}
                    />
                ))}
            </div>
        </div>
    );
}
