'use client'
import { Button } from "@/components/ui/button";
import useElementSize from "@/hooks/useElementSize";
import { Ref, useEffect, useState } from "react";

interface ExpandableDescriptionProps {
    description: string;
}

export default function ExpandableDescription({ description }: ExpandableDescriptionProps) {

    const INITIAL_HEIGHT = 146;

    const [isExpanded, setIsExpanded] = useState(false);
    const [isCollapsible, setIsCollapsible] = useState(false);
    const [ref, size] = useElementSize();

    useEffect(() => {
        setIsCollapsible(size.height > INITIAL_HEIGHT);
    }, [size]);

    return (
        <div>
            <p className="text-2xl font-bold mb-4">Description</p>
            <div className="flex flex-col gap-2" >
                <div ref={ref as Ref<HTMLDivElement>} className={`${!isCollapsible ? "" : (isExpanded ? "" : `max-h-[${INITIAL_HEIGHT}px] `)}overflow-hidden`}>
                    <p>{description}</p>
                </div>
                {
                    isCollapsible && (
                        <div>
                            <Button variant={"ghost"} className="p-0! cursor-pointer text-primary hover:bg-primary/10 hover:text-primary" onClick={() => setIsExpanded(!isExpanded)}>
                                {isExpanded ? "Collapse" : "Expand"}
                            </Button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}