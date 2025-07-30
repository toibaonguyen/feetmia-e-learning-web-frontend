
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import React from 'react'
import { Button } from '../../ui/button';
import { ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '../../ui/separator';
import { Category } from '@/types/category.type';
import { Skill } from '@/types/skill.type';
import { Role } from '@/types/role.type';
import { Skeleton } from '@/components/ui/skeleton';

interface ExplorerDropdownProps {
  isLoading: boolean;
  trendingCategories: Array<Category>;
  trendingSkills: Array<Skill>;
  trendingRoles: Array<Role>;
}

export default function ExplorerDropdown({ isLoading, trendingCategories, trendingSkills, trendingRoles }: ExplorerDropdownProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline" >Explore
          {" "}
          <ChevronDownIcon
            className="relative top-[1px] ml-1 size-4"
            aria-hidden="true"
          />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-screen">
        {isLoading ? (
          <div className='flex flex-col gap-y-2.5 items-center'>
            <Skeleton className='w-full h-10' />
            <Skeleton className='w-full h-10' />
            <Skeleton className='w-full h-10' />
            <Skeleton className='w-full h-10' />
          </div>
        ) : (
        <div className='flex flex-col gap-y-2.5 items-center'>
          <div className=' w-full flex flex-row h-fit gap-x-2.5 max-w-[90rem]'>
            <div className='h-full shrink-1 grow-1 w-1/3 p-4'>
              <p className='font-bold text-lg text-foreground mb-2.5'>Explore roles</p>
              {
                trendingRoles.map((role) => (
                  <Link key={role.id} href={role.url} className='block hover:underline text-base text-foreground my-1'>
                    {role.name}
                  </Link>
              ))}
            </div>
            <div className='h-full shrink-1 grow-1 w-1/3 p-4'>
              <p className='font-bold text-lg text-foreground mb-2.5'>Explore categories</p>
              {
                trendingCategories.map((category) => (
                  <Link key={category.id} href={category.url} className='block hover:underline text-base text-foreground my-1'>
                    {category.name}
                  </Link>
              ))}
            </div>
            <div className='h-full shrink-1 grow-1 w-1/3 p-4'>
              <p className='font-bold text-lg text-foreground mb-2.5'>Explore skills</p>
              {
                trendingSkills.map((skill) => (
                    <Link key={skill.id} href={skill.url} className='block hover:underline text-base text-foreground my-1'>
                    {skill.name}
                  </Link>
              ))} 
            </div>
          </div>
          <Separator className='max-w-[90rem]' />
          <a href='https://github.com/toibaonguyen' className='hover:underline text-red-800' target='_blank'>
            @Author (Toibaonguyen)
          </a>
        </div>
        )}
      </HoverCardContent>
    </HoverCard>
  )
}
