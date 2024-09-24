"use client";

export default function ChatBubble({
  text,
  title,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="relative max-w-full sm:max-w-lg w-full p-2 sm:p-4 bg-white text-black rounded-3xl tracking-wider shadow-inner from-gray-100 to-gray-400 drop-shadow-lg">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-[6px] sm:-translate-x-full">
        <div className="w-0 h-0 shadow-black border-t-[14px] sm:border-t-[15px] border-t-transparent border-b-[10px] sm:border-b-[15px] border-b-transparent border-r-[24px] sm:border-r-[30px] border-r-white"></div>
      </div>
      <div className="flex flex-col relative z-10">
        <div className="sm:text-xl text-lg font-bold text-slate-800 font-sans">
          {title}
        </div>
        <div className="sm:text-sm text-xs font-medium font-sans rounded-2xl text-shadow-md">
          {text}
        </div>
      </div>
    </div>
  );
}
