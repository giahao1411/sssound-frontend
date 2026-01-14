import * as Popover from "@radix-ui/react-popover";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Button } from "./button";

export function DatePicker({
    value,
    onChange,
}: {
    value?: Date;
    onChange: (date: Date | undefined) => void;
}) {
    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <Button
                    variant="ghost"
                    className="w-full justify-start text-surface-muted text-left"
                >
                    {value ? value.toDateString() : "Pick a date"}
                </Button>
            </Popover.Trigger>

            <Popover.Content
                className="bg-background border border-border p-3 rounded-xl shadow-xl"
                sideOffset={8}
            >
                <DayPicker mode="single" selected={value} onSelect={onChange} />
            </Popover.Content>
        </Popover.Root>
    );
}
