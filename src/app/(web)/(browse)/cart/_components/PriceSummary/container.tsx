import { ReactNode } from "react";
import PriceSummary from "./presentation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function PriceSummaryContainer(): ReactNode {

    const { totalDiscountPercentage, totalPrice, totalBasePrice, currency } = useSelector((state: RootState) => {
        return {
            totalDiscountPercentage: state.cart.data?.totalDiscountPercentage,
            totalPrice: state.cart.data?.totalPrice,
            totalBasePrice: state.cart.data?.totalBasePrice,
            currency: state.cart.data?.currency,
        }
    });

    return (
        <PriceSummary totalDiscountPercentage={totalDiscountPercentage} totalPrice={totalPrice || 0} totalBasePrice={totalBasePrice} currency={currency || ""} />
    )
}