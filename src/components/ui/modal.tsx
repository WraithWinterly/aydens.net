import { Dispatch, SetStateAction } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { IoClose } from "react-icons/io5";
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
}
export default function Modal({
  children,
  isOpen,
  setIsOpen,
  title,
}: ModalProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-fit transform overflow-hidden rounded-2xl bg-black/50 p-2 text-left align-middle text-white shadow-xl backdrop-blur-md transition-all">
                  <Dialog.Title as="h4" className="leading-6 text-white">
                    <div className="flex items-center justify-between text-white">
                      <h4 className="px-4">{title}</h4>
                      <button className="pr-2">
                        <button
                          className="rounded-full px-1 py-1 text-gray-400 transition-colors hover:bg-gray-400/30 hover:text-white"
                          onClick={() => setIsOpen(false)}>
                          <IoClose size={32} />
                        </button>
                      </button>
                    </div>
                  </Dialog.Title>
                  <div className="p-4">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
