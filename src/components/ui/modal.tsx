import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/cn";

export function Modal({
    trigger,
    title,
    children,
}: {
    trigger: React.ReactNode;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

                <Dialog.Content
                    className={cn(
                        "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                        "w-[90vw] max-w-lg rounded-xl bg-slate-900 border border-slate-800 p-6 shadow-xl",
                    )}
                >
                    <Dialog.Title className="text-lg font-semibold text-white mb-4">
                        {title}
                    </Dialog.Title>
                    {children}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
