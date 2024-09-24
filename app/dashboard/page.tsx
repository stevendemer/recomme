import ActionCards from "@/components/dashboard/action-cards";
import Graph from "@/components/dashboard/graph";
import MemberCards from "@/components/dashboard/member-cards";
import React from "react";
export default function Dashboard() {
  return (
    <div className="flex flex-col p-2 rounded-3xl space-y-4 h-full w-full absolute top-20 max-w-screen-2xl">
      <div className="flex flex-col items-center mx-4 space-y-2 h-full gap-4">
        <div className="bg-white/30 backdrop-blur-md shadow-md text-black p-2 rounded-[51px]">
          <div className="flex justify-center items-center w-full">
            <ActionCards
              title="Convince someone to join"
              image={
                <svg
                  width="55"
                  height="43"
                  viewBox="0 0 55 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="32.3192"
                    cy="7.45889"
                    rx="6.29848"
                    ry="7.45889"
                    fill="#65D9BD"
                  />
                  <path
                    d="M8.33228 29.2922C8.33228 20.2195 16.6992 13.4575 25.57 15.3611L33.9115 17.1511C39.6352 18.3793 43.7238 23.4382 43.7238 29.2922H8.33228Z"
                    fill="url(#paint0_linear_354_7881)"
                  />
                  <path
                    d="M1.51165 32.5C0.68322 32.5 0.0116462 33.1716 0.0116463 34C0.0116464 34.8284 0.68322 35.5 1.51165 35.5L1.51165 32.5ZM54.5898 34L39.5898 25.3397L39.5898 42.6603L54.5898 34ZM1.51165 35.5L41.0898 35.5L41.0898 32.5L1.51165 32.5L1.51165 35.5Z"
                    fill="#65D9BD"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_354_7881"
                      x1="26.028"
                      y1="11.6621"
                      x2="26.028"
                      y2="29.2922"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#65D9BD" />
                      <stop offset="1" stop-color="#65D9BD" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              }
            />

            <ActionCards
              title="Improve participation"
              image={
                <svg
                  width="58"
                  height="42"
                  viewBox="0 0 58 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="37.125"
                    cy="6.96111"
                    rx="5.87814"
                    ry="6.96111"
                    fill="#65D9BD"
                  />
                  <path
                    d="M14.7375 27.3383C14.7375 18.871 22.5461 12.5604 30.8249 14.3369L38.6097 16.0074C43.9514 17.1537 47.7671 21.875 47.7671 27.3383H14.7375Z"
                    fill="url(#paint0_linear_354_7868)"
                  />
                  <ellipse
                    cx="10.5788"
                    cy="26.9987"
                    rx="2.70699"
                    ry="3.20572"
                    fill="#65D9BD"
                  />
                  <path
                    d="M0.269531 36.3818C0.269531 32.4825 3.86549 29.5763 7.67803 30.3944L11.2631 31.1638C13.7231 31.6916 15.4802 33.8659 15.4802 36.3818H0.269531Z"
                    fill="url(#paint1_linear_354_7868)"
                  />
                  <ellipse
                    cx="32.684"
                    cy="31.651"
                    rx="2.70699"
                    ry="3.20572"
                    fill="#65D9BD"
                  />
                  <path
                    d="M22.3748 41.0342C22.3748 37.1348 25.9707 34.2287 29.7833 35.0468L33.3683 35.8161C35.8283 36.344 37.5855 38.5182 37.5855 41.0342H22.3748Z"
                    fill="url(#paint2_linear_354_7868)"
                  />
                  <ellipse
                    cx="52.3969"
                    cy="28.1627"
                    rx="2.70699"
                    ry="3.20572"
                    fill="#65D9BD"
                  />
                  <path
                    d="M42.0876 37.5459C42.0876 33.6466 45.6836 30.7404 49.4961 31.5585L53.0812 32.3278C55.5412 32.8557 57.2983 35.0299 57.2983 37.5459H42.0876Z"
                    fill="url(#paint3_linear_354_7868)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_354_7868"
                      x1="31.2523"
                      y1="10.8848"
                      x2="31.2523"
                      y2="27.3383"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#65D9BD" />
                      <stop offset="1" stop-color="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_354_7868"
                      x1="7.87488"
                      y1="28.8047"
                      x2="7.87488"
                      y2="36.3818"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#65D9BD" />
                      <stop offset="1" stop-color="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_354_7868"
                      x1="29.9801"
                      y1="33.457"
                      x2="29.9801"
                      y2="41.0342"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#65D9BD" />
                      <stop offset="1" stop-color="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_354_7868"
                      x1="49.693"
                      y1="29.9688"
                      x2="49.693"
                      y2="37.5459"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#65D9BD" />
                      <stop offset="1" stop-color="white" />
                    </linearGradient>
                  </defs>
                </svg>
              }
            />

            <ActionCards
              title="Organise a meeting"
              image={
                <svg
                  width="52"
                  height="39"
                  viewBox="0 0 52 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.2185 0.749777L31.992 10.7498H20.445L26.2185 0.749777ZM11.3875 20.7849C13.7376 20.9643 17.251 20.5957 20.1357 18.9625C22.9498 17.3693 25.2185 14.5537 25.2185 9.61775H27.2185C27.2185 15.3234 24.5182 18.7796 21.121 20.7029C17.7944 22.5863 13.8543 22.979 11.2353 22.7792L11.3875 20.7849Z"
                    fill="#65D9BD"
                  />
                  <path
                    d="M26.2185 0.749777L20.445 10.7498H31.992L26.2185 0.749777ZM40.3358 20.7852C38.1124 20.9634 34.7852 20.5971 32.0535 18.9731C29.3918 17.3908 27.2185 14.5776 27.2185 9.61775H25.2185C25.2185 15.2994 27.7776 18.758 31.0315 20.6923C34.2152 22.5849 37.9866 22.9799 40.4956 22.7789L40.3358 20.7852Z"
                    fill="#65D9BD"
                  />
                  <path
                    d="M26.2185 28.2475L26.2185 1.92773"
                    stroke="#65D9BD"
                    stroke-width="2"
                  />
                  <ellipse
                    cx="7.26813"
                    cy="21.3785"
                    rx="6.60407"
                    ry="5.97223"
                    fill="#65D9BD"
                  />
                  <ellipse
                    cx="8.31049"
                    cy="19.1769"
                    rx="1.51825"
                    ry="1.79797"
                    fill="white"
                  />
                  <path
                    d="M2.52454 24.4431C2.52454 22.2561 4.54138 20.6261 6.67969 21.085L8.69042 21.5165C10.0701 21.8125 11.0557 23.032 11.0557 24.4431H2.52454Z"
                    fill="url(#paint0_linear_354_7848)"
                  />
                  <ellipse
                    cx="44.4636"
                    cy="21.3785"
                    rx="6.60407"
                    ry="5.97223"
                    fill="#65D9BD"
                  />
                  <ellipse
                    cx="45.5059"
                    cy="19.1769"
                    rx="1.51825"
                    ry="1.79797"
                    fill="white"
                  />
                  <path
                    d="M39.72 24.4431C39.72 22.2561 41.7368 20.6261 43.8751 21.085L45.8858 21.5165C47.2656 21.8125 48.2511 23.032 48.2511 24.4431H39.72Z"
                    fill="url(#paint1_linear_354_7848)"
                  />
                  <ellipse
                    cx="25.8657"
                    cy="32.3218"
                    rx="6.60407"
                    ry="5.97223"
                    fill="#65D9BD"
                  />
                  <ellipse
                    cx="26.9096"
                    cy="30.1183"
                    rx="1.51825"
                    ry="1.79797"
                    fill="white"
                  />
                  <path
                    d="M21.1237 35.3845C21.1237 33.1975 23.1405 31.5676 25.2788 32.0264L27.2895 32.4579C28.6692 32.7539 29.6548 33.9734 29.6548 35.3845H21.1237Z"
                    fill="url(#paint2_linear_354_7848)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_354_7848"
                      x1="6.7901"
                      y1="20.1934"
                      x2="6.7901"
                      y2="24.4431"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_354_7848"
                      x1="43.9855"
                      y1="20.1934"
                      x2="43.9855"
                      y2="24.4431"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_354_7848"
                      x1="25.3892"
                      y1="31.1348"
                      x2="25.3892"
                      y2="35.3845"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              }
            />
          </div>
        </div>
        <div className="bg-white/30 p-6 rounded-3xl flex h-fit items-center justify-center mt-6 mb-4 w-full max-w-screen-2xl space-x-8">
          <MemberCards
            members={10}
            text="Enrolment"
            icon={
              <svg
                width="32"
                height="29"
                viewBox="0 0 32 29"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="21.3881"
                  cy="7.38541"
                  rx="5.61591"
                  ry="7.35416"
                  fill="white"
                />
                <path
                  d="M0 28.9119C0 20.0406 8.28135 13.4944 16.9129 15.5425L21.9287 16.7327C27.5718 18.0718 31.556 23.112 31.556 28.9119H0Z"
                  fill="white"
                />
              </svg>
            }
            className="bg-yellow-400/80"
          />

          <MemberCards
            members={10}
            text="Onboarding"
            icon={
              <svg
                width="32"
                height="29"
                viewBox="0 0 32 29"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="21.3881"
                  cy="7.38541"
                  rx="5.61591"
                  ry="7.35416"
                  fill="white"
                />
                <path
                  d="M0 28.9119C0 20.0406 8.28135 13.4944 16.9129 15.5425L21.9287 16.7327C27.5718 18.0718 31.556 23.112 31.556 28.9119H0Z"
                  fill="white"
                />
              </svg>
            }
            className="bg-amber-400/80"
          />

          <MemberCards
            members={10}
            text="Engagement"
            icon={
              <svg
                width="32"
                height="29"
                viewBox="0 0 32 29"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <ellipse
                  cx="21.3881"
                  cy="7.38541"
                  rx="5.61591"
                  ry="7.35416"
                  fill="white"
                />
                <path
                  d="M0 28.9119C0 20.0406 8.28135 13.4944 16.9129 15.5425L21.9287 16.7327C27.5718 18.0718 31.556 23.112 31.556 28.9119H0Z"
                  fill="white"
                />
              </svg>
            }
            className="bg-orange-400"
          />

          <MemberCards
            members={10}
            text="Consolidation"
            icon={
              <svg
                width="32"
                height="29"
                viewBox="0 0 32 29"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <ellipse
                  cx="21.3881"
                  cy="7.38541"
                  rx="5.61591"
                  ry="7.35416"
                  fill="white"
                />
                <path
                  d="M0 28.9119C0 20.0406 8.28135 13.4944 16.9129 15.5425L21.9287 16.7327C27.5718 18.0718 31.556 23.112 31.556 28.9119H0Z"
                  fill="white"
                />
              </svg>
            }
            className="bg-red-500/80"
          />

          <MemberCards
            members={10}
            text="Proactivity"
            icon={
              <svg
                width="32"
                height="29"
                viewBox="0 0 32 29"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <ellipse
                  cx="21.3881"
                  cy="7.38541"
                  rx="5.61591"
                  ry="7.35416"
                  fill="white"
                />
                <path
                  d="M0 28.9119C0 20.0406 8.28135 13.4944 16.9129 15.5425L21.9287 16.7327C27.5718 18.0718 31.556 23.112 31.556 28.9119H0Z"
                  fill="white"
                />
              </svg>
            }
            className="bg-purple-400/80"
          />

          <MemberCards
            members={10}
            text="Mentoring"
            icon={
              <svg
                width="32"
                height="29"
                viewBox="0 0 32 29"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <ellipse
                  cx="21.3881"
                  cy="7.38541"
                  rx="5.61591"
                  ry="7.35416"
                  fill="white"
                />
                <path
                  d="M0 28.9119C0 20.0406 8.28135 13.4944 16.9129 15.5425L21.9287 16.7327C27.5718 18.0718 31.556 23.112 31.556 28.9119H0Z"
                  fill="white"
                />
              </svg>
            }
            className="bg-purple-500/80"
          />
        </div>
        <div className="grid grid-cols-3 w-full h-full gap-4">
          {/* graph container */}
          <div className="col-span-2">
            <Graph />
          </div>
          <div className="bg-white/20 rounded-3xl text-black font-bold w-full h-full">
            Recommendation
          </div>
        </div>
      </div>
    </div>
  );
}
