'use client'
import { CourseModule } from "@/types/course-module.type";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getHoursMinutesSeconds } from "@/utils/time.util";
import CourseModuleCollapsible from "../CourseModule/presentation";

interface CourseModuleProps {
    isLoading: boolean;
    modules: CourseModule[];
}


export default function CourseModules({ isLoading, modules }: CourseModuleProps) {

    const MAX_MODULE_COUNT_TO_SHOW_FIRST_TIME = 10;
    const [isExpanded, setIsExpanded] = useState(false);

    const totalModulesCount = modules.length;
    const totalLecturesCount = modules.reduce((acc, module) => acc + module.lectures.length, 0);
    const totalLecturesDuration = modules.reduce((acc, module) => acc + module.lectures.reduce((acc, lecture) => acc + lecture.duration, 0), 0);
    const [hours, minutes] = getHoursMinutesSeconds(totalLecturesDuration);


    if (isLoading) {
        return <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col gap-2">
                <Skeleton className="w-full h-6 rounded-md" />
                <Skeleton className="w-full h-6  rounded-md" />
                <Skeleton className="w-[50%] h-6  rounded-md" />
            </div>
            <div className="w-full flex flex-col gap-2">
                <Skeleton className="w-full h-6 rounded-md" />
                <Skeleton className="w-full h-6  rounded-md" />
                <Skeleton className="w-[50%] h-6  rounded-md" />
            </div>
            <div className="w-full flex flex-col gap-2">
                <Skeleton className="w-full h-6 rounded-md" />
                <Skeleton className="w-full h-6  rounded-md" />
                <Skeleton className="w-[50%] h-6  rounded-md" />
            </div>
            <div className="w-full flex flex-col gap-2">
                <Skeleton className="w-full h-6 rounded-md" />
                <Skeleton className="w-full h-6  rounded-md" />
                <Skeleton className="w-[50%] h-6  rounded-md" />
            </div>
            <div className="w-full flex flex-col gap-2">
                <Skeleton className="w-full h-6 rounded-md" />
                <Skeleton className="w-full h-6  rounded-md" />
                <Skeleton className="w-[50%] h-6  rounded-md" />
            </div>
            <div className="w-full flex flex-col gap-2">
                <Skeleton className="w-full h-6 rounded-md" />
                <Skeleton className="w-full h-6  rounded-md" />
                <Skeleton className="w-[50%] h-6  rounded-md" />
            </div>
        </div>;
    }

    return (
        <div>
            <div className="w-full flex flex-col">
                <div className="w-full">
                    <h2 className="text-2xl font-bold mb-4">Explore more related topics</h2>
                </div>
                <div className="box-border flex flex-row justify-between">
                    <div >
                        <span>{totalModulesCount} sections</span>
                        <span> • </span>
                        <span>{totalLecturesCount} lectures</span>
                        <span> • </span>
                        <span>{hours > 0 && `${hours} hours`} {minutes > 0 && `${minutes} minutes`}</span>
                    </div>
                </div>
                <div className="w-full">
                    <ul className="w-full flex flex-col">
                        {
                            modules.slice(0, isExpanded ? modules.length : MAX_MODULE_COUNT_TO_SHOW_FIRST_TIME).map((module) => (
                                <li key={module.id}>
                                    <CourseModuleCollapsible module={module} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="w-full">
                    {
                        (totalModulesCount > MAX_MODULE_COUNT_TO_SHOW_FIRST_TIME && !isExpanded) && (
                            <Button variant={"outline"} onClick={() => setIsExpanded(true)} className="w-full border cursor-pointer border-primary text-primary hover:bg-primary/10 hover:text-primary">
                                Show more
                            </Button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}