import { ReactNode } from "react";
import CheckoutSection from "./presentation";

export default function CheckoutSectionContainer(): ReactNode {

    const onCheckout = async () => {
        console.log("Checkout");
    }

    return (
        <CheckoutSection onCheckout={onCheckout} />
    )
}