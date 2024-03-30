import { Post } from "./post";

export interface User {
    themes: string[];
    posts: Post[];
    _id: string;
    email: string;
    username: string;
    password: string;
    created_at: string;
    updatedAt: string;
    __v: number;
};

export interface UserForAuth {
    firstName: string;
    email: string;
    password: string;
}