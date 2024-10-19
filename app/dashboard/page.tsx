import RecommendationCard from "@/components/cards/recomme-card";
import ActionCards from "@/components/dashboard/action-cards";
import Graph from "@/components/dashboard/graph";
import MemberCards from "@/components/dashboard/member-cards";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full">
      {/* action cards */}
      <div className="bg-white/20 backdrop-blur-lg text-black rounded-[32px] w-full items-center flex mb-4 actions">
        <div className="flex flex-col sm:flex-row gap-x-6 rounded-[32px] items-center w-full flex-shrink">
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
      <div className="bg-white/30 rounded-[32px] w-full flex items-center flex-shrink mb-4 members">
        <div className="flex flex-col items-center max-sm:space-y-4 sm:flex-row justify-evenly w-full p-2 flex-shrink gap-x-2">
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

      {/* graph and recommendation */}
      <div className="flex flex-col md:flex-row gap-4 flex-grow overflow-hidden">
        <div className="bg-white/30 p-4 rounded-[32px] flex-grow flex items-center justify-center graph">
          <Graph />
        </div>
        <div className="bg-white/30 p-4 rounded-[32px] flex-grow flex items-center justify-center">
          <div className="bg-white/80 rounded-[40px] h-full w-full flex flex-col recom">
            <h1 className="text-slate-900 font-bold text-xl sm:text-2xl pt-8 mb-4 ml-8">
              Recommendation
            </h1>
            <div className="flex flex-col space-y-4 p-4 flex-grow overflow-auto">
              <RecommendationCard
                label="Acknowledge his expertise"
                text="Lorem ipsum dolor sit amet"
              >
                <Button className="w-full text-white font-bold rounded-[40px] py-2">
                  Acknowledge
                </Button>
              </RecommendationCard>
              <RecommendationCard
                label="Appreciate contributions"
                text="Lorem ipsum dolor sit amet"
              >
                <Button className="w-full text-white font-bold rounded-[40px] py-2">
                  Appreciate
                </Button>
              </RecommendationCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
