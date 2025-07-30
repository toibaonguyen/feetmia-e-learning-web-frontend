
import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";

interface PriceSummaryProps {
    totalDiscountPercentage?: string;
    totalPrice: number;
    totalBasePrice?: number;
    currency: string;
}

export default function PriceSummary({ totalDiscountPercentage, totalPrice, totalBasePrice, currency }: PriceSummaryProps): ReactNode {
    return (
        <div>
            <h1 className="text-xl font-bold text-muted-foreground">Total Price:</h1>
            <p className="text-2xl font-bold">{totalPrice} <span className="text-xl">{currency}</span></p>
            <div className="flex flex-row gap-1 items-center">
                {totalBasePrice && <p className="text-sm text-muted-foreground line-through">{totalBasePrice} <span className="text-xs">{currency}</span></p>}
                {totalDiscountPercentage && <Badge  className="text-xs text-accent">-{totalDiscountPercentage}%</Badge>}
            </div>
        </div>
    )
}