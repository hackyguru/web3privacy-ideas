import Image from "next/image";
import { Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import IdeaCard from "@/components/ui/idea-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function Home() {
  return (

    <main className=" bg-black w-full min-h-screen pb-10">
      <nav className="flex justify-between p-5 items-center bg-[#0d0d0d]">
        <img className=" inline-flex justify-center w-40" alt="Web3PrivacyNow" src="https://web3privacy.info/logo.svg" />
        <button className="border archivo text-xs flex space-x-3 items-center p-2">
          <h3>
            CONTRIBUTE AN IDEA
          </h3>
          <Github className="w-4" />
        </button>
      </nav>
      <div className="bg-[#0d0d0d] h-96 pt-20">
        <h1 className="major text-center text-3xl">privacy idea generator</h1>
        <h3 className="archivo text-center text-[#4c4c4c] mt-5 px-5">Generate ideas curated by the Web3Privacy Now community and experts</h3>
        <div className="flex justify-center mt-10 md:mt-20">
          <Dialog>
            <DialogTrigger>
              <div className="bg-white text-[#0d0d0d] archivo text-sm flex space-x-3 items-center p-2">
                <h3>
                  GENERATE
                </h3>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogDescription className="">
                <div className="h-10">
      <h1 className="archivo text-lg mb-4">zk loyalty</h1>
    </div>
    <hr className="opacity-10 my-2" />
    <div className=" h-20">
      <h3 className="archivo mt-4 text-sm opacity-50">A GDPR compliant, anonymous loyalty program	</h3>
    </div>
    <div className='flex justify-between items-center my-3'>
    <div className="flex space-x-3 w-2/3">
      <Badge variant="secondary">Tag 1</Badge>
      <Badge variant="secondary">Tag 2</Badge>
      <Badge variant="secondary">Tag 3</Badge>
    </div>
    <div className='w-1/3 text-xs text-end flex justify-end'>
       <Github className='w-5 h-5' />
    </div>
    </div>
    <hr className="opacity-10 my-3" />
    <h3 className="archivo mt-2 text-sm opacity-50 text-end hover:underline cursor-pointer">Source : @hackyguru</h3>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="major text-center text-xl">featured ideas</h1>
        <Tabs defaultValue="account" className="mt-5">
          <div className="flex justify-center w-full">
            <TabsList className="archivo">
              <TabsTrigger value="account">Community ideas</TabsTrigger>
              <TabsTrigger value="password">Expert ideas</TabsTrigger>
            </TabsList>
          </div>
          <div className="mt-10 w-full text-lef">
            <TabsContent value="account">
              <div className="md:flex block space-y-5 md:space-y-0 w-full justify-between px-5 md:space-x-5">
                <IdeaCard />
                <IdeaCard />
                <IdeaCard />
              </div>
            </TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
          </div>
        </Tabs>
      </div>
    </main>
  );
}