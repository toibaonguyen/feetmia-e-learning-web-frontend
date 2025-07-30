import { ReactNode } from "react";
import { CartItem as CartItemType } from "@/types/cart.type";
import { Button } from "@/components/ui/button";
import { Star, StarHalf } from "lucide-react";

interface CartItemProps {
    course: CartItemType;
    onDelete: () => Promise<void>;
    onCheckout: () => Promise<void>;
}

export default function CartItem({ course, onDelete, onCheckout }: CartItemProps): ReactNode {

    const fullStars = Math.floor(course.avgRating);
    const hasHalfStar = course.avgRating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return (
        <div className="w-full grid border-t py-4 grid-cols-[58px_1fr_1fr_138px] gap-y-2 xl:gap-y-0 lg:grid-cols-[130px_1fr_1fr_138px]">
            <div className="box-border w-[58px] lg:w-[130px]">
                <img src={course.thumbnailSrc} alt={course.title} className="w-12 h-12 lg:w-[120px] lg:h-[68px] object-cover" />
            </div>
            <div className="col-start-2 col-end-4 xl:col-end-3 row-start-1">
                <h1 className="text-lg font-bold">{course.title}</h1>
                <p className="hidden lg:block text-sm text-muted-foreground">{course.instructorName}</p>
            </div>
            <div className="row-start-2 col-start-2 col-end-4 xl:col-end-3 flex flex-row items-center md:flex-col md:items-start gap-0 xl:gap-1 xl:flex-row xl:items-center">
                <div className="flex flex-row gap-1 items-center">
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
                <div className="text-xs text-muted-foreground">
                    <span>({course.totalRatings} ratings)</span>
                </div>
            </div>
            <div className="flex flex-row xl:flex-col row-start-3 col-start-2 col-end-4 xl:row-start-1 xl:col-start-3">
                <Button variant="outline" onClick={onCheckout} className="xl:self-end text-primary hover:text-primary-foreground border-primary">
                    Checkout
                </Button>
                <Button variant="ghost" onClick={onDelete} className="xl:self-end text-destructive">
                    Delete
                </Button>
            </div>
            <div className="flex flex-col col-start-3 col-end-5 xl:col-start-4 row-start-1">
                <div className="flex flex-col items-end">
                    <p className="text-lg font-bold"><span>{course.currentPrice}</span> <span className="text-sm">{course.currency}</span></p>
                    <p className="text-sm text-muted-foreground line-through"><span>{course.basePrice}</span> <span className="text-xs">{course.currency}</span></p>
                </div>
            </div>
        </div>
    )
}