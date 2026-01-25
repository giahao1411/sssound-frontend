import { CATEGORIES, COLOR_PALETTES } from "@/constants/app";
import { cn } from "@/lib/cn";

export default function Browse() {
    return (
        <div className="min-h-screen grid grid-cols-3 gap-4 max-w-7xl overflow-hidden">
            {CATEGORIES.map((category, index) => {
                const palette = COLOR_PALETTES[index % COLOR_PALETTES.length];
                const [bg] = palette;

                return (
                    <div
                        key={category}
                        className={cn(
                            "rounded-xl p-4 h-36 flex items-start",
                            bg,
                        )}
                    >
                        <h2 className="text-xl font-semibold">{category}</h2>
                    </div>
                );
            })}
        </div>
    );
}
