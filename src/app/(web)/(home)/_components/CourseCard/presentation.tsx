import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { CoursePreview } from "@/types/course.type";
import { Star, StarHalf } from "lucide-react";

interface CourseCardProps {
    course: CoursePreview;
    url: string;
    onAddToCart: () => Promise<void>;

}

export default function CourseCard({ course, url, onAddToCart }: CourseCardProps) {
    // Tính toán số sao đầy, nửa sao và sao trống
    const fullStars = Math.floor(course.avgRating);
    const hasHalfStar = course.avgRating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <a href={url} className="w-full h-full">
                    <Card className="gap-1.5 p-2 box-border flex flex-col">
                        <img src={course.thumbnailSrc} alt={course.title} className="max-h-[320px] rounded-xl border flex-1/2" />
                        <div className="flex-1/2">
                            <h1 className="text-lg font-bold overflow-hidden text-ellipsis whitespace-nowrap">{course.title}</h1>
                            <p className="text-sm text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap">{course.instructorName}</p>
                            <div className="flex flex-row gap-1 items-center">
                                <div className="p-0.5 px-1.5 text-xs flex flex-row gap-1 items-center">
                                    <span>{course.avgRating}</span>
                                    {/* Hiển thị sao đầy */}
                                    {Array.from({ length: fullStars }, (_, index) => (
                                        <Star className="text-yellow-500 fill-yellow-500 h-3 w-3 inline" key={`full-${index}`} />
                                    ))}
                                    {/* Hiển thị nửa sao nếu có */}
                                    {hasHalfStar && (
                                        <StarHalf className="text-yellow-500 fill-yellow-500 h-3 w-3 inline" />
                                    )}
                                    {/* Hiển thị sao trống */}
                                    {Array.from({ length: emptyStars }, (_, index) => (
                                        <Star className="text-muted-foreground h-3 w-3 inline" key={`empty-${index}`} />
                                    ))}
                                </div>
                                <div className="border p-0.5 px-1.5 text-xs overflow-hidden text-ellipsis whitespace-nowrap"><span >{course.totalRatings} ratings</span></div>
                            </div>
                            <div className="flex flex-row gap-1">
                                <p className="font-bold">{course.currentPrice} {course.currency}</p>
                                <p className="text-sm text-muted-foreground self-end line-through ">{course.basePrice} {course.currency}</p>
                            </div>
                        </div>
                    </Card>
                </a>
            </HoverCardTrigger>
            <HoverCardContent side="right" align="start">
                <div className="flex flex-col gap-2">
                    <h1 className="text-lg font-bold">{course.title}</h1>
                    <p className="text-sm text-accent-foreground">Last Updated: {course.lastUpdated}</p>
                    <p className="text-sm font-bold">Course Summary</p>
                    <ul className="flex flex-col gap-2 list-disc list-inside">
                        {course.summary.map((summary, index) => (
                            <li className="text-sm text-muted-foreground" key={index}>{summary}</li>
                        ))}
                    </ul>
                    {
                        !course.ownershipStatus.isAddedToCart && !course.ownershipStatus.isOwned &&
                        (
                            <Button variant="default" className="w-full text-accent cursor-pointer" onClick={onAddToCart}>
                                Add to Cart
                            </Button>
                        )
                    }

                </div>
            </HoverCardContent>
        </HoverCard>
    )
}