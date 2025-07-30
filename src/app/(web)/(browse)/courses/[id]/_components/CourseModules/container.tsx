'use client'
import { useEffect, useState } from "react";
import CourseModules from "./presentation";
import { CourseModule } from "@/types/course-module.type";
import { GetCourseModules } from "@/services/course.service";

interface CourseModulesContainerProps {
    courseId: string;
}

export default function CourseModulesContainer({ courseId }: CourseModulesContainerProps) {
    const [modules, setModules] = useState<CourseModule[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchModules = async () => {
            const modules = await GetCourseModules(courseId);
            setModules(modules);
            setIsLoading(false);
        }
        fetchModules();
    }, []);

    return (
        <CourseModules isLoading={isLoading} modules={modules} />
    )
}