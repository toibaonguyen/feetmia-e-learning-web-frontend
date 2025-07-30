import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface FeedBackCardProps {
    content: string;
    authorName: string;
}

export default function FeedBackCard({ content, authorName }: FeedBackCardProps) {
    return (
        <Card className="flex flex-col gap-4">
            <CardContent>
                <Quote className="w-6 h-6 fill-primary text-primary" />
                <p className="mt-2.5 text-base">{content}</p>
                <p className="mt-4 text-sm text-muted-foreground italic">{authorName}</p>
            </CardContent>
        </Card>
    )
}