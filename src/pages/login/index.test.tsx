import Login from "@/components/login/login";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

const showError = vi.fn();

vi.mock("@/hooks/use-toast", () => ({
    useToast: () => ({
        showError: showError,
        ToastUI: null,
    }),
}));

describe("Login page", () => {
    it("renders login form", () => {
        render(<Login />);

        expect(
            screen.getByRole("heading", { name: /sign in/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText("you@example.com"),
        ).toBeInTheDocument();
        expect(screen.getByPlaceholderText("••••••••")).toBeInTheDocument();
    });

    it("shows error toast on submit", () => {
        render(<Login />);

        fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

        expect(showError).toHaveBeenCalledWith(
            "Login failed",
            "Invalid email or password",
        );
    });
});
