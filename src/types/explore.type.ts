import { BriefCategory } from "./category.type";
import { BriefRole } from "./role.type";
import { BriefSkill } from "./skill.type";
import { Response } from "@/models/response.model";


export interface Explore {
    categories: BriefCategory[];
    skills: BriefSkill[];
    roles: BriefRole[];
}



export interface ExploreResponse extends Response<Explore> {
}
