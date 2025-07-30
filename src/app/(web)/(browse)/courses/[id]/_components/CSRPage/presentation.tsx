import { Course } from "@/types/course.type";
import { Star, StarHalf } from "lucide-react";
import CourseModules from "../CourseModules";
import CoursePurchaseCard from "../CoursePurchaseCard";
import ExpandableDescription from "../ExpandableDescription";
import RequirementsList from "../RequirementsList";
import TargetLearningOutcomesList from "../TargetLearningOutcomesList";
import TopicTagList from "../TopicTagList";
import RecommendedCoursesList from "../RecommendedCoursesList";
import InstructorProfileSection from "../InstructorProfileSection";
import { PATH_INSTRUCTORS } from "@/constants/paths.constant";

interface CSRPageProps {
    course: Course;
}

export default function CSRPage({ course }: CSRPageProps) {

    const fullStars = Math.floor(course.avgRating);
    const hasHalfStar = course.avgRating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return (
        <div className="w-full flex flex-col items-center relative">
            <div className="w-full relative z-0">
                <div className="py-8 bg-[#273F4F] text-[#D7D7D7] w-full flex flex-col items-center overflow-y-auto z-0">
                    <div className="xl:w-[1184px] px-4">
                        <div className="w-[700px]">
                            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                            <p className="mb-6 text-lg font-semibold">{course.shortDescription}</p>
                            <div className="flex flex-row gap-1 items-center">
                                <span className="text-[#f69c08] text-sm font-bold">{course.avgRating}</span>
                                {/* Hiển thị sao đầy */}
                                {Array.from({ length: fullStars }, (_, index) => (
                                    <Star className="text-[#f69c08] fill-[#f69c08] h-3 w-3 inline" key={`full-${index}`} />
                                ))}
                                {/* Hiển thị nửa sao nếu có */}
                                {hasHalfStar && (
                                    <StarHalf className="text-[#f69c08] fill-[#f69c08] h-3 w-3 inline" />
                                )}
                                {/* Hiển thị sao trống */}
                                {Array.from({ length: emptyStars }, (_, index) => (
                                    <Star className="text-muted-foreground h-3 w-3 inline" key={`empty-${index}`} />
                                ))}
                            </div>
                            <p>Created by <a className="text-primary hover:underline" href="#instructor">{course.instructor.name}</a></p>
                            <p>Last updated at {course.updatedAt}</p>
                            <p>{course.language}</p>
                        </div>
                    </div>
                </div>
                <div className="py-8 w-full flex flex-col items-center z-0">
                    <div className="xl:w-[1184px] px-4">
                        <div className="w-[700px] mb-8">
                            <TargetLearningOutcomesList learningOutcomes={course.learningOutcomes} />
                        </div>
                        <div className="w-[700px] mb-8">
                            <TopicTagList skills={course.skills} categories={course.categories} roles={course.roles} />
                        </div>
                        <div className="w-[700px] mb-8">
                            <CourseModules courseId={course.id} />
                        </div>
                        <div className="w-[700px] mb-8">
                            <RequirementsList requirements={course.requirements} />
                        </div>
                        <div className="w-[700px] mb-8">
                            <ExpandableDescription description={course.description} />
                        </div>
                        <div className="w-[700px] mb-8">
                            <RecommendedCoursesList courseId={course.id} />
                        </div>
                        <div className="w-[700px] mb-8" id="instructor">
                            <InstructorProfileSection instructor={course.instructor} instructorUrl={`${PATH_INSTRUCTORS.BASE_URL}/${course.instructor.id}`} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute h-full w-full xl:w-[1184px] px-4 flex flex-col items-end py-8 pointer-events-none">
                <aside className="sticky top-8 p-2 box-border bg-background w-[340px] pointer-events-auto shadow-lg border" >
                    <CoursePurchaseCard courseId={course.id} thumbnailSrc={course.thumbnailSrc} priceSummary={course.priceSummary} />
                </aside>
            </div>
        </div >
    )
}