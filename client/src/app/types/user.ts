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
    username: string;
    email: string;
    password: string;
    image: string;
    id: string;
}

export interface ProfileDetails {
    username: string;
    email: string;
    image: string;
}