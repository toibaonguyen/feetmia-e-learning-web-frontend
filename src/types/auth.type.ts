import { Response } from "@/models/response.model";
export interface AuthTokens{
    accessToken: string;
    refreshToken: string;
}

export interface AuthTokensResponse extends Response<AuthTokens>{
}