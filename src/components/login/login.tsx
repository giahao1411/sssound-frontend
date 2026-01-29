import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Modal } from "@/components/ui/modal";
import { useToastStore } from "@/store/toasts-store";

export default function Login() {
    const { showError } = useToastStore();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        showError("Login failed", "Invalid email or password"); // fake error toast
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md rounded-xl bg-surface border border-border p-8 shadow-xl">
                <h1 className="text-2xl font-bold text-foreground text-center mb-2">
                    Sign in
                </h1>
                <p className="text-muted-foreground text-center mb-6">
                    Login to your account
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            placeholder="you@example.com"
                            className="bg-surface-muted border-border text-foreground"
                        />
                    </div>

                    <div>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            placeholder="••••••••"
                            className="bg-surface-muted border-border text-foreground"
                        />
                    </div>

                    <Button className="w-full bg-primary text-primary-foreground hover:opacity-90">
                        Sign in
                    </Button>
                </form>

                <div className="mt-6 text-center">
                    <Modal
                        title="Reset password"
                        trigger={
                            <Button variant="ghost" className="text-primary">
                                Forgot password?
                            </Button>
                        }
                    >
                        <p className="text-muted-foreground text-sm mb-4">
                            Enter your email to receive a reset link.
                        </p>

                        <Input
                            type="email"
                            placeholder="you@example.com"
                            className="bg-surface-muted border-border text-foreground"
                        />

                        <div className="mt-4 flex justify-end gap-2">
                            <Button variant="ghost">Cancel</Button>
                            <Button className="bg-primary text-primary-foreground">
                                Send
                            </Button>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}
