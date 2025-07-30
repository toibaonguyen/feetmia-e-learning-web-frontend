import { AUTH_API } from "@/constants/api.constant";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constants/storage.constants";
import instance from "@/models/axios-client.model";
import { AuthTokens, AuthTokensResponse } from "@/types/auth.type";

export const RefreshTokens = async (): Promise<AuthTokens | null> => {
    try {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
        if (!refreshToken) {
            return null;
        }
        const response = await instance.post<AuthTokensResponse>(AUTH_API.BASE_URL + AUTH_API.SUB_URL.REFRESH, {
            refreshToken: refreshToken,
        });
        if (response.data.isSuccess) {
            return response.data.data;
        }
        return null;
    } catch (error) {
        return null;
    }
}
