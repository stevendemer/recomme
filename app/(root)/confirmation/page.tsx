import SubmitButton from "@/components/submit-button";
import Link from "next/link";
import React from "react";
import BackgroundImage from "@/components/message-container";
import Image from "next/image";
import cloud from "@/public/assets/cloud.svg";
import MessageContainer from "@/components/message-container";
import alec from "@/public/assets/alec.svg";
import glass from "@/public/assets/glass.svg";
import flower from "@/public/assets/flower.svg";
import logo from "@/public/assets/logo.svg";
import bigCloud from "@/public/assets/big-cloud.svg";

export default function ConfirmationPage() {
  return (
    <div className="gradient-bg grid items-center font-rubik min-h-screen">
      <MessageContainer buttonLength={2}>
        {/* glass image container */}

        <Image src={glass} alt="" />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <p className="text-2xl text-black font-normal leading-tight font-rubik">
            First, let's get introduced I have a feeling you might be an
            <b> ALEC community manager</b> looking for some digital magic. Am I
            on the right track?
          </p>
        </div>
      </MessageContainer>
    </div>
  );
}
