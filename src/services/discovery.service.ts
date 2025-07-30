import instance from "@/models/axios-server.model";
import { DISCOVERY_API } from "@/constants/api.constant";
import { Category } from "@/types/category.type";
import { Skill } from "@/types/skill.type";
import { Role } from "@/types/role.type";
import { ExploreResponse } from "@/types/explore.type";
import { PATH_COURSES } from "@/constants/paths.constant";

export const GetDiscovery = async (): Promise<[Role[], Category[], Skill[]]> => {
    try {
        const response = await instance.get<ExploreResponse>(DISCOVERY_API.BASE_URL);
        if (response.data.isSuccess) {
            const data = response.data.data;
            const roles = data.roles.map((role) => ({
                id: role.id,
                name: role.name,
                url: `${PATH_COURSES.BASE_URL}?${PATH_COURSES.QUERY.role}=${role.name}`,
            }));
            const categories = data.categories.map((category) => ({
                id: category.id,
                name: category.name,
                url: `${PATH_COURSES.BASE_URL}?${PATH_COURSES.QUERY.category}=${category.name}`,
            }));
            const skills = data.skills.map((skill) => ({
                id: skill.id,
                name: skill.name,
                url: `${PATH_COURSES.BASE_URL}?${PATH_COURSES.QUERY.skill}=${skill.name}`,
            }));
            return [roles, categories, skills];
        }
        return [[], [], []];
    } catch (error) {
        return [[], [], []];
    }
}

