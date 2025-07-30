import { Skeleton } from "@/components/ui/skeleton";

export default function CourseCardSkeleton() {
    return (
        <div className="w-full h-full flex flex-col gap-4 p-2">
            <Skeleton className="h-4" />
            <Skeleton className="h-4" />
            <Skeleton className="h-4" />
            <Skeleton className="h-4" />
            <Skeleton className="h-4" />
        </div>
    )
}