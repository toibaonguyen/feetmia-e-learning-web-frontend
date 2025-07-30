import { COURSES_API } from "@/constants/api.constant";
import { PATH_COURSES } from "@/constants/paths.constant";
import instance from "@/models/axios-client.model";
import { SearchRecommendation, SearchSuggestionsResponse } from "@/types/search.type";

export const GetSearchSuggestions = async (keyword: string): Promise<SearchRecommendation[]> => {
    try {
        const response = await instance.get(COURSES_API.BASE_URL + COURSES_API.SUB_URL.SEARCH_SUGGESTIONS.BASE_URL,
            {
                params: {
                    [COURSES_API.SUB_URL.SEARCH_SUGGESTIONS.QUERY.keyword]: keyword,
                },
            });
        const data = response.data as SearchSuggestionsResponse;
        return data.data.map((item: string) => ({
            keyword: item,
            url: `${PATH_COURSES.BASE_URL}?${PATH_COURSES.QUERY.search}=${item}`,
        }));
    } catch (error) {
        console.error(error);
        return [];
    }
}