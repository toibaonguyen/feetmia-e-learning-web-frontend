"use client"
import { URL_LOGO } from '@/constants/assets.constant';
import { PATH_CART, PATH_HOME, PATH_LOG_IN, PATH_NOTIFICATIONS, PATH_PROFILE, PATH_PURCHASES_HISTORY, PATH_SETTINGS, PATH_SIGN_UP } from '@/constants/paths.constant';
import { useAppSelector } from '@/redux/hooks';
import { GetSearchSuggestions } from '@/services/search.service';
import { Category } from '@/types/category.type';
import { Role } from '@/types/role.type';
import { SearchRecommendation } from '@/types/search.type';
import { Skill } from '@/types/skill.type';
import { UserPreview } from '@/types/user.type';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import Header from './presentation';
import { GetDiscovery } from '@/services/discovery.service';
import useFetchGlobalData from '@/hooks/useFetchGlobalData.hook';


export default function HeaderContainer() {
    // Fetch global data
    useFetchGlobalData()

    useEffect(() => {
        setIsFetchingExplore(true);
        const fetchExplore = async () => {
            const [trendingRoles, trendingCategories, trendingSkills] = await GetDiscovery();
            setTrendingCategories(trendingCategories);
            setTrendingSkills(trendingSkills);
            setTrendingRoles(trendingRoles);
            setIsFetchingExplore(false);
        }
        fetchExplore();
    }, []);

    const user: {
        isLoading: boolean;
        data: UserPreview | null;
    } = useAppSelector(state => {
        if (state.user.data === null) {
            return {
                isLoading: state.user.isLoading,
                data: null
            }
        }
        return {
            isLoading: state.user.isLoading,
            data: {
                name: state.user.data.name,
                avatarSrc: state.user.data.avatarSrc,
            }
        }
    });

    const cart: {
        isLoading: boolean;
        count: number;
    } = useAppSelector(state => {
        if (state.cart.data === null) {
            return {
                isLoading: state.cart.isLoading,
                count: 0
            }
        }
        return {
            isLoading: state.cart.isLoading,
            count: state.cart.data.totalCount
        }
    });
    const [trendingCategories, setTrendingCategories] = useState<Category[]>([]);
    const [trendingSkills, setTrendingSkills] = useState<Skill[]>([]);
    const [trendingRoles, setTrendingRoles] = useState<Role[]>([]);
    const DEBOUNCE_DELAY_MS = 500;
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [searchRecommendations, setSearchRecommendations] = useState<SearchRecommendation[]>([]);
    const [isFetchingExplore, setIsFetchingExplore] = useState<boolean>(false);
    const searchRecommendationsTimeoutId = useRef<NodeJS.Timeout | null>(null);
    const onSearchKeywordChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const keyword = e.target.value;
        setSearchKeyword(keyword);
        if (searchRecommendationsTimeoutId.current) {
            clearTimeout(searchRecommendationsTimeoutId.current);
        }
        searchRecommendationsTimeoutId.current = setTimeout(async () => {
            const recommendations = await GetSearchSuggestions(keyword);
            setSearchRecommendations(recommendations);
        }, DEBOUNCE_DELAY_MS);
    }



    const onSearch = () => {
    }


    return (
        <Header
            logo={{
                src: URL_LOGO,
                homeUrl: PATH_HOME
            }}
            explore={{
                isLoading: isFetchingExplore,
                trendingCategories: trendingCategories,
                trendingSkills: trendingSkills,
                trendingRoles: trendingRoles
            }}
            search={{
                searchKeyword: searchKeyword,
                onSearch: onSearch,
                onSearchKeywordChange: onSearchKeywordChange,
                searchRecommendations: searchRecommendations
            }}
            user={user.data}
            userMenu={{
                profileUrl: PATH_PROFILE,
                purchasesHistoryUrl: PATH_PURCHASES_HISTORY,
                settingsUrl: PATH_SETTINGS,
                onLogout: async () => { }
            }}
            cart={{
                isLoading: cart.isLoading,
                count: cart.count,
                url: PATH_CART
            }}
            notifications={{
                notifications: [],
                onMarkAsReadAll: () => { },
                url: PATH_NOTIFICATIONS
            }}
            auth={{
                isLoading: user.isLoading,
                signUpUrl: PATH_SIGN_UP,
                loginUrl: PATH_LOG_IN
            }} />
    )
}
