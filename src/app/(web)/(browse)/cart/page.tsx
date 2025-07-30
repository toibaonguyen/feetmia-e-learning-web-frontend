'use client'
import { RootState } from "@/redux/store"
import { Loader2 } from "lucide-react"
import { useSelector } from "react-redux"
import ApplyCouponSection from "./_components/ApplyCouponSection"
import CartItemList from "./_components/CartItemList"
import CheckoutSection from "./_components/CheckoutSection"
import PriceSummary from "./_components/PriceSummary"

export default function Cart(): React.ReactNode {
  const isLoading = useSelector((state: RootState) => state.cart.isLoading);

  return (
    <div className="
    relative
    flex flex-col gap-y-8
    xl:mx-[11.75rem] p-8
    md:grid md:p-10 md:gap-x-8 md:grid-cols-[auto_300px]">
      <div className="md:col-span-full pb-8">
        <h1 className="hidden md:block text-5xl font-bold">Cart</h1>
      </div>
      {
        isLoading ? (
          <div className="flex justify-center items-center h-full md:col-span-full">
            <Loader2 className="w-10 h-10 animate-spin" />
          </div>
        ) : (
          <>
            <div className="order-3 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-6">
              <CartItemList />
            </div>
            <div className="order-1 md:row-start-2 md:col-start-2 md:col-end-3">
              <PriceSummary />
            </div>
            <div className="order-4 md:static md:row-start-3 md:col-start-2 md:col-end-3">
              <CheckoutSection />
            </div>
            <div className="order-2 md:row-start-4 md:col-start-2 md:col-end-3">
              <ApplyCouponSection />
            </div>
          </>)
      }
    </div>
  )
}
