import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ReactNode, useState } from "react";

export default function ApplyCouponSection(): ReactNode {
    const [open, setOpen] = useState(false);
    return (
        <div className="w-full">

            <Separator
                orientation="horizontal"
                className="mb-4"
            />
            {
                !open ? (
                    <Button variant={"outline"} onClick={() => setOpen(!open)} className="w-full">Apply Coupon</Button>
                ) : (
                    <div className="w-full flex flex-row gap-2">
                        <Input type="text" placeholder="Enter coupon code" />
                        <Button className="text-accent">Apply</Button>
                    </div>
                )
            }

        </div>
    )
}