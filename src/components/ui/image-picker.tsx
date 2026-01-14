import { useRef, useState } from "react";
import { Button } from "./button";

export function ImagePicker({ onChange }: { onChange: (file: File) => void }) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string>();

    return (
        <div className="space-y-3">
            {preview && (
                <img
                    src={preview}
                    className="w-32 h-32 rounded-lg object-cover border border-slate-700"
                />
            )}

            <input
                ref={inputRef}
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    setPreview(URL.createObjectURL(file));
                    onChange(file);
                }}
            />

            <Button
                className="text-surface-muted"
                type="button"
                variant="ghost"
                onClick={() => inputRef.current?.click()}
            >
                Upload image
            </Button>
        </div>
    );
}
