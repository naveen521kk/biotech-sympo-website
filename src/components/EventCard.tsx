import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import type React from "react";

const EventCard = ({
  title,
  description,
  imgSrc,
}: {
  title: string;

  description: React.ReactNode;
  imgSrc: string;
}) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
    <div className="flex flex-col gap-2 p-4 bg-black bg-opacity-80 rounded-md border-2 border-stone-500 ">
      <div className="">
        <img src={imgSrc} className="rounded-lg"/>
        <div className="text-sm mt-4 font-bold text-white text-center md:text-xl">
          {title}
        </div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="w-full mt-6 px-3.5 py-2  bg-[#b94e09] text-white rounded-2xl text-sm md:text-lg">
              View more
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
            <Dialog.Content className="font-serif fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-orange-900/90 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
              <Dialog.Title className="text-xl text-center font-semibold leading-none tracking-wider text-white">
                {title}
              </Dialog.Title>
              <div className="text-[1.25rem] text-white max-h-[60vh] overflow-auto w-full">{description}</div>
              <Dialog.Close className="text-white absolute right-4 top-4 rounded-sm opacity-70 ring-offset-[#b94e09] transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-orange-300 data-[state=open]:text-white">
                <Cross2Icon className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  </div>
);

export default EventCard;
