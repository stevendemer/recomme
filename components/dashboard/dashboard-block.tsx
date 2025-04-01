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
import SubmitButton from "../submit-button";

const cards = [
  {
    title: "Enrolment",
    color: "bg-khaki",
  },
  {
    title: "Onboarding",
    color: "bg-goldenrod",
  },
  {
    title: "Engagement",
    color: "bg-sandybrown",
  },
  {
    title: "Consolidation",
    color: "bg-salmon",
  },
  {
    title: "Proactivity",
    color: "bg-mediumpurple",
  },
  {
    title: "Mentoring",
    color: "bg-mediumorchid",
  },
];

const banners = [
  {
    title: "Convince someone to join",
    image: userArrow,
  },
  {
    title: "Improve participation",
    image: group,
  },
  {
    title: "Organise a meeting",
    image: third,
  },
];

export function DashboardPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "18rem",
          "--sidebar-width-mobile": "12rem",
          "--sidebar-height": "63rem",
        } as React.CSSProperties
      }
    >
      <section className="flex justify-start items-start w-full gap-4 h-full">
        <AppSidebar />
        <div className="flex w-full max-w-full grow flex-col gap-6 rounded-sm font-inter p-4">
          <div className="grid gap-4 md:grid-cols-3 auto-rows-min shrink-0 bg-white/30 rounded-[50px] font-inter actions p-6">
            {banners.map((banner, index) => (
              <div
                key={index}
                className={cn(
                  "flex justify-center items-center space-x-4 p-8 rounded-[30px] shrink bg-white/80"
                )}
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

          <div className="max-w-full w-full gap-2 flex flex-col sm:flex-row items-stretch justify-between members bg-white/30 p-6 rounded-[50px] flex-shrink-0 auto-rows-min">
            {cards.map((card, index) => (
              <div
                className={cn(
                  "flex flex-col justify-center items-center rounded-[30px] relative bg-white/80 sm:h-[160px] sm:w-[175px] w-[175px] h-[175px] gap-2 p-2"
                )}
                key={index}
              >
                <div
                  className={cn(
                    `rounded-sm flex justify-center items-center p-2`,
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
                    `rounded-lg px-8 py-1 text-white text-sm font-bold mix-blend-normal`,
                    card.color
                  )}
                >
                  10
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 auto-rows-min  gap-4 backdrop-blur-lg rounded-md">
            <div className="bg-white/30 p-8 flex grow justify-center relative items-center rounded-[50px] flex-col graph col-span-full md:col-span-2">
              <Graph />
            </div>
            <div className="bg-white/30 backdrop-blur-lg flex justify-center items-baseline relative rounded-[50px] sm:shrink-0 p-8">
              <div className="font-body recom bg-white/80 rounded-[30px] space-y-4 relative w-full h-full">
                <div className="flex flex-col items-start gap-4 p-3 w-full h-full mx-auto">
                  <h2 className="lg:text-2xl text-xl text-gray-700 pt-6 pb-6 sm:pl-12 font-bold">
                    Recommendation
                  </h2>
                  <div className="flex flex-col sm:flex-row items-center mx-auto bg-white p-8 rounded-[30px] w-full sm:max-w-2xl sm:w-fit sm:h-48 shadow-lg relative">
                    {" "}
                    <div className="flex flex-col gap-6">
                      <h2 className="font-bold text-pretty whitespace-normal text-md">
                        Acknowledge his expertise
                      </h2>
                      <div className="text-sm font-inter whitespace-normal text-pretty overflow-hidden max-w-xs font-medium">
                        Compliment his knowledge and ask for his opinion on
                        green tech
                      </div>
                    </div>
                    <SubmitButton>Acknowledge</SubmitButton>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center mx-auto bg-white p-8 rounded-[30px] w-full sm:max-w-2xl sm:w-fit sm:h-48 shadow-lg">
                    <div className="flex flex-col gap-6">
                      <h2 className="font-bold text-md">
                        Appreciate contributions
                      </h2>
                      <div className="text-sm whitespace-normal text-pretty overflow-hidden max-w-xs font-medium">
                        Offer opportunities for him to share insights or get
                        involved in eco-projects
                      </div>
                    </div>
                    <SubmitButton>Appreciate</SubmitButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SidebarProvider>
  );
}
