import { Select } from "./select";

export function MultiSelect({
    options,
    value,
    onChange,
}: {
    options: string[];
    value: string[];
    onChange: (v: string[]) => void;
}) {
    return (
        <Select
            options={options}
            value={value.join(", ")}
            onChange={(v) =>
                value.includes(v)
                    ? onChange(value.filter((x) => x !== v))
                    : onChange([...value, v])
            }
        />
    );
}
