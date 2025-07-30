
import React from "react";
import InspireCarousel from "./_components/InspireCarousel";
import StudentViewingCoursesCarousel from "./_components/StudentViewingCoursesCarousel";
import UserFeedback from "./_components/UserFeedback";

export default function Home(): React.ReactNode {

  return (
    <div className="lg:mx-[11.75rem] flex flex-col gap-8">
      <div className="w-full">
        <InspireCarousel />
      </div>
      
      <div className="w-full">
        <StudentViewingCoursesCarousel />
      </div>

      <div className="w-full">
        <UserFeedback />
      </div>
    </div>
  )
}
