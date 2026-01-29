import { useToastStore } from "@/store/toasts-store";
import * as Toast from "@radix-ui/react-toast";
import { CheckCircle, Info, XCircle } from "lucide-react";

const durationMap = {
    success: 2000,
    error: 4000,
    info: 3000,
};

export default function ToastRender() {
    const { open, type, title, description, close } = useToastStore();

    const styleMap = {
        info: {
            border: "border-primary",
            text: "text-primary",
            icon: <Info className="h-5 w-5 text-primary" />,
        },
        success: {
            border: "border-success",
            text: "text-success",
            icon: <CheckCircle className="h-5 w-5 text-success" />,
        },
        error: {
            border: "border-danger",
            text: "text-danger",
            icon: <XCircle className="h-5 w-5 text-danger" />,
        },
    };

    const current = styleMap[type];

    return (
        <Toast.Root
            duration={durationMap[type]}
            open={open}
            onOpenChange={(v) => !v && close()}
            className={`
                    flex items-start gap-3 rounded-lg border p-4 shadow-lg
                    bg-surface text-foreground
                    data-[state=open]:animate-in
                    data-[state=open]:fade-in
                    data-[state=open]:slide-in-from-right-5
                    data-[state=closed]:animate-out
                    data-[state=closed]:fade-out
                    data-[state=closed]:slide-out-to-right-5
                  ${current.border}
                `}
        >
            <div className="mt-0.5">{current.icon}</div>

            <div className="flex-1">
                <Toast.Title className={`text-sm font-medium ${current.text}`}>
                    {title}
                </Toast.Title>

                {description && (
                    <Toast.Description className="mt-1 text-sm text-foreground-muted">
                        {description}
                    </Toast.Description>
                )}
            </div>
        </Toast.Root>
    );
}
