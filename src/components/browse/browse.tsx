import { CATEGORIES, COLOR_PALETTES } from "@/constants/app";
import { cn } from "@/lib/cn";

export default function Browse() {
    return (
        <div className="flex flex-col">
            <h1 className="font-mplus text-xl font-bold">Browse All</h1>

            <div className="grid grid-cols-3 xl:grid-cols-4 gap-4 py-6">
                {CATEGORIES.map((category, index) => {
                    const palette =
                        COLOR_PALETTES[index % COLOR_PALETTES.length];
                    const [bg] = palette;

                    return (
                        <div
                            key={category}
                            className={cn(
                                "font-josefin rounded-xl p-4 h-36 cursor-pointer",
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
        </div>
    );
}
