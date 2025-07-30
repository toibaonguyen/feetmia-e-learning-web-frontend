'use client'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { CourseRequirement } from "@/types/course.type";
import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";


interface RequirementsListProps {
    requirements: CourseRequirement[];
}

export default function RequirementsList({ requirements }: RequirementsListProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <div className="flex flex-col gap-2">
                <Separator className="my-4" />
                <CollapsibleTrigger asChild>
                    <div className="w-full flex flex-row justify-between hover:cursor-pointer items-center mb-4">
                        <p className="text-2xl font-bold">Requirements</p>
                        <ChevronDownIcon className={`w-4 h-4 ${isOpen ? "rotate-180 transition-transform duration-300" : "transition-transform duration-300"}`} />
                    </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <ul className="list-disc list-inside flex flex-col">
                        {requirements.map((requirement) => (
                            <li key={requirement.id}>{requirement.description}</li>
                        ))}
                    </ul>
                </CollapsibleContent>
                <Separator className="my-4" />
            </div>
        </Collapsible>
    )
}