import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/cn";

interface ModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    children: React.ReactNode;
}

export function Modal({ open, onOpenChange, title, children }: ModalProps) {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]" />

                <Dialog.Content
                    onOpenAutoFocus={(e) => e.preventDefault()}
                    className={cn(
                        "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999]",
                        "w-[90vw] max-w-lg rounded-xl p-6 shadow-xl",
                        "bg-surface-muted border border-border",
                        "focus:outline-none focus:ring-0",
                    )}
                >
                    <Dialog.Title className="text-foreground text-lg font-semibold mb-4">
                        {title}
                    </Dialog.Title>
                    {children}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
