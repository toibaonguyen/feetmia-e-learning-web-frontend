import { Response } from "@/models/response.model";

export interface Instructor {
    id: string;
    name: string;
    avatarSrc: string;
}


export interface InstructorProfile {
    id: string;
    name: string;
    title: string;
    avatarSrc: string;
    description: string;
    totalCoursesCount: number;
    totalStudentsCount: number;
    totalRatingsCount: number;
}


export interface InstructorProfileResponse extends Response<InstructorProfile> {
}