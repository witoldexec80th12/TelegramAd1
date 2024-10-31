'use client';
import { useState } from 'react';
import Image from 'next/image';
import BottomNav from './ui/BottomNav';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useWebApp } from '@vkruglikov/react-telegram-web-app';

const Game = () => {
  const [welcomeDrawerOpen, setWelcomeDrawerOpen] = useState(true);
  const [privateDrawerOpen, setPrivateDrawerOpen] = useState(false);

  return (
    <ScrollArea>
      <div className='w-screen h-full flex flex-col text-center bg-[#f3f3f3] px-6'>
        <div className='mt-2 font-bold text-[#00B0B0] text-[32px]'>Tasks</div>
        <div className='mt-3 text-black font-semibold text-[24px]'>Go on a Streak</div>
        <div className='text-[16px] text-black'>Simple steps for a healthier life.</div>

        <div className='w-full grid grid-cols-2 gap-4 justify-between mt-3'>
          <div className='flex flex-col justify-center items-center bg-white rounded-3xl aspect-square shadow-[-4px_4px_10px_rgba(202,241,245,0.7),4px_4px_10px_rgba(202,241,245,0.7)]'>
            <div className=''>
              <Image src="/images/tea.svg" width={60} height={60} alt="tea" />
            </div>
            <div className='mt-3 text-[20px] text-black font-semibold'>Breakfast</div>
            <div className='text-[24px] text-[#00B0B0] font-bold'>20</div>
          </div>

          <div className='flex flex-col justify-center items-center bg-white rounded-3xl aspect-square shadow-[-4px_4px_10px_rgba(202,241,245,0.7),4px_4px_10px_rgba(202,241,245,0.7)]'>
            <div className=''>
              <Image src="/images/lunch.svg" width={60} height={60} alt="lunch" />
            </div>
            <div className='mt-3 text-[20px] text-black font-semibold'>Lunch</div>
            <div className='text-[24px] text-[#00B0B0] font-bold'>20</div>
          </div>

          <div className='flex flex-col justify-center items-center bg-white rounded-3xl aspect-square shadow-[-4px_4px_10px_rgba(202,241,245,0.7),4px_4px_10px_rgba(202,241,245,0.7)]'>
            <div className=''>
              <Image src="/images/dinner.svg" width={60} height={60} alt="dinner" />
            </div>
            <div className='mt-3 text-[20px] text-black font-semibold'>Dinner</div>
            <div className='text-[24px] text-[#00B0B0] font-bold'>10</div>
          </div>

          <div className='flex flex-col justify-center items-center bg-white rounded-3xl aspect-square shadow-[-4px_4px_10px_rgba(202,241,245,0.9),4px_4px_10px_rgba(202,241,245,0.9)]'>
            <div className=''>
              <Image src="/images/walking.svg" width={60} height={60} alt="walking" />
            </div>
            <div className='mt-3 text-[20px] text-black font-semibold'>Walking</div>
            <div className='text-[24px] text-[#00B0B0] font-bold'>0</div>
          </div>
        </div>

        <hr className="mt-6 border-gray-200 border-2 w-full" />

        <div className='mt-6 text-[] text-black font-semibold text-[24px]'>New Tasks</div>

        <div className='flex w-full items-center justify-between rounded-lg px-4 py-2 bg-white mt-4'>
          <div className='text-[16px] font-semibold text-black'>Create Account</div>
          <div className='text-[24px] font-bold text-[#00B0B0]'>500</div>
        </div>

        <div className='flex w-full items-center justify-between rounded-lg px-4 py-2 bg-white mt-1'>
          <div className='text-[16px] font-semibold text-black'>Ask a question to our Chatbot</div>
          <div className='text-[24px] font-bold text-[#00B0B0]'>10</div>
        </div>

        <div className='flex w-full items-center justify-between rounded-lg px-4 py-2 bg-white mt-1 mb-3'>
          <div className='text-[16px] font-semibold text-black'>Join Mailing List</div>
          <div className='text-[24px] font-bold text-[#00B0B0]'>50</div>
        </div>


        <WelcomeDrawer openDrawer={welcomeDrawerOpen} setOpen={setWelcomeDrawerOpen} setPrivateDrawerOpen={setPrivateDrawerOpen} />
        <PrivateDrawer openDrawer={privateDrawerOpen} setOpen={setPrivateDrawerOpen} />
        <BottomNav />
      </div>
    </ScrollArea>
  );
};

