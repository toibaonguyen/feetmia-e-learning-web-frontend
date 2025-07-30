'use client'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CourseModule as CourseModuleType } from "@/types/course-module.type";
import { ChevronDownIcon, TvMinimalPlay, TvMinimalPlayIcon } from "lucide-react";
import { useState } from "react";
import { getHoursMinutesSeconds } from "@/utils/time.util";

interface CourseModuleProps {
    module: CourseModuleType;
}

export default function CourseModule({ module }: CourseModuleProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [hours, minutes, seconds] = getHoursMinutesSeconds(module.totalLecturesDuration);
    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <CollapsibleTrigger asChild>
                <div className="w-full border flex flex-row py-4 px-6 bg-muted hover:cursor-pointer">
                    <div className="flex flex-row items-center gap-x-2">
                        <ChevronDownIcon className={`w-4 h-4 ${isOpen ? "rotate-180 transition-transform duration-300" : "transition-transform duration-300"}`} />
                    </div>
                    <div className="flex-1 flex flex-row justify-between ml-3">
                        <p>{module.title}</p>
                        <p>
                            <span>{module.lecturesCount} lectures</span>
                            <span> • </span>
                            <span>{hours > 0 && `${hours} hours`} {minutes > 0 && `${minutes} minutes`}</span>
                        </p>
                    </div>
                </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <div className="border py-4 px-6">
                    <ul className="w-full flex flex-col">
                        {
                            module.lectures.map((lecture) => (
                                <li key={lecture.id} className="w-full flex flex-row py-2">
                                    <div className="flex flex-row items-center gap-x-2">
                                        <TvMinimalPlayIcon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 flex flex-row justify-between ml-3">
                                        <p>{lecture.title}</p>
                                        <p>
                                            <span>{hours > 0 ? hours : "00"}:{minutes > 0 ? minutes : "00"}:{seconds > 0 ? seconds : "00"}</span>
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </CollapsibleContent>
        </Collapsible>
    )
}
