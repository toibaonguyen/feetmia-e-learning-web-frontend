import { GetCourseById } from "@/services/course.service";
import { notFound } from "next/navigation";
import CSRPage from "./_components/CSRPage";


export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
    const courseId = (await params).id;
    const course = await GetCourseById(courseId);
    if (!course) {
        return notFound();
    }
    
    return (
        <CSRPage course={course} />
    )
}