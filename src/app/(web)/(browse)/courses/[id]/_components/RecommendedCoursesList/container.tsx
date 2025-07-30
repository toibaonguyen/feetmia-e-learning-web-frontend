'use client'
import RecommendedCoursesList from "./presentation";

interface RecommendedCoursesListContainerProps {
    courseId: string;
}

export default function RecommendedCoursesListContainer({ courseId }: RecommendedCoursesListContainerProps) {

    return <RecommendedCoursesList />;
}