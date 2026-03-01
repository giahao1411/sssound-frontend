import type { RecentsOption, Sections } from "@/types/core/app";

export const SECTIONS: Sections[] = [
    "Playlist",
    "Album",
    "EP",
    "Artist",
    "Genre",
];

export const RECENT_OPTIONS: RecentsOption[] = [
    "Recently Played",
    "Recently Added",
    "Alphabetical",
    "Creator",
];

export const CATEGORIES = [
    "Music",
    "Podcasts",
    "Audiobooks",
    "Live",
    "Made for You",
    "New Releases",
    "Discover",
    "Charts",
    "Concerts",
    "Videos",
    "Mood",
    "Workout",
    "Focus",
    "Sleep",
    "Party",
    "Chill",
    "Jazz",
    "Classical",
    "Rock",
    "Pop",
    "Hip-Hop",
];

// random color palettes for music categories
export const COLOR_PALETTES = [
    ["bg-[#0F172A]", "bg-[#1E293B]", "bg-[#2563EB]", "bg-[#020617]"], // Midnight Blue
    ["bg-[#1E1B4B]", "bg-[#312E81]", "bg-[#7C3AED]", "bg-[#0F0A2A]"], // Deep Purple
    ["bg-[#052E16]", "bg-[#14532D]", "bg-[#22C55E]", "bg-[#022C22]"], // Forest Green
    ["bg-[#18181B]", "bg-[#27272A]", "bg-[#A1A1AA]", "bg-[#09090B]"], // Charcoal Gray
    ["bg-[#042F2E]", "bg-[#134E4A]", "bg-[#14B8A6]", "bg-[#022C2A]"], // Ocean Teal
    ["bg-[#4C0519]", "bg-[#7F1D1D]", "bg-[#EF4444]", "bg-[#2A040E]"], // Wine Red
    ["bg-[#020617]", "bg-[#0F172A]", "bg-[#38BDF8]", "bg-[#000000]"], // Cyber Blue
    ["bg-[#1E1B4B]", "bg-[#312E81]", "bg-[#6366F1]", "bg-[#0B0A2A]"], // Indigo Night
    ["bg-[#1A2E05]", "bg-[#365314]", "bg-[#84CC16]", "bg-[#0F1A02]"], // Dark Olive
    ["bg-[#020617]", "bg-[#111827]", "bg-[#64748B]", "bg-[#000000]"], // Slate Pro
    ["bg-[#4A044E]", "bg-[#701A75]", "bg-[#D946EF]", "bg-[#2A022D]"], // Magenta Night
    ["bg-[#422006]", "bg-[#713F12]", "bg-[#F59E0B]", "bg-[#2A1403]"], // Amber Night
    ["bg-[#083344]", "bg-[#155E75]", "bg-[#06B6D4]", "bg-[#041E2A]"], // Cyan Night
    ["bg-[#500724]", "bg-[#881337]", "bg-[#FB7185]", "bg-[#2A0313]"], // Rose Dark
    ["bg-[#1C1917]", "bg-[#292524]", "bg-[#78716C]", "bg-[#0C0A09]"], // Graphite
];

export const GENRES = [
    { type: "Pop", color: "bg-[#60A5FA]" }, // blue
    { type: "Rap", color: "bg-[#F87171]" }, // red
    { type: "Hip-Hop", color: "bg-[#FB923C]" }, // orange
    { type: "Indie", color: "bg-[#A78BFA]" }, // violet
    { type: "Rock", color: "bg-[#FACC15]" }, // yellow
    { type: "Jazz", color: "bg-[#34D399]" }, // emerald
    { type: "Classical", color: "bg-[#38BDF8]" }, // sky
    { type: "Country", color: "bg-[#FBBF24]" }, // amber
    { type: "Electronic", color: "bg-[#22D3EE]" }, // cyan
    { type: "R&B", color: "bg-[#F472B6]" }, // pink
    { type: "Reggae", color: "bg-[#4ADE80]" }, // green
    { type: "Blues", color: "bg-[#818CF8]" }, // indigo
    { type: "Metal", color: "bg-[#FB7185]" }, // rose
    { type: "Folk", color: "bg-[#A3E635]" }, // lime
    { type: "Punk", color: "bg-[#F97316]" }, // orange strong
    { type: "Disco", color: "bg-[#E879F9]" }, // fuchsia
    { type: "Funk", color: "bg-[#2DD4BF]" }, // teal
    { type: "Gospel", color: "bg-[#C084FC]" }, // purple
    { type: "Ska", color: "bg-[#FCD34D]" }, // yellow soft
    { type: "Soul", color: "bg-[#FB7185]" }, // rose
    { type: "Techno", color: "bg-[#22C55E]" }, // green vivid
    { type: "Trance", color: "bg-[#38BDF8]" }, // sky bright
];
