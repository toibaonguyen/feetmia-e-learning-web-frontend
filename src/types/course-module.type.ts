import { Response } from "@/models/response.model";
import { Lecture } from "./lecture.type";

export interface CourseModule {
    id: string;
    title: string;
    lecturesCount: number;
    totalLecturesDuration: number;
    lectures: Lecture[];
}



export interface CourseModulesResponse extends Response<CourseModule[]> {
}