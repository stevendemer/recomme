import * as React from "react";

import { SearchForm } from "./search-form";
import { VersionSwitcher } from "./version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import home from "@/public/assets/home.svg";
import members from "@/public/assets/members.svg";
import faq from "@/public/assets/faq.svg";
import profile from "@/public/assets/profile.svg";
import recommendation from "@/public/assets/recommendation.svg";
import Image from "next/image";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Menu",
      url: "#",
      items: [
        {
          title: "Home",
          url: "#",
          icon: home,
        },
        {
          title: "Members",
          url: "#",
          icon: members,
        },
        {
          title: "Recommendation",
          url: "#",
          icon: recommendation,
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      items: [
        {
          title: "Profile",
          url: "#",
          icon: profile,
        },
        {
          title: "FAQ's",
          url: "#",
          isActive: true,
          icon: faq,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="sidebar p-3 bg-white/30 rounded-sm"
      variant="floating"
      {...props}
    >
      <SidebarHeader>
        <VersionSwitcher />
      </SidebarHeader>
      <SidebarContent className="font-mulish text-gray-600 p-2 rounded-sm">
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={false}>
                      <a href={item.url}>
                        {/* <img src={item.icon} alt="" /> */}
                        <Image src={item.icon} alt="" width={20} height={20} />
                        {item.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
