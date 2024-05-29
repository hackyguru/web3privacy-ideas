import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Github } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" bg-black min-h-screen">
      <div className="bg-[#0d0d0d]">
        <div className="flex justify-between p-10 items-center">
          <img className=" inline-flex justify-center w-40" alt="Web3PrivacyNow" src="https://web3privacy.info/logo.svg" />
          <div className="items-center flex space-x-10">
            <button className="archivo opacity-40 text-sm">CONTRIBUTORS</button>
            <button className="border p-2 archivo text-xs flex space-x-3 items-center">
              <h3>
                CONTRIBUTE AN IDEA
              </h3>
              <Github className="w-5" />
            </button>
          </div>
        </div>
        <h1 className="major text-4xl text-center mt-10">privacy idea generator</h1>
        <h4 className="archivo text-center mt-5 opacity-40">Generate amazing privacy focussed project ideas curated by Web3PrivacyNow community</h4>
        <div className="flex justify-center mt-20 pb-20">
          <button className="bg-white text-black px-5 p-2 text-xs archivo flex space-x-3 items-center">GENERATE AN IDEA
          </button>
        </div>
      </div>
      <div className="bg-black w-full p-20">
        <h1 className="major text-2xl">featured ideas</h1>
        <div className="flex justify-between space-x-5 mt-10">
          <div className=" bg-[#0d0d0d] w-1/3 p-6">
            <div className="h-16">
              <h1 className="archivo text-lg mb-4">zk loyalty</h1>
            </div>
            <hr className="opacity-10 my-2" />
            <div className=" h-32">
              <h3 className="archivo mt-4 text-sm opacity-50">A GDPR compliant, anonymous loyalty program	</h3>
            </div>
            <div className="flex space-x-3 mt-3">
              <Badge variant="secondary">Tag 1</Badge>
              <Badge variant="secondary">Tag 2</Badge>
              <Badge variant="secondary">Tag 3</Badge>
            </div>
          </div>

          <div className=" bg-[#0d0d0d] w-1/3 p-6">
            <div className="h-16">
              <h1 className="archivo text-lg mb-4">Whisper</h1>
            </div>
            <hr className="opacity-10 my-2" />
            <div className=" h-32">
              <h3 className="archivo mt-4 text-sm opacity-50">Platform for anonymized members to create privacy-preserved groups	</h3>
            </div>
            <div className="flex space-x-3 mt-3">
              <Badge variant="secondary">Tag 1</Badge>
              <Badge variant="secondary">Tag 2</Badge>
              <Badge variant="secondary">Tag 3</Badge>
            </div>
          </div>

          <div className=" bg-[#0d0d0d] w-1/3 p-6">
            <div className="h-16">
              <h1 className="archivo text-lg mb-4">ZeroDock</h1>
            </div>
            <hr className="opacity-10 my-2" />
            <div className=" h-32">
              <h3 className="archivo mt-4 text-sm opacity-50">Providing provable off-chain computation based on on-chain events	</h3>
            </div>
            <div className="flex space-x-3 mt-3">
              <Badge variant="secondary">Tag 1</Badge>
              <Badge variant="secondary">Tag 2</Badge>
              <Badge variant="secondary">Tag 3</Badge>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
