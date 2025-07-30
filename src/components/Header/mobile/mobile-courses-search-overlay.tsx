'use client';

import { Search } from 'lucide-react';
import Link from 'next/link';
import { ChangeEvent } from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../../ui/sheet';
import { SearchRecommendation } from '@/types/search.type';

interface MobileCoursesSearchOverlayProps {
    searchKeyword: string;
    onSearch?: () => void;
    searchRecommendations?: Array<SearchRecommendation>;
    onSearchKeywordChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function MobileCoursesSearchOverlay({ searchKeyword, onSearch, searchRecommendations, onSearchKeywordChange }: MobileCoursesSearchOverlayProps) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size={"icon"}>
                    <Search className="h-5 w-5" />
                </Button>
            </SheetTrigger>
            <SheetContent side={"top"} className="h-screen">
                <SheetHeader>
                    <SheetTitle className="sr-only">
                        Courses Search Overlay
                    </SheetTitle>
                </SheetHeader>

                <div className="flex w-full items-center gap-2 p-4">
                    <Input type="text" placeholder="What do you want to learn?" value={searchKeyword} onChange={onSearchKeywordChange} />
                    <Button  onClick={onSearch} className='cursor-pointer bg-primary'>
                        <Search className="h-5 w-5" />
                    </Button>
                </div>
                <div className="flex flex-col w-full items-center gap-y-1 p-4">
                    <ul className='w-full'>
                        {
                            searchRecommendations?.map((recommendation) => (
                                <li key={recommendation.keyword} className="w-full">
                                    <Link href={recommendation.url} className="block w-full text-left p-2 hover:bg-muted rounded ">
                                        <Search className="mr-2 h-4 w-4 inline my-auto" />
                                        <span className="text-foreground my-auto">{recommendation.keyword}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
    )
}
