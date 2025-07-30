import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { CoursePreview } from "@/types/course.type";
import CourseCard from "../CourseCard";
import CourseCardSkeleton from "../CourseCardSkeleton";

interface StudentViewingCoursesCarouselProps {
  courses: (CoursePreview & { addToCart: () => Promise<void> })[];
  setApi: (api: CarouselApi) => void;
  isLoading: boolean;
}
// sm:max-w-[318px] md:max-w-[300px] lg:max-w-[276px] xl:max-w-[245.59]
export default function StudentViewingCoursesCarousel({ courses, setApi, isLoading }: StudentViewingCoursesCarouselProps) {

  return (
    <div className="flex flex-col w-full p-4 gap-5">
      <h1 className="text-l md:text-2xl font-bold">Currently Viewed by Students</h1>
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent className="p-6 ">
          {courses.map((course) => (
            <CarouselItem key={course.id} className="h-full basis-2/3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <CourseCard course={course} url={`/courses/${course.id}`} onAddToCart={course.addToCart} />
            </CarouselItem>
          ))}
          {
            (isLoading && courses.length === 0) && Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-2/3 h-fit sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <CourseCardSkeleton />
              </CarouselItem>
            ))
          }
          {
            (isLoading && courses.length > 0) && (
              <CarouselItem className="basis-2/3 h-fit sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <CourseCardSkeleton />
              </CarouselItem>
            )
          }
        </CarouselContent>
      </Carousel>
    </div >
  )
}