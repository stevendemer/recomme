import { AppSidebar } from "./app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React from "react";
import RecommendationCard from "@/components/cards/recomme-card";
import ActionCards from "@/components/dashboard/action-cards";
import Graph from "@/components/dashboard/graph";
import MemberCards from "@/components/dashboard/member-cards";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import userArrow from "@/public/assets/user-arrow.svg";
import userGroup from "@/public/assets/user-group.svg";
import third from "@/public/assets/third.svg";
import group from "@/public/assets/group.svg";
import user from "@/public/assets/user.svg";
import userCircle from "@/public/assets/user-circle.svg";
import { cn } from "@/lib/utils";

const cards = [
  {
    id: 1,
    title: "Enrolment",
    color: "bg-amber-300",
  },
  {
    id: 2,
    title: "Onboarding",
    color: "bg-amber-400",
  },
  {
    id: 3,
    title: "Engagement",
    color: "bg-orange-400",
  },
  {
    id: 4,
    title: "Consolidation",
    color: "bg-red-500",
  },
  {
    id: 5,
    title: "Proactivity",
    color: "bg-purple-400",
  },
  {
    id: 6,
    title: "Mentoring",
    color: "bg-purple-700",
  },
];

const banners = [
  {
    id: 1,
    title: "Convince someone to join",
    image: userArrow,
  },
  {
    id: 2,
    title: "Improve participation",
    image: group,
  },
  {
    id: 3,
    title: "Organise a meeting",
    image: third,
  },
];

export function DashboardPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "20rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset className="flex-1">
        <section className="flex w-full max-w-full grow flex-col gap-8 p-4 rounded-sm min-h-screen items-stretch">
          <div className="grid gap-4 md:grid-cols-3 p-6 auto-rows-min shrink-0 bg-white/30 rounded-sm font-inter actions">
            {banners.map((banner) => (
              <div
                key={banner.id}
                className="flex justify-center items-center space-x-4 p-8 rounded-sm shrink bg-white/80"
              >
                <Image
                  className="object-scale-down"
                  src={banner.image}
                  alt=""
                  height={50}
                  width={50}
                />
                <h2 className="text-sm font-bold sm:text-lg">{banner.title}</h2>
              </div>
            ))}
          </div>

          <div className="grid max-w-full w-full gap-4 sm:grid-cols-2 grid-cols-1 md:grid-cols-6 items-center justify-center shrink-0 members bg-white/30 p-6 rounded-md">
            {cards.map((card) => (
              <div
                className={cn(
                  "flex flex-col justify-center items-center rounded-lg relative bg-white/80 aspect-square w-full p-2 sm:h-36"
                )}
                key={card.id}
              >
                <div
                  className={cn(
                    "rounded-sm flex justify-center items-center p-2",
                    card.color
                  )}
                >
                  <Image
                    className="object-contain"
                    src={userCircle}
                    alt=""
                    width={32}
                    height={32}
                  />
                </div>
                <h2 className="text-sm text-gray-600 font-bold">
                  {card.title}
                </h2>
                <div
                  className={cn(
                    "rounded-lg px-9 py-1 text-white text-sm font-bold",
                    card.color
                  )}
                >
                  10
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 auto-rows-min gap-4 backdrop-blur-lg rounded-md">
            <div className="bg-white/30 p-8 flex grow justify-center relative items-center rounded-sm flex-col graph col-span-full md:col-span-2">
              <Graph />
            </div>
            <div className="bg-white/30 backdrop-blur-lg flex justify-center items-baseline relative rounded-md sm:shrink-0 p-8">
              <div className="flex flex-col items-baseline gap-3 p-3 font-body recom h-full w-full bg-white/80 rounded-md space-y-4">
                <h2 className="text-2xl text-gray-700 p-6 font-bold">
                  Recommendation
                </h2>
                <div className="flex flex-col sm:flex-row items-baseline bg-white p-10 rounded-sm w-full sm:max-w-2xl shadow-md">
                  {" "}
                  <div className="flex flex-col gap-6">
                    <h2 className="font-bold text-pretty whitespace-normal">
                      Acknowledge his expertise
                    </h2>
                    <div className="text-sm font-inter whitespace-normal text-pretty overflow-hidden max-w-xs font-normal">
                      Compliment his knowledge and ask for his opinion on green
                      tech
                    </div>
                  </div>
                  <button className="py-4 px-6 font-medium transform group rounded-full bg-black text-white font-inter text-sm">
                    Acknowledge
                  </button>
                </div>

                <div className="flex items-baseline bg-white p-10 rounded-sm w-full sm:max-w-2xl shadow-md">
                  <div className="flex flex-col gap-6">
                    <h2 className="font-bold">Appreciate contributions</h2>
                    <div className="text-sm font-inter whitespace-normal text-pretty overflow-hidden max-w-xs font-normal">
                      Offer opportunities for him to share insights or get
                      involved in eco-projects
                    </div>
                  </div>
                  <button className="px-6 py-4 font-medium transform group rounded-full bg-black text-white font-inter text-sm">
                    Appreciate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SidebarInset>
    </SidebarProvider>
  );
}
