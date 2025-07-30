"use client"
import { CoursePreview } from "@/types/course.type";
import { useState, useEffect } from "react";
import StudentViewingCoursesCarousel from "./presentation";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/slices/cartSlice";
import { GetStudentViewingCourses } from "@/services/course.service";
import { CarouselApi } from "@/components/ui/carousel";

export default function StudentViewingCoursesCarouselContainer() {
  const dispatch = useAppDispatch();

  const [courses, setCourses] = useState<(CoursePreview & { addToCart: () => Promise<void> })[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [api, setApi] = useState<CarouselApi>();
  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true);
      const fetchedCourses = await GetStudentViewingCourses(page, 5);
      setCourses([...courses, ...fetchedCourses.map(course => ({
        ...course,
        addToCart: async () => {
          dispatch(addToCart(course.id));
        }
      }))]);
      setIsLoading(false);
    }
    fetchCourses();
  }, [page]);


  useEffect(() => {
    if (!api) return;

    api.on("settle", () => {
      console.log("isLoading", isLoading)
      setIsLoading(loading => !loading);
    })


  }, [api]);
  return (
    <StudentViewingCoursesCarousel isLoading={isLoading} courses={courses} setApi={setApi} />
  )
}