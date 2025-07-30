"use client"
import { Category } from "@/types/category.type";
import { Role } from "@/types/role.type";
import { SearchRecommendation } from "@/types/search.type";
import { Skill } from "@/types/skill.type";
import { UserPreview } from "@/types/user.type";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import Logo from "../Logo";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import CoursesSearchBar from "./desktop/courses-search-bar";
import ExplorerDropdown from "./desktop/explore-dropdown";
import NotificationsDropdown from "./desktop/notifications-dropdown";
import UserMenuDropDown from "./desktop/user-menu-dropdown";
import MobileCoursesSearchOverlay from "./mobile/mobile-courses-search-overlay";
import MobileMenu from "./mobile/mobile-menu";


interface HeaderProps {
  logo: {
    src: string;
    homeUrl: string;
  };

  explore: {
    isLoading: boolean;
    trendingCategories: Array<Category>;
    trendingSkills: Array<Skill>;
    trendingRoles: Array<Role>;
  };

  search: {
    searchKeyword: string;
    onSearch?: () => void;
    searchRecommendations?: Array<SearchRecommendation>;
    onSearchKeywordChange: (e: ChangeEvent<HTMLInputElement>) => void | Promise<void>;
  }

  user: UserPreview | null

  userMenu: {
    profileUrl: string;
    purchasesHistoryUrl: string;
    settingsUrl: string;
    onLogout: () => Promise<void>;
  }

  cart: {
    isLoading: boolean;
    count: number;
    url: string;
  }

  notifications: {
    notifications: Array<{
      id: string;
      avatarSrc?: string;
      authorName: string;
      message: string;
      read: boolean;
      createdAt: Date;
      onClick?: () => void;
    }>;
    onMarkAsReadAll: () => void;
    url: string;
  }

  auth: {
    isLoading: boolean;
    signUpUrl: string;
    loginUrl: string;
  }
}


export default function Header({ logo, explore, search, user, userMenu, cart, notifications, auth }: HeaderProps) {

  return (
    <header className="w-full py-[10px] border-b bg-primary-foreground shadow-xl">
      <div className='flex justify-items-center items-center pr-4 pl-4 lg:pr-12 lg:pl-12 box-border mr-auto ml-auto'>
        <div className='basis-7/12 flex flex-row my-auto '>
          <div className='shrink-0 p-2 lg:hidden'>
            <MobileMenu
              isLoading={explore.isLoading || auth.isLoading || cart.isLoading}
              logo={logo}
              explore={explore}
              user={user}
              userMenu={userMenu}
              auth={auth}
            />
          </div>
          <div className='p-2 box-border shrink-0'>
            <Logo src={logo.src} href={logo.homeUrl} />
          </div>
          <div className='p-2 hidden lg:block my-auto'>
            <ExplorerDropdown
              isLoading={explore.isLoading}
              trendingCategories={explore.trendingCategories}
              trendingSkills={explore.trendingSkills}
              trendingRoles={explore.trendingRoles}
            />
          </div>
          <div className="p-2 hidden lg:block grow">
            <CoursesSearchBar
              searchKeyword={search.searchKeyword}
              onSearch={search.onSearch}
              searchRecommendations={search.searchRecommendations}
              onSearchKeywordChange={search.onSearchKeywordChange}
            />
          </div>
        </div>
        <div className='basis-5/12 flex grow flex-row-reverse items-center gap-x-2'>

          <div className="lg:hidden order-5">
            <MobileCoursesSearchOverlay
              searchKeyword={search.searchKeyword}
              onSearch={search.onSearch}
              searchRecommendations={search.searchRecommendations}
              onSearchKeywordChange={search.onSearchKeywordChange}
            />
          </div>
          {
            user && (
              cart.isLoading ? (
                <div className="order-4">
                  <ShoppingCart className="h-5 w-5" />
                </div>
              ) : (
                <div className="order-4">
                  <Link href={cart.url}>
                    <Button variant="ghost" className="relative cursor-pointer">
                      <ShoppingCart className="h-5 w-5" />
                      {cart.count > 0 && (
                        <Badge variant="outline" className="absolute bottom-[50%] left-[50%] bg-primary text-secondary text-xs font-bold h-5 w-5 rounded-full px-1 font-mono tabular-nums">
                          {cart.count}
                        </Badge>
                      )}
                    </Button>
                  </Link>
                </div>
              )
            )
          }
          {
            user && (
              <div className="order-3">
                <NotificationsDropdown
                  notifications={notifications.notifications}
                  onMarkAsReadAll={notifications.onMarkAsReadAll}
                  notificationsUrl={notifications.url}
                />
              </div>
            )
          }

          {
            auth.isLoading ? (
              <div className="hidden lg:block order-2">
                <Skeleton className="relative flex size-8 shrink-0 overflow-hidden rounded-full" />
              </div>
            ) : (
              user ? (
                <div className="hidden lg:block order-2">
                  <UserMenuDropDown
                    user={user}
                    profileUrl={userMenu.profileUrl}
                    purchasesHistoryUrl={userMenu.purchasesHistoryUrl}
                    settingsUrl={userMenu.settingsUrl}
                    onLogout={userMenu.onLogout}
                  />
                </div>
              ) : (
                <div className="hidden lg:flex lg:flex-row order-1 gap-x-2">
                  <Button variant="link" className="cursor-pointer text-primary" asChild>
                    <Link href={auth.loginUrl}>Log In</Link>
                  </Button>
                  <Button variant="outline" className="cursor-pointer text-primary border-primary bg-muted " asChild>
                    <Link href={auth.signUpUrl}>Join for free</Link>
                  </Button>
                </div>
              ))
          }
        </div>
      </div>
    </header>
  )
}
