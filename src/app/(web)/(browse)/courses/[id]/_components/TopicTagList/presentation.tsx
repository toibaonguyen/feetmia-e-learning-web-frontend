import { Category } from "@/types/category.type";
import { Role } from "@/types/role.type";
import { Skill } from "@/types/skill.type";
import TopicTag from "../TopicTag";


interface TopicTagListProps {
    skills: Skill[];
    categories: Category[];
    roles: Role[];
}

export default function TopicTagList({ skills, categories, roles }: TopicTagListProps) {
    return (
        <div className="w-full flex flex-col">
            <div className="w-full">
                <h1 className="text-2xl font-bold mb-4">Explore more related topics</h1>
            </div>
            <div className="box-border">
                <ul className="flex flex-row flex-wrap gap-4" >
                    {[...skills, ...categories, ...roles].map((topic) => (
                        <li key={topic.id}>
                            <TopicTag name={topic.name} url={topic.url} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}