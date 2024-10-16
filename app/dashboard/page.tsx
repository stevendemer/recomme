import ActionCards from "@/components/dashboard/action-cards";
import Graph from "@/components/dashboard/graph";
import MemberCards from "@/components/dashboard/member-cards";
import React from "react";
export default function Dashboard() {
  return (
    <div className="flex flex-col items-center gap-2 h-full w-full">
      {/* action cards */}
      <div className="bg-white/20 backdrop-blur-lg text-black rounded-[32px] w-full p-4">
        <div className="flex justify-center items-center w-full space-x-6 rounded-[43px]">
          <ActionCards
            title="Convince someone to join"
            image={"/assets/user-arrow.svg"}
          />

          <ActionCards
            title="Improve participation"
            image={"/assets/second.svg"}
          />

          <ActionCards title="Organise a meeting" image={"/assets/third.svg"} />
        </div>
      </div>
      {/* member cards */}
      <div className="bg-white/30 p-6 rounded-[50px] mb-4 w-full">
        <div className="flex w-full gap-4 justify-evenly items-center ">
          <MemberCards
            members={10}
            text="Enrolment"
            icon={"/assets/user-circle.svg"}
            className="bg-yellow-400/80"
          />

          <MemberCards
            members={10}
            text="Onboarding"
            icon={"/assets/user-circle.svg"}
            className="bg-amber-400/80"
          />

          <MemberCards
            members={10}
            text="Engagement"
            icon={"/assets/user-circle.svg"}
            className="bg-orange-400"
          />

          <MemberCards
            members={10}
            text="Consolidation"
            icon={"/assets/user-circle.svg"}
            className="bg-red-500/80"
          />

          <MemberCards
            members={10}
            text="Proactivity"
            icon={"/assets/user-circle.svg"}
            className="bg-purple-400/80"
          />

          <MemberCards
            members={10}
            text="Mentoring"
            icon={"/assets/user-circle.svg"}
            className="bg-purple-700/80"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-8 w-full h-full">
        {/* graph container */}
        <div className="col-span-2  bg-white/30 p-6 rounded-[30px] w-full h-full">
          <Graph />
        </div>
        <div className="bg-white/30 p-4 rounded-[50px]">
          <div className="bg-white rounded-[50px] h-full w-full flex justify-center max-w-full">
            <h1 className="text-center text-slate-900 font-bold font-rubik text-xl pt-14">
              Recommendation
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
