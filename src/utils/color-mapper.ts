import { GENRES } from "@/constants/app";

export const GENRE_COLOR_MAP = GENRES.reduce<Record<string, string[]>>(
    (acc, genre) => {
        acc[genre.type] = [genre.color];
        return acc;
    },
    {},
);
