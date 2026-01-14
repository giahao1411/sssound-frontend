import * as Toast from "@radix-ui/react-toast";
import { useState } from "react";

export function useToast() {
    const [open, setOpen] = useState(false);

    function show() {
        setOpen(false);
        requestAnimationFrame(() => setOpen(true));
    }

    const ToastUI = (
        <Toast.Root
            open={open}
            onOpenChange={setOpen}
            className="bg-background border border-border text-foreground px-4 py-3 rounded-lg shadow-lg"
        >
            <Toast.Title className="font-medium">Login failed</Toast.Title>
            <Toast.Description className="text-sm text-slate-400">
                Invalid email or password
            </Toast.Description>
        </Toast.Root>
    );

    return { show, ToastUI };
}
