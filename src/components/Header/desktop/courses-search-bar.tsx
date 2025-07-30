'use client';

import { Search } from "lucide-react";
import { ChangeEvent, useState } from 'react';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';
import Link from "next/link";
import { SearchRecommendation } from "@/types/search.type";

interface CoursesSearchBarProps {
    searchKeyword: string;
    onSearch?: () => void;
    searchRecommendations?: Array<SearchRecommendation>;
    onSearchKeywordChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function CoursesSearchBar({ searchKeyword, onSearch, searchRecommendations, onSearchKeywordChange }: CoursesSearchBarProps) {
    
    const [isOpen, setIsOpen] = useState(false);
    const [searchKeywordState, setSearchKeywordState] = useState(searchKeyword);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchKeywordState(value);
        onSearchKeywordChange(e);
    };

    const handleSearch = () => {
        onSearch?.();
    };

    return (
        <div className='flex flex-col w-full relative'>
            <div className='flex flex-row items-center w-full peer'>
                <div className='w-full relative flex flex-row items-center'>
                    <input
                        className='h-11 py-2 px-4 w-full min-w-80 border rounded-3xl box-border'
                        placeholder="What do you want to learn?"
                        value={searchKeywordState}
                        onChange={handleInputChange}
                    />
                    <Button variant={"default"} className='rounded-full absolute right-2 z-10 cursor-pointer' onClick={handleSearch}>
                        <Search className='h-4 w-4 text-secondary' />
                    </Button>
                </div>
            </div>
            {searchRecommendations && searchRecommendations.length > 0 && (
                <Card className='hidden peer-focus-within:flex hover:flex focus-within:flex w-full absolute top-[calc(100%+0.5rem)] z-10 rounded-none py-1! '>
                    <CardContent className="px-0!">
                        <ul className='flex flex-col'>
                            {searchRecommendations?.map((recommendation) => (
                                <li key={recommendation.keyword} className="w-full">
                                    <Link href={recommendation.url} className="block w-full text-left p-2 hover:bg-muted hover">
                                        <Search className="mr-2 h-4 w-4 inline my-auto" />
                                        <span className="text-foreground my-auto">{recommendation.keyword}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </CardContent>

                </Card>
            )}
        </div>
    );
}
