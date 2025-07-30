import { Response } from "@/models/response.model"

export interface CartInfo {
    count: number;
};

export interface CartItem {
    id: string;
    courseId: string;
    title: string;
    instructorName: string;
    avgRating: number;
    totalRatings: number;
    basePrice: number;
    currentPrice: number;
    currency: string;
    thumbnailSrc: string;
}

export interface Cart {
    items: CartItem[];
    totalBasePrice: number;
    totalPrice: number;
    currency: string;
    totalCount: number;
    totalDiscountPercentage: string;
}


export interface CartResponse extends Response<Cart> {
}


