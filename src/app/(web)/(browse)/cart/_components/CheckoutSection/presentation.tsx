import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRightIcon } from "lucide-react";
import { ReactNode } from "react";

interface CheckoutSectionProps {
    onCheckout: () => Promise<void>;
}

export default function CheckoutSection({ onCheckout }: CheckoutSectionProps): ReactNode {



    return (
        <div className="w-full py-4">
            <Button onClick={onCheckout} className="w-full text-lg text-accent" size="lg">Proceed to checkout <ArrowRightIcon className="w-4 h-4" /></Button>
        </div>
    )
}