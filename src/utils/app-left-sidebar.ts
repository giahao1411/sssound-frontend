import type { LibraryItem } from "@/types/library-item";
import type { SortOrder } from "@/types/app";
import type { Sections } from "@/types/app";

const typeMap: Record<string, Sections> = {
    Album: "Albums",
    Playlist: "Playlists",
    Artist: "Artists",
    EP: "EPs",
    Genre: "Genres",
};

// sort pinned items first, then sort by title
export function sortPinnedFirst(items: LibraryItem[]) {
    const pinned = items
        .filter((i) => i.isPinned)
        .sort((a, b) => a.title.localeCompare(b.title));

    const normal = items
        .filter((i) => !i.isPinned)
        .sort((a, b) => a.title.localeCompare(b.title));

    return { pinned, normal };
}

export function sortByOrder(
    groups: { pinned: LibraryItem[]; normal: LibraryItem[] },
    order: SortOrder,
) {
    if (order === "asc") {
        return {
            pinned: [...groups.pinned], // not trigger sort on pinned
            normal: [...groups.normal].reverse(),
        };
    }

    return groups;
}

// filter items by section
export function filterBySection(items: LibraryItem[], section: Sections) {
    if (section === "Default") return items;

    return items.filter((item) => typeMap[item.type] === section);
}

// filter items by search keyword
export function filterBySearch(items: LibraryItem[], search: string) {
    const keyword = search.toLowerCase();

    return items.filter(
        (item) =>
            item.title.toLowerCase().includes(keyword) ||
            item.type.toLowerCase().includes(keyword) ||
            item.artist.toLowerCase().includes(keyword),
    );
}
