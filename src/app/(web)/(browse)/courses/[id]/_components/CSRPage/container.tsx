'use client'

import { Course } from "@/types/course.type";
import CSRPage from "./presentation";

interface CSRPageContainerProps {
    course: Course;
}

export default function CSRPageContainer({ course }: CSRPageContainerProps) {
    return (
        <CSRPage course={course} />
    )
}