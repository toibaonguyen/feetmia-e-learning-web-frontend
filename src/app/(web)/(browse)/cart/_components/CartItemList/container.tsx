import { ReactNode } from "react";
import CartItemList from "./presentation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function CartItemListContainer(): ReactNode {

    const { data, isLoading } = useSelector((state: RootState) => state.cart);

    
    return (
        <CartItemList data={data} isLoading={isLoading} />
    )
}