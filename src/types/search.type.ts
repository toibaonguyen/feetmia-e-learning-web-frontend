import { Response } from "@/models/response.model";

export interface SearchRecommendation {
    keyword: string;
    url: string;
}


export interface SearchSuggestionsResponse extends Response<string[]> {
}