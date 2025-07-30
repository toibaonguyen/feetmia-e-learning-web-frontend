import { COURSES_API } from "@/constants/api.constant";
import { PATH_COURSES } from "@/constants/paths.constant";
import instance from "@/models/axios-client.model";
import serverInstance from "@/models/axios-server.model";
import { CourseModule, CourseModulesResponse } from "@/types/course-module.type";
import { Course, CourseDetailsResponse, CoursePreview, CoursePreviewResponse } from "@/types/course.type";
import { formatDate } from "@/utils/date.util";

export const GetStudentViewingCourses = async (page: number, pageSize: number): Promise<CoursePreview[]> => {
    try {
        const response = await instance.get<CoursePreviewResponse>(COURSES_API.BASE_URL + COURSES_API.SUB_URL.GET_STUDENT_VIEWING_COURSES.BASE_URL, {
            params: {
                [COURSES_API.SUB_URL.GET_STUDENT_VIEWING_COURSES.QUERY.page]: page,
                [COURSES_API.SUB_URL.GET_STUDENT_VIEWING_COURSES.QUERY.pageSize]: pageSize,
            },
        });
        if (response.data.isSuccess) {

            return response.data.data.map(c => {
                return {
                    ...c,
                    updatedAt: formatDate(new Date(c.updatedAt))
                }
            }) ?? [];
        }
        return [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const GetCourseById = async (id: string): Promise<Course | null> => {
    try {
        const response = await serverInstance.get<CourseDetailsResponse>(COURSES_API.BASE_URL + "/" + id);
        const course = response.data.data;
        return {
            ...course,
            updatedAt: formatDate(new Date(course.updatedAt)),
            skills: course.skills.map(s => ({
                ...s,
                url: `${PATH_COURSES.BASE_URL}?${PATH_COURSES.QUERY.skill}=${s.name}`
            })),
            categories: course.categories.map(c => ({
                ...c,
                url: `${PATH_COURSES.BASE_URL}?${PATH_COURSES.QUERY.category}=${c.name}`
            })),
            roles: course.roles.map(r => ({
                ...r,
                url: `${PATH_COURSES.BASE_URL}?${PATH_COURSES.QUERY.role}=${r.name}`
            }))
        }
    } catch (error) {
        console.log("error:::",error);
        return null;
    }
}

export const GetCourseModules = async (courseId: string): Promise<CourseModule[]> => {
    try {
        const response = await serverInstance.get<CourseModulesResponse>(COURSES_API.BASE_URL + "/" + courseId + COURSES_API.SUB_URL.GET_COURSE_MODULES.BASE_URL);
        if (response.data.isSuccess) {
            return response.data.data;
        }
        return [];
    } catch (error) {
        console.log("error:::", error);
        return [];
    }
}