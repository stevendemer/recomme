import RecommendationCard from "@/components/cards/recomme-card";
import ActionCards from "@/components/dashboard/action-cards";
import Graph from "@/components/dashboard/graph";
import MemberCards from "@/components/dashboard/member-cards";
import SubmitButton from "@/components/submit-button";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full space-y-2">
      {/* action cards */}
      <div className="bg-white/20 backdrop-blur-lg text-black rounded-sm w-full items-center flex  p-4">
        <div className="flex flex-col sm:flex-row gap-x-6 rounded-sm items-center w-full flex-shrink">
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
      <div className="bg-white/30 rounded-[32px] w-full flex items-center mb-4">
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
      <div className="grid grid-cols-3 gap-4 overflow-hidden ">
        <div className="bg-white/30 rounded-sm flex items-center justify-center p-4 col-span-2">
          <Graph />
        </div>
        <div className="bg-white/30 p-4 rounded-sm  flex items-center justify-center overflow-hidden">
          <div className="bg-white/80 rounded-sm flex flex-col overflow-hidden h-full w-full">
            <h1 className="text-slate-900 font-bold text-xl sm:text-2xl pt-8 mb-4 ml-8 text-start">
              Recommendation
            </h1>
            <div className="flex flex-col space-y-4 h-full px-4 w-full">
              <RecommendationCard>
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold font-rubik">
                    Acknowledge his expertise
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet Lorem LoremLoremLoremLorem Lorem
                  </p>
                </div>
                <Button className="py-6 px-4 w-44  font-bold">
                  Acknowledge
                </Button>
              </RecommendationCard>
              <RecommendationCard>
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold font-rubik">
                    Appreciate contributions
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet Lorem LoremLoremLoremLorem Lorem
                  </p>
                </div>

                <Button className="py-6 px-4 w-44 font-bold">Appreciate</Button>
              </RecommendationCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
