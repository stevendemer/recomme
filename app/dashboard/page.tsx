'use client'
import RecommendationCard from "@/components/cards/recomme-card";
import ActionCards from "@/components/dashboard/action-cards";
import Graph from "@/components/dashboard/graph";
import MemberCards from "@/components/dashboard/member-cards";
import {Button} from "@/components/ui/button";

export default function Dashboard() {
    return (
        <div className="flex flex-col h-full gap-3 scrollbar-hide ">
            <div className="bg-white/20 backdrop-blur-lg rounded-sm flex-shrink">
                <div className="flex gap-4 flex-col sm:flex-row pb-2 actions">
                    <ActionCards
                        title="Convince someone to join"
                        image={"/assets/user-arrow.svg"}
                    />
                    <ActionCards
                        title="Improve participation"
                        image={"/assets/second.svg"}
                    />
                    <ActionCards
                        title="Organise a meeting"
                        image={"/assets/third.svg"}
                    />
                </div>
            </div>

            <div className="bg-white/30 rounded-sm p-3 flex-shrink">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 members">
                    <MemberCards
                        members={10}
                        text="Enrolment"
                        icon={"/assets/user-circle.svg"}
                        className="bg-yellow-400/80"
                    />
                    <MemberCards
                        members={20}
                        text="Onboarding"
                        icon={"/assets/user-circle.svg"}
                        className="bg-amber-400/80"
                    />
                    <MemberCards
                        members={32}
                        text="Engagement"
                        icon={"/assets/user-circle.svg"}
                        className="bg-orange-400"
                    />
                    <MemberCards
                        members={50}
                        text="Consolidation"
                        icon={"/assets/user-circle.svg"}
                        className="bg-red-500/80"
                    />
                    <MemberCards
                        members={5}
                        text="Proactivity"
                        icon={"/assets/user-circle.svg"}
                        className="bg-purple-400/80"
                    />
                    <MemberCards
                        members={9}
                        text="Mentoring"
                        icon={"/assets/user-circle.svg"}
                        className="bg-purple-700/80"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 flex-1 min-h-0">
                <div className="bg-white/30 rounded-lg p-4 lg:col-span-2 h-full graph">
                    <Graph/>
                </div>
                <div className="bg-white/30 rounded-lg p-3 h-full recom">
                    <div className="bg-white/60 rounded-lg h-full flex flex-col">
                        <h1 className="text-slate-900 font-bold text-xl p-4">
                            Recommendation
                        </h1>

                        <div className="flex-1 flex flex-col gap-3 p-3">
                            <RecommendationCard>
                                <div className="flex flex-col gap-2">
                                    <h2 className="font-bold font-rubik">
                                        Acknowledge his expertise
                                    </h2>
                                    <p className="text-sm font-inter">
                                        Compliment his knowledge and ask for his opinion on green tech
                                    </p>
                                </div>
                                <Button className="py-4 px-4 w-32 font-bold">
                                    Acknowledge
                                </Button>
                            </RecommendationCard>

                            <RecommendationCard>
                                <div className="flex flex-col gap-2">
                                    <h2 className="font-bold font-rubik">
                                        Appreciate contributions
                                    </h2>
                                    <p className="text-sm font-inter">
                                        Offer opportunities for him to share insights or get involved in eco-projects
                                    </p>
                                </div>
                                <Button className="py-4 px-4 w-32 font-bold">
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