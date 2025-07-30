import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PriceSummary } from "@/types/course.type";

interface CoursePurchaseCardProps {
    thumbnailSrc: string;
    priceSummary: PriceSummary;
    couponCode: string;
    setCouponCode: (couponCode: string) => void;
    addToCart: () => Promise<void>;
    proceedToCheckout: () => Promise<void>;
    applyCouponCode: () => Promise<void>;
}

export default function CoursePurchaseCard({ thumbnailSrc, priceSummary, addToCart, proceedToCheckout, applyCouponCode, couponCode, setCouponCode }: CoursePurchaseCardProps) {
    return (
        <div>
            <img src={thumbnailSrc} className="w-full object-cover" />
            <div className="flex flex-col p-6 gap-2">
                <p><span className="text-2xl font-bold">{priceSummary.currentPrice}</span> <span>{priceSummary.currency}</span></p>
                <Button className="w-full text-[1rem] text-muted h-12" onClick={addToCart}>
                    Add to cart
                </Button>
                <Button variant={"outline"} className="w-full text-[1rem] h-12" onClick={proceedToCheckout}>
                    Proceed to checkout
                </Button>
                <div className="flex flex-col gap-2 items-center">
                    <p className="text-sm font-bold">Apply coupon code</p>
                    <div className="flex flex-row gap-2">
                        <Input type="text" placeholder="Enter coupon code" className="text-[1rem] h-10" value={couponCode} onChange={(e) => {
                            e.preventDefault();
                            setCouponCode(e.target.value)
                        }} />
                        <Button className="px-3 text-[1rem] h-10 text-muted" onClick={applyCouponCode}>
                            Apply
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}