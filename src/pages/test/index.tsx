import { useState } from "react";
import { DatePicker } from "@/components/ui/date-picker";
import { Select } from "@/components/ui/select";
import { MultiSelect } from "@/components/ui/multi-select";
import { ImagePicker } from "@/components/ui/image-picker";
import { Button } from "@/components/ui/button";

export default function TestPage() {
    const [date, setDate] = useState<Date>();
    const [country, setCountry] = useState<string>();
    const [skills, setSkills] = useState<string[]>([]);
    const [image, setImage] = useState<File>();

    return (
        <div className="p-10 bg-surface">
            <div className="max-w-2xl mx-auto space-y-10">
                <h1 className="text-3xl font-bold">UI Playground</h1>

                {/* Date Picker */}
                <section className="space-y-3">
                    <h2 className="text-lg font-semibold">Date Picker</h2>
                    <DatePicker value={date} onChange={setDate} />
                    {date && (
                        <p className="text-surface-muted">
                            Selected: {date.toDateString()}
                        </p>
                    )}
                </section>

                {/* Select */}
                <section className="space-y-3">
                    <h2 className="text-lg font-semibold">
                        Select (with search)
                    </h2>
                    <Select
                        placeholder="Choose country"
                        value={country}
                        onChange={setCountry}
                        options={["Vietnam", "Japan", "USA", "Korea", "France"]}
                    />
                    <p className="text-surface-muted">Value: {country}</p>
                </section>

                {/* Multi Select */}
                <section className="space-y-3">
                    <h2 className="text-lg font-semibold">Multi Select</h2>
                    <MultiSelect
                        value={skills}
                        onChange={setSkills}
                        options={[
                            "React",
                            "Next.js",
                            "Node.js",
                            "Docker",
                            "Postgres",
                            "AWS",
                        ]}
                    />
                    <p className="text-surface-muted">
                        Selected: {skills.join(", ")}
                    </p>
                </section>

                {/* Image Picker */}
                <section className="space-y-3">
                    <h2 className="text-lg font-semibold">Image Picker</h2>
                    <ImagePicker onChange={setImage} />
                    {image && (
                        <p className="text-surface-muted">
                            File: {image.name} ({(image.size / 1024).toFixed(1)}
                            kb)
                        </p>
                    )}
                </section>

                {/* Submit */}
                <Button
                    onClick={() => {
                        console.log({ date, country, skills, image });
                        alert("Check console for values");
                    }}
                >
                    Submit Test
                </Button>
            </div>
        </div>
    );
}