function WelcomeDrawer({
  openDrawer,
  setOpen,
  setPrivateDrawerOpen
}: {
  openDrawer: boolean;
  setOpen: (open: boolean) => void;
  setPrivateDrawerOpen: (open: boolean) => void;
}) {

  function ClaimReward(): void {
    setOpen(false)
    setPrivateDrawerOpen(true)
  }

  return (
    <Drawer
      open={openDrawer}
      onOpenChange={(open) => {
        setOpen(open);
      }}
      onClose={() => {
        setOpen(false);
      }}
    >
      <DrawerContent
        className={`w-full h-[60%] rounded-t-3xl p-2`}
      >
        <DrawerHeader>
          <DrawerTitle
            className="flex justify-center"
          >
            <Image src="/images/fox.svg" width={163} height={144} alt="fox" />
          </DrawerTitle>

        </DrawerHeader>
        <DrawerDescription className='text-black px-4'>
          <div className="text-center w-full">
            <div className='text-black text-[30px] font-bold'>Welcome to <span className='text-[30px] text-[#FF9B57]'>FitFox</span>!</div>
          </div>
          <div className="text-center mt-4">
            <div className='text-black text-[16px]'>Your main tasks are to stay active, using our </div>
            <div className='text-black text-[16px]'>fit apps. Be one of the first 10,000 users </div>
            <div className='text-black text-[16px]'>and earn 10,000 points for a future airdrop.</div>
          </div>
        </DrawerDescription>
        <DrawerFooter>
          <button
            className="mt-2 h-12 rounded-xl text-white font-semibold text-lg bg-[#00B0B0] w-full"
            onClick={() =>
              ClaimReward()
            }
          >
            Claim Reward
          </button>
        </DrawerFooter>
      </DrawerContent>


    </Drawer>
  );
}

function PrivateDrawer({
  openDrawer,
  setOpen,
}: {
  openDrawer: boolean;
  setOpen: (open: boolean) => void;
}) {

  const webapp = useWebApp();

  function Redeem(): void {
    const link = process.env.NEXT_PUBLIC_TELEGRAM_GROUP_LINK ? process.env.NEXT_PUBLIC_TELEGRAM_GROUP_LINK : "https://t.me/fitfoxapp";
    webapp.openTelegramLink(link);
  }

  return (
    <Drawer

      open={openDrawer}
      onOpenChange={(open) => {
        setOpen(open);
      }}
      onClose={() => {
        setOpen(false);
      }}
    >

      <DrawerContent
        className={`w-full h-[60%] rounded-t-3xl p-2`}
        style={{
          backgroundImage: 'url("/images/private_bg.png")', // Background for redeem page
          backgroundSize: 'cover', // To cover the entire background
          backgroundPosition: 'center', // Center the image
          backgroundRepeat: 'no-repeat', // Prevent repetition of the image
          backdropFilter: 'blur(48px)', // Optional: keep the backdrop blur
          color: 'white',
          border: 'none',
        }}
      >
        <DrawerHeader>
          <DrawerTitle
            className="flex flex-col text-center justify-center"
          >
            <div className='text-black text-[16px] font-semibold'>Private Den</div>
            <div className='mt-2 text-black text-[14px]'>The Private Den is your private information for our community</div>
          </DrawerTitle>
        </DrawerHeader>
        <DrawerDescription className='flex flex-col justify-center items-center text-center text-black px-4'>
          <Image src="/images/fox_star.svg" width={223} height={134} alt="fox star" />
          <div className='mt-3 text-black text-[40px] font-extrabold'>10000</div>
          <div className='mt-2 text-black text-[14px]'>Your balance</div>
        </DrawerDescription>
        <DrawerFooter>
          <button
            className="mt-2 h-12 rounded-xl text-white font-semibold text-lg bg-[#00B0B0] w-full"
            onClick={() =>
              Redeem()
            }
          >
            Redeem Now
          </button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default Game;
