import { AppSidebar } from "./app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import RecommendationCard from "@/components/cards/recomme-card";
import ActionCards from "@/components/dashboard/action-cards";
import Graph from "@/components/dashboard/graph";
import MemberCards from "@/components/dashboard/member-cards";
import Image from "next/image";
import userArrow from "@/public/assets/user-arrow.svg";
import third from "@/public/assets/third.svg";
import group from "@/public/assets/group.svg";
import userCircle from "@/public/assets/user-circle.svg";
import { cn } from "@/lib/utils";
import SubmitButton from "../submit-button";
import Banner from "@/app/dashboard/banner";
import InfoCard from "@/app/dashboard/info-card";

const cards = [
  {
    title: "Enrolment",
    color: "bg-khaki",
    members: 3,
  },
  {
    title: "Onboarding",
    color: "bg-goldenrod",
    members: 20,
  },
  {
    title: "Engagement",
    color: "bg-sandybrown",
    members: 30,
  },
  {
    title: "Consolidation",
    color: "bg-salmon",
    members: 10,
  },
  {
    title: "Proactivity",
    color: "bg-mediumpurple",
    members: 5,
  },
  {
    title: "Mentoring",
    color: "bg-mediumorchid",
    members: 8,
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
      <section className="flex justify-start items-start w-full gap-4">
        <AppSidebar />
        <div className="flex w-full max-w-full grow flex-col gap-6 rounded-sm font-inter p-4 overflow-auto">
          <div className="grid gap-4 md:grid-cols-3 auto-rows-min shrink-0 bg-white/30 rounded-[50px] font-inter actions p-6">
            {banners.map((banner, index) => (
              <Banner key={index} title={banner.title} image={banner.image} />
            ))}
          </div>

          <div className="max-w-full w-full gap-2 flex flex-col sm:flex-row items-center sm:items-stretch justify-between members bg-white/30 p-4 rounded-[50px] shrink-0 auto-rows-min">
            {cards.map((card, index) => (
              <InfoCard
                key={index}
                title={card.title}
                color={card.color}
                members={card.members}
              />
            ))}
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:auto-rows-min flex flex-col gap-2 sm:gap-4 backdrop-blur-lg rounded-md grow">
            <div className="bg-white/30 sm:p-6 p-4 flex flex-col justify-center relative items-center rounded-[50px] graph col-span-full sm:col-span-2 max-w-full w-full grow">
              <Graph />
            </div>
            <div className="bg-white/30 backdrop-blur-lg flex relative rounded-[50px] p-4 sm:p-8 w-full h-full">
              <div className="font-body recom bg-white/80 rounded-[30px] space-y-4 relative w-full">
                <div className="flex flex-col items-start gap-4 p-3 w-full h-full mx-auto">
                  <h2 className="lg:text-2xl text-lg text-gray-700 p-8 ps-4 sm:ps-14 font-bold">
                    Recommendation
                  </h2>
                  <div className="flex flex-col sm:flex-row sm:items-center mx-auto bg-white rounded-[30px] shadow-lg sm:p-6 p-3">
                    {" "}
                    <div className="flex flex-col gap-3 sm:gap-6">
                      <h2 className="font-bold text-pretty whitespace-normal text-lg">
                        Acknowledge his expertise
                      </h2>
                      <div className="text-sm font-inter whitespace-normal text-pretty truncate max-w-xs font-medium">
                        Compliment his knowledge and ask for his opinion on
                        green tech
                      </div>
                    </div>
                    <SubmitButton>Acknowledge</SubmitButton>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center mx-auto bg-white rounded-[30px] shadow-lg sm:p-6 p-3">
                    <div className="flex flex-col gap-3 sm:gap-6">
                      <h2 className="font-bold text-lg">
                        Appreciate contributions
                      </h2>
                      <div className="text-sm whitespace-normal text-pretty max-w-xs font-medium font-inter">
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
