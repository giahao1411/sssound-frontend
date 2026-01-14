import * as Popover from "@radix-ui/react-popover";
import { Command, CommandInput, CommandItem, CommandList } from "cmdk";
import { Button } from "./button";
import { useState } from "react";

export function Select({
    options,
    value,
    onChange,
    placeholder,
}: {
    options: string[];
    value?: string;
    onChange: (v: string) => void;
    placeholder?: string;
}) {
    const [open, setOpen] = useState(false);

    return (
        <Popover.Root open={open} onOpenChange={setOpen}>
            <Popover.Trigger asChild>
                <Button
                    variant="ghost"
                    className="w-full justify-between text-foreground"
                >
                    {value ?? placeholder ?? "Select"}
                </Button>
            </Popover.Trigger>

            <Popover.Content className="w-64 bg-background border border-border p-2 rounded-xl">
                <Command>
                    <CommandInput
                        placeholder="Search..."
                        className="text-foreground"
                    />
                    <CommandList>
                        {options.map((o) => (
                            <CommandItem
                                key={o}
                                onSelect={() => {
                                    onChange(o);
                                    setOpen(false);
                                }}
                                className="px-3 py-2 rounded hover:bg-white/10 text-foreground"
                            >
                                {o}
                            </CommandItem>
                        ))}
                    </CommandList>
                </Command>
            </Popover.Content>
        </Popover.Root>
    );
}
