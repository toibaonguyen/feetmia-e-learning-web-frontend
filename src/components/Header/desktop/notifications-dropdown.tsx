"use client"

import { Popover, PopoverTrigger } from '@radix-ui/react-popover';
import React from 'react'
import { Button } from '../../ui/button';
import { Bell } from 'lucide-react';
import { PopoverContent } from '../../ui/popover';
import { Separator } from '../../ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { formatDateTime } from '@/utils/date.util';
import Link from 'next/link';

interface NotificationsDropdownProps {
    notifications?: Array<{
        id: string;
        avatarUrl?: string;
        authorName: string;
        message: string;
        read: boolean;
        createdAt: Date;
        onClick?: () => void;
    }>;
    onMarkAsReadAll: () => void;
    notificationsUrl: string;

}

export default function NotificationsDropdown({ notifications, onMarkAsReadAll, notificationsUrl }: NotificationsDropdownProps) {
    if (!notifications) {
        return (
            <></>
        );
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" className="cursor-pointer relative">
                    <Bell className="h-5 w-5" />
                    {(notifications.length > 0 && notifications.some(notification => !notification.read)) && (
                        <span className="absolute bottom-[50%] left-[50%] bg-primary text-secondary text-xs font-bold rounded-full px-1" >
                            {
                                notifications.filter((notification) => !notification.read).length
                            }
                        </span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className='box-border w-96'>
                <div>
                    <h1 className="text-base font-semibold">Notifications</h1>
                </div>
                <Separator />
                {
                    notifications.length > 0 ? (
                        <ul className='flex flex-col gap-1'>
                            {
                                notifications.map((notification) => (
                                    <li key={notification.id} className='w-full'>
                                        <Button variant="ghost" className="w-full h-fit cursor-pointer border-b relative" onClick={notification.onClick}>
                                            <div className="flex items-center flex-row w-full gap-2.5">
                                                <div className='w-20 h-20 shrink-0'>
                                                    <Avatar className='w-full h-full'>
                                                        <AvatarImage />
                                                        <AvatarFallback>{notification.authorName.charAt(0)}</AvatarFallback>
                                                    </Avatar>
                                                </div>
                                                <div className='h-20 text-left w-full overflow-hidden'>
                                                    <h2 className='truncate text-lg font-semibold w-full'>
                                                        {notification.authorName}
                                                    </h2>
                                                    <p className='truncate text-sm text-muted-foreground w-full'>
                                                        {notification.message}
                                                    </p>
                                                    <p className='truncate text-base text-muted-foreground w-full'>
                                                        {
                                                            formatDateTime(notification.createdAt)
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                            {
                                                !notification.read && (
                                                    <span className="absolute h-3 w-3 rounded-full bg-primary right-2 top-2" />
                                                )
                                            }
                                        </Button>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                        :
                        (
                            <div className="p-2 text-center">
                                <h2 className='text-2xl font-semibold my-4'>
                                    No notifications
                                </h2>
                                <p>
                                    We'll let you know when deadlines are approaching, or there is a course update
                                </p>
                            </div>
                        )
                }
                <div className='flex flex-row mt-2 justify-between w-full items-center'>
                    <Button variant={"ghost"} className='w-fit cursor-pointer text-primary' onClick={onMarkAsReadAll}>
                        Mark all as read
                    </Button>
                    <Button variant={"default"} className='w-fit cursor-pointer' asChild>
                        <Link href={notificationsUrl} className='w-fit cursor-pointer'>
                            See All
                        </Link>
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}
