"use client"

import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../../ui/sheet'
import { Button } from '../../ui/button'
import { Menu } from 'lucide-react'
import { Separator } from '../../ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { ChangeEvent, useState } from 'react'
import Logo from '@/components/Logo'
import Link from 'next/link'
import { Category } from '@/types/category.type'
import { Skill } from '@/types/skill.type'
import { Role } from '@/types/role.type'
import { UserPreview } from '@/types/user.type'

type MenuScreen = "main" | "roles" | "categories" | "skills";

interface MobileMenuProps {

    isLoading: boolean;


    logo: {
        src: string;
        homeUrl: string;
    };

    explore: {
        trendingCategories: Array<Category>;
        trendingSkills: Array<Skill>;
        trendingRoles: Array<Role>;
    };

    user: UserPreview | null;

    userMenu: {
        profileUrl: string;
        purchasesHistoryUrl: string;
        settingsUrl: string;
        onLogout: () => Promise<void>;
    }

    auth: {
        isLoading: boolean;
        signUpUrl: string;
        loginUrl: string;
    }


}

export default function MobileMenu({
    isLoading,
    logo,
    explore,
    user,
    userMenu,
    auth
}: MobileMenuProps) {
    if (isLoading) {
        return (
            <></>
        )
    }
    const { src: logoSrc, homeUrl } = logo;
    const { trendingCategories, trendingSkills, trendingRoles } = explore;
    const { profileUrl, purchasesHistoryUrl, settingsUrl, onLogout } = userMenu;
    const { signUpUrl, loginUrl } = auth;
    const [menuPage, setMenuPage] = useState<MenuScreen>("main");
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" className="cursor-pointer relative">
                    <Menu className="h-5 w-5" />
                </Button>
            </SheetTrigger>
            <SheetContent className='w-screen max-w-screen! overflow-y-scroll' side='left'>
                <SheetHeader className='items-center'>
                    <Logo src={logoSrc} href={homeUrl} />
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                </SheetHeader>
                <Separator className='mb-0!' />
                {
                    menuPage == "main" && (
                        <>
                            <div className='flex flex-col px-4'>
                                {
                                    user && !auth.isLoading && (
                                        <>
                                            <div className='flex flex-row p-2 items-center justify-evenly mb-2'>
                                                <div className='flex flex-row items-center gap-2'>
                                                    <Avatar className='h-9 w-9'>
                                                        <AvatarImage src={user.avatarSrc} />
                                                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                                    </Avatar>
                                                    <span className='font-bold text-xl'>
                                                        {
                                                            user?.name
                                                        }
                                                    </span>
                                                </div>
                                                <div className='grow flex flex-row justify-end'>
                                                    <ChevronRight className='w-2.5 h-2.5' />
                                                </div>
                                            </div>
                                            <Separator className='mb-2' />

                                            <div className='flex flex-row px-2 py-1 items-center justify-evenly mb-2'>
                                                <div className='flex flex-row items-center gap-2 w-full'>
                                                    My Learning
                                                </div>
                                            </div>
                                            <Separator className='mb-2' />
                                        </>
                                    )
                                }

                                <div className='flex flex-row px-2 py-1 items-center justify-evenly mb-2 cursor-pointer' onClick={() => setMenuPage("roles")}>
                                    <div className='flex flex-row items-center gap-2 w-full'>
                                        Explore roles
                                    </div>
                                    <div className='grow flex flex-row justify-end'>
                                        <ChevronRight className='w-2.5 h-2.5' />
                                    </div>
                                </div>
                                <Separator className='mb-2' />

                                <div className='flex flex-row px-2 py-1 items-center justify-evenly mb-2 cursor-pointer' onClick={() => { setMenuPage("categories") }}>
                                    <div className='flex flex-row items-center gap-2 w-full'>
                                        Explore categories
                                    </div>
                                    <div className='grow flex flex-row justify-end'>
                                        <ChevronRight className='w-2.5 h-2.5' />
                                    </div>
                                </div>
                                <Separator className='mb-2' />

                                <div className='flex flex-row px-2 py-1 items-center justify-evenly mb-2 cursor-pointer' onClick={() => { setMenuPage("skills") }}>
                                    <div className='flex flex-row items-center gap-2 w-full'>
                                        Trending skills
                                    </div>
                                    <div className='grow flex flex-row justify-end'>
                                        <ChevronRight className='w-2.5 h-2.5' />
                                    </div>
                                </div>
                                <Separator className='mb-2' />
                            </div>
                            {
                                !user && (
                                    <SheetFooter>
                                        <div className="flex gap-2 w-full flex-col">
                                            <Button variant="outline" className="flex-1" asChild>
                                                <Link href={signUpUrl}>Join for free</Link>
                                            </Button>
                                            <Button className="flex-1" asChild>
                                                <Link href={loginUrl}>Login</Link>
                                            </Button>
                                        </div>
                                    </SheetFooter>)
                            }</>)
                }
                {
                    menuPage == "roles"
                    && (
                        <>
                            <div className='py-4 px-1.5 bg-muted flex items-center gap-2 cursor-pointer' onClick={() => setMenuPage("main")}>
                                <ChevronLeft className='h-6 w-6' /> <span>Main Menu</span>
                            </div>
                            <div className='flex flex-col px-4'>
                                <p className='w-full font-bold mb-3'>
                                    Explore Roles
                                </p>
                                <ul>
                                    {
                                        trendingRoles.map(
                                            (r: { id: string; name: string; url: string }) => (
                                                <li key={r.id}>
                                                    <a className='hover:underline' href={r.url}>{r.name}</a>
                                                </li>
                                            )
                                        )
                                    }
                                </ul>
                            </div>
                        </>
                    )
                }
                {
                    menuPage == "categories" && (
                        <>
                            <div className='py-4 px-1.5 bg-muted flex items-center gap-2 cursor-pointer' onClick={() => setMenuPage("main")}>
                                <ChevronLeft className='h-6 w-6' /> <span>Main Menu</span>
                            </div>
                            <div className='flex flex-col px-4'>
                                <p className='w-full font-bold mb-3'>
                                    Explore Categories
                                </p>
                                <ul>
                                    {
                                        trendingCategories.map(
                                            (c: { id: string; name: string; url: string }) => (
                                                <li key={c.id}>
                                                    <a className='hover:underline' href={c.url}>{c.name}</a>
                                                </li>
                                            )
                                        )
                                    }
                                </ul>
                            </div>
                        </>
                    )
                }
                {
                    menuPage == "skills" && (
                        <>
                            <div className='py-4 px-1.5 bg-muted flex items-center gap-2 cursor-pointer' onClick={() => setMenuPage("main")}>
                                <ChevronLeft className='h-6 w-6' /> <span>Main Menu</span>
                            </div>
                            <div className='flex flex-col px-4'>
                                <p className='w-full font-bold mb-3'>
                                    Explore Skills
                                </p>
                                <ul>
                                    {
                                        trendingSkills.map(
                                            (s: { id: string; name: string; url: string }) => (
                                                <li key={s.id}>
                                                    <a className='hover:underline' href={s.url}>{s.name}</a>
                                                </li>
                                            )
                                        )
                                    }
                                </ul>
                            </div>
                        </>
                    )
                }
            </SheetContent>
        </Sheet>
    )
}
