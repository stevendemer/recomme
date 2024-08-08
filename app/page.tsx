import ParentContainer from "@/components/parent-container";
import Steps from "@/components/steps";
import { Box, Container, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { Button, ButtonGroup } from "@chakra-ui/react";
import SubmitButton from "@/components/submit-button";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen bg-gradient-to-tr from-green-100 to-blue-300">
      <ParentContainer>
        <div className="flex flex-col items-center w-full mx-auto max-w-5xl h-full">
          <div className="items-center h-screen flex justify-center">
            {/* form stuff */}
            <SubmitButton />
          </div>
        </div>
      </ParentContainer>
    </main>
  );
}
