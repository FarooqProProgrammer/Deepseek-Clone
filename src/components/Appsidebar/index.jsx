import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { Button } from "../ui/button"
import { AppIcon, NewChatIcon } from "@/Icons"
import { Badge } from "../ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export default function AppSidebar() {
    return (
        <Sidebar className={'bg-[var(--sidebar-color)]'}>
            <SidebarHeader className={'p-4 bg-[var(--sidebar-color)]'}>
                <Image src="/logo.svg" width={150} height={80} />
                <Button className={'mt-4 w-fit'}>
                    <NewChatIcon />
                    New Chat
                </Button>
            </SidebarHeader>
            <SidebarContent className={'bg-[var(--sidebar-color)]'}>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter>
                <Button variant={'defaultoutline'} className={'flex justify-start items-center gap-2'}>
                    <AppIcon />
                    Get App
                    <Badge >Badge</Badge>
                </Button>
                <Button variant={'ghost'} className={'flex justify-start items-center gap-2'}>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className={'text-gray-800'}>My Profile</span>
                </Button>
            </SidebarFooter>
        </Sidebar>
    )
}
