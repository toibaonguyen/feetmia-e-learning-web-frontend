import { ReactNode } from "react";
import { Cart } from "@/types/cart.type";
import { Separator } from "@/components/ui/separator";
import CartItem from "../CartItem";

interface CartItemListProps {
    data: Cart | null;
    isLoading: boolean;
}

export default function CartItemList({ data, isLoading }: CartItemListProps): ReactNode {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="font-bold">You have {data?.totalCount} courses in your cart</h1>
            <div className="flex flex-col gap-4">
                {data?.items.map((item) => (
                    <CartItem key={item.id} course={item} onDelete={async () => {}} onCheckout={async () => {}} />
                ))}
            </div>
        </div>
    )
}