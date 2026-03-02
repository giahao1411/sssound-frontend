import PlaylistCardRec from "../partials/cards/playlist-card-rec";
import CardSqr from "../partials/cards/card-sqr";

import ScrollingRow from "../partials/utility-ui/scrolling-row";
import NewTrackCard from "../partials/cards/new-track-card";
import CardWithCover from "../partials/cards/card-with-cover";
import { useSharedDataStore } from "@/store/shared-data-store";
import { useEffect } from "react";
import {
    mockSuggestions,
    mockRecommendTracks,
    mockRecentlyPlayed,
} from "@/mocks";

const headerClassName = "font-mplus text-xl font-bold";

export default function Home() {
    // used shared data store
    const {
        suggestions,
        recentlyPlayed,
        recommendTracks,
        setSuggestions,
        setRecentlyPlayed,
        setRecommendTracks,
    } = useSharedDataStore();

    const filteredRecentPlayed = recentlyPlayed
        .sort((a, b) => b.lastPlayedAt - a.lastPlayedAt)
        .slice(0, 8);

    useEffect(() => {
        setSuggestions(mockSuggestions);
        setRecommendTracks(mockRecommendTracks);
        setRecentlyPlayed(mockRecentlyPlayed);
    }, [setSuggestions, setRecommendTracks, setRecentlyPlayed]);

    return (
        <div className="flex flex-col gap-10 pb-6">
            <div className="flex flex-col gap-3">
                <span className={headerClassName}>Recently Played</span>

                <div className="grid grid-cols-2 2xl:grid-cols-4 gap-2">
                    {filteredRecentPlayed.map((playlist) => (
                        <PlaylistCardRec
                            key={playlist.id}
                            playlist={playlist}
                        />
                    ))}
                </div>
            </div>

            {/* ---------- SUGGESTION 1 ---------- */}

            <div className="flex flex-col gap-3">
                <span className={headerClassName}>More of what you like</span>

                <ScrollingRow>
                    {suggestions.map((item) => (
                        <CardSqr key={item.id} item={item} />
                    ))}
                </ScrollingRow>
            </div>

            {/* ---------- NEW TRACK / ALBUM NOTIFICATION ---------- */}

            {/* banner */}
            <div className="flex flex-col gap-3">
                <span className={headerClassName}>Notification</span>

                <NewTrackCard />
            </div>

            {/* ---------- SUGGESTION 2 ---------- */}

            <div className="flex flex-col gap-3">
                <span className={headerClassName}>Jump back in</span>

                <ScrollingRow>
                    {suggestions.map((item) => (
                        <CardSqr key={item.id} item={item} />
                    ))}
                </ScrollingRow>
            </div>

            {/* ---------- SUGGESTION 3 ---------- */}

            <div className="flex flex-col gap-3">
                <span className={headerClassName}>
                    Popular albums and singles
                </span>

                <ScrollingRow>
                    {suggestions.map((item) => (
                        <CardSqr key={item.id} item={item} />
                    ))}
                </ScrollingRow>
            </div>

            {/* RECOMMENDATIONS WITH IMAGE BACKGROUND COVER */}

            <div className="grid grid-cols-1 px-20 xl:px-36 2xl:px-12 2xl:grid-cols-2 gap-6 2xl:gap-x-12 2xl:gap-y-8">
                {recommendTracks.map((item) => (
                    <CardWithCover key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
