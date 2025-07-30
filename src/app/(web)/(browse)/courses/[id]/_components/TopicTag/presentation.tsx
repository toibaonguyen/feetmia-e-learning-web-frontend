import { Button } from "@/components/ui/button";
import { Category } from "@/types/category.type";
import { Role } from "@/types/role.type";
import { Skill } from "@/types/skill.type";

interface TopicTagProps {
    name: string;
    url: string;
}

export default function TopicTag({  name, url }: TopicTagProps) {
    return (
        <Button variant="outline" asChild>
            <a href={url}>{name}</a>
        </Button>
    )
}