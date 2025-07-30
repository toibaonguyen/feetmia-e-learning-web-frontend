import { LearningOutcome } from "@/types/course.type";

interface TargetLearningOutcomesListProps {
    learningOutcomes: LearningOutcome[];
}

export default function TargetLearningOutcomesList({ learningOutcomes }: TargetLearningOutcomesListProps) {
    
    return (
        <div className="w-full flex flex-col border items-center py-6" >
            <div className="w-full">
                <h1 className="text-2xl font-bold mx-6 mb-4">Objectives</h1>
            </div>
            <div className="box-border w-[650px] ">
                <ul className="flex flex-row justify-between gap-2 flex-wrap" >
                    {learningOutcomes.map((learningOutcome) => (
                        <li className="before:content-['✓'] before:mr-2 w-[calc(50%-(1rem))]" key={learningOutcome.id}>
                            {learningOutcome.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}