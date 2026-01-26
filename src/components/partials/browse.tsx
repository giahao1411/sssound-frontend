import { CATEGORIES, COLOR_PALETTES } from "@/constants/app";
import { cn } from "@/lib/cn";

export default function Browse() {
    return (
        <div className="grid grid-cols-3 gap-4">
            {CATEGORIES.map((category, index) => {
                const palette = COLOR_PALETTES[index % COLOR_PALETTES.length];
                const [bg] = palette;

                return (
                    <div
                        key={category}
                        className={cn(
                            "rounded-xl p-4 h-36 cursor-pointer",
                            "hover:scale-102 hover:transition-all",
                            bg,
                        )}
                    >
                        <h2 className="text-xl text-white font-semibold">
                            {category}
                        </h2>
                    </div>
                );
            })}
        </div>
    );
}
