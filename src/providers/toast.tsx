import * as Toast from "@radix-ui/react-toast";

export function ToastProvider({ children }: { children: React.ReactNode }) {
    return (
        <Toast.Provider swipeDirection="right">
            {children}
            <Toast.Viewport className="fixed top-6 right-6 z-[100] flex flex-col gap-2 outline-none" />
        </Toast.Provider>
    );
}
