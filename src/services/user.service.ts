import { USER_API } from "@/constants/api.constant";
import instance from "@/models/axios-client.model";
import { User, UserResponse } from "@/types/user.type";


export const GetUser = async (): Promise<User | null> => {
    try {
        const response = await instance.get<UserResponse>(USER_API.BASE_URL + USER_API.SUB_URL.ME, {
        });
        if (response.data.isSuccess) {
            return response.data.data;
        }
        return null;
    } catch (error) {
        throw error;
    }
}

