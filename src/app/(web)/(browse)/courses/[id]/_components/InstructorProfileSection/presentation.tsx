'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import useElementSize from "@/hooks/useElementSize";
import { InstructorProfile } from "@/types/instructor";
import { CirclePlay, Medal, Users } from "lucide-react";
import { Ref, useEffect, useState } from "react";

interface InstructorProfileProps {
  instructor: InstructorProfile;
  instructorUrl: string ;
}

export default function InstructorProfileSection({ instructor, instructorUrl }: InstructorProfileProps) {
  const INITIAL_HEIGHT = 146;
  const [isCollapsible, setIsCollapsible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, size] = useElementSize();

  useEffect(() => {
    setIsCollapsible(size.height > INITIAL_HEIGHT);
  }, [size]);

  return (
    <div>
      <p className="text-2xl font-bold mb-4">Instructor</p>
      <a href={instructorUrl || ""} className="text-primary underline font-bold text-xl">{instructor.name}</a>
      <p className="text-muted-foreground">{instructor.title}</p>
      <div className="flex flex-row h-[112px] rounded-full overflow-hidden mt-2">
        <div className="mr-4 w-[112px] h-full">
          <Avatar className="w-full h-full">
            <AvatarImage src={instructor.avatarSrc} />
            <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        <div className="h-full">
          <div className="flex flex-row items-center">
            <Medal className="w-4 h-4" />
            <p className="ml-4">{instructor.totalRatingsCount} ratings</p>
          </div>
          <div className="flex flex-row items-center">
            <Users className="w-4 h-4" />
            <p className="ml-4">{instructor.totalStudentsCount} students</p>
          </div>
          <div className="flex flex-row items-center">
            <CirclePlay className="w-4 h-4" />
            <p className="ml-4">{instructor.totalCoursesCount} courses</p>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-2">
        <div ref={ref as Ref<HTMLDivElement>} className={`${!isCollapsible ? "" : (isExpanded ? "" : `max-h-[${INITIAL_HEIGHT}px] `)}overflow-hidden`}>
          <p>{instructor.description}</p>
        </div>
        {
          isCollapsible && (
            <div>
              <Button variant={"ghost"} className="p-0! cursor-pointer text-primary hover:bg-primary/10 hover:text-primary" onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "Collapse" : "Expand"}
              </Button>
            </div>
          )
        }
      </div>
    </div>
  );
}