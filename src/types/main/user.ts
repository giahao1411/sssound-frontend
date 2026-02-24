import type { UserType } from "../core/media";

export interface User {
    id: string;
    username: string;
    email: string;
    avatarUrl?: string;
    role: UserType;
    bio?: string;
    verified: boolean;
    createdAt: string;
    updatedAt: string;
}
