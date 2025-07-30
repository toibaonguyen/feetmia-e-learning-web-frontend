"use client"

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Button } from "../../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../ui/dropdown-menu";
import { UserPreview } from "@/types/user.type";


interface UserMenuProps {
  user?: UserPreview;
  profileUrl: string;
  purchasesHistoryUrl: string;
  settingsUrl: string;
  onLogout: () => Promise<void> | void;

}

export default function UserMenuDropDown({ user, profileUrl, purchasesHistoryUrl, settingsUrl, onLogout }: UserMenuProps): React.ReactNode {
  if (!user) {
    return (
      <></>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="cursor-pointer">
          <Avatar>
            <AvatarImage src={user?.avatarSrc} alt={user?.name} />
            <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1.5 w-3xs text-4xl" >
        <DropdownMenuItem asChild>
          <Link href={profileUrl}>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={purchasesHistoryUrl}>My Purchases</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={settingsUrl}>Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onLogout}>
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
