'use client'
import { useState } from "react";
import CoursePurchaseCard from "./presentation";
import { PriceSummary } from "@/types/course.type";

interface CoursePurchaseCardContainerProps {
    courseId: string;
    thumbnailSrc: string;
    priceSummary: PriceSummary;
}

export default function CoursePurchaseCardContainer({ courseId, thumbnailSrc, priceSummary }: CoursePurchaseCardContainerProps) {
    const [couponCode, setCouponCode] = useState("");

    const addToCart = async () => {
        console.log("addToCart");
    }

    const proceedToCheckout = async () => {
        console.log("proceedToCheckout");
    }

    const applyCouponCode = async () => {
        console.log("applyCouponCode");
    }

    return (
        <CoursePurchaseCard thumbnailSrc={thumbnailSrc} priceSummary={priceSummary} addToCart={addToCart} proceedToCheckout={proceedToCheckout} applyCouponCode={applyCouponCode} couponCode={couponCode} setCouponCode={setCouponCode} />
    )
}