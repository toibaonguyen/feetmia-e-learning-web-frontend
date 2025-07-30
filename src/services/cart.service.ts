import { CART_API } from "@/constants/api.constant"
import instance from "@/models/axios-client.model"
import { Cart, CartResponse } from "@/types/cart.type"


export const GetCart = async (): Promise<Cart | null> => {
    try {
        const response = await instance.get<CartResponse>(CART_API.BASE_URL)
        if (response.data.isSuccess) {
            return response.data.data
        }
        throw null;
    } catch (error) {
        console.log(error)
        throw error;
    }

}


export const AddToCart = async (courseId: string): Promise<Cart> => {
    try {
        const response = await instance.post<CartResponse>(CART_API.BASE_URL, {
            courseId: courseId
        })
        if (response.data.isSuccess) {
            return response.data.data;
        }
        throw new Error("Failed to add to cart");
    } catch (error) {
        console.log(error)
        throw error;
    }
}
