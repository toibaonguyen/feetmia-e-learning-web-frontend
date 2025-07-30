import { useAppDispatch } from "@/redux/hooks";
import { fetchCart } from "@/redux/slices/cartSlice";
import { fetchUser } from "@/redux/slices/userSlice";
import { useEffect } from "react";

export default function useFetchGlobalData() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchUser())
        dispatch(fetchCart())
    }, [])
}