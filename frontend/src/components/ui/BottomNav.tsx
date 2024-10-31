'use client';
import { useRouter, usePathname } from 'next/navigation';

const CustomBtn = ({ index, children, handleClick }: any) => {

  return (
    <div
      className="flex flex-col items-center justify-center gap-1 cursor-pointer w-[20%]"
      key={index}
      onClick={() => {
        handleClick();
      }}
    >
      {children}
    </div>
  );
};

const BottomNav = () => {
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <div
      className="fixed left-0 right-0 m-auto bottom-0 flex flex-row  items-center justify-around p-4 w-full bg-white z-10"
    >
      <CustomBtn
        handleClick={() => {
          router.push('/play');
        }}
        index={0}
      >
        <div className='relative flex justify-center flex-row items-center'>
          <img src="/images/task.svg" alt="boost" className={`w-8 h-8 ${currentPath == '/play' ? "translate-y-[-2px]" : ""}`} />

          <span className={`${currentPath == '/play' ? "text-black" : "text-black"} text-sm tracking-wider`}>
            Tasks
          </span>
        </div>
      </CustomBtn>

      <CustomBtn
        handleClick={() => {
          router.push('/list');
        }}
        index={1}
      >
        <div className='relative flex justify-center flex-col items-center'>
          <img src="/images/list.svg" alt="boost" className={`w-8 h-8 ${currentPath == '/list' ? "translate-y-[-2px]" : ""}`} />
        </div>
      </CustomBtn>

      <CustomBtn
        handleClick={() => {
          router.push('/share');
        }}
        index={2}
      >
        <div className='relative flex justify-center flex-col items-center'>
          <img src="/images/share.svg" alt="boost" className={`w-8 h-8 ${currentPath == '/share' ? "translate-y-[-2px]" : ""}`} />
        </div>
      </CustomBtn>

      <CustomBtn
        handleClick={() => {
          router.push('/account');
        }}
        index={3}
      >
        <div className='relative flex justify-center flex-col items-center'>
          <img src="/images/account.svg" alt="boost" className={`w-8 h-8 ${currentPath == '/account' ? "translate-y-[-2px]" : ""}`} />
        </div>
      </CustomBtn>
    </div>
  );
};

export default BottomNav;
