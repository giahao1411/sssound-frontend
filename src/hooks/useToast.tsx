import * as Toast from "@radix-ui/react-toast";
import { CheckCircle, Info, XCircle } from "lucide-react";
import { useState } from "react";

type ToastTypes = "success" | "error" | "info";

export function useToast() {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState<ToastTypes>("info");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function showSuccess(title: string, description?: string) {
        setType("success");
        setTitle(title);
        setDescription(description ?? "");
        trigger();
    }

    function showError(title: string, description?: string) {
        setType("error");
        setTitle(title);
        setDescription(description ?? "");
        trigger();
    }

    function showInfo(title: string, description?: string) {
        setType("info");
        setTitle(title);
        setDescription(description ?? "");
        trigger();
    }

    function trigger() {
        setOpen(false);
        requestAnimationFrame(() => setOpen(true));
    }

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

    const ToastUI = (
        <Toast.Root
            open={open}
            onOpenChange={setOpen}
            className={`
          flex items-start gap-3 rounded-lg border p-4 shadow-lg
          bg-surface text-foreground
          data-[state=open]:animate-in data-[state=closed]:animate-out
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

    return { showSuccess, showError, showInfo, ToastUI };
}
