import { Response } from "@/models/response.model";

export interface UserPreview {
    name: string;
    avatarSrc?: string;
}

export interface User {
    id: string;
    email: string;
    name: string;
    avatarSrc?: string;
    createdAt: string;
    updatedAt: string;
}


export interface UserResponse extends Response<User>{
}