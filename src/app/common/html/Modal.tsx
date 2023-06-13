import React, { Fragment, ReactNode } from "react";
import { HiX } from "react-icons/hi";
import classNames from "classnames";
import { Dialog, Transition } from "@headlessui/react";

export type BasicModal = {
  open: boolean;
  onClose: () => void;
};

type ModalProps = BasicModal & {
  children: ReactNode;
  size?: string;
  closeButton?: boolean;
};

function Modal({
  open,
  onClose,
  children,
  size = "max-w-6xl",
  closeButton = true,
}: ModalProps): React.JSX.Element {
  const dialogContainerClasses = classNames(
    "min-h-screen",
    "px-4",
    "text-center"
  );
  const closeButtonContainerClasses = classNames(
    "absolute",
    "z-20",
    "right-6",
    "top-6"
  );
  const closeButtonClasses = classNames("outline-none", "focus:outline-none");
  const closeSVGClasses = classNames("text-3xl", "text-high-contrast-3");
  const centerFixClasses = classNames(
    "inline-block",
    "h-screen",
    "align-middle"
  );
  const dialogClasses = classNames(
    "inline-block",
    "w-full",
    "my-8",
    "overflow-hidden",
    "text-left",
    "align-middle",
    "transition-all",
    "transform",
    "bg-white",
    "shadow-xl",
    "rounded-2xl",
    size
  );

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        unmount
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
        <div className={dialogContainerClasses}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-10"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-10"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
          </Transition.Child>
          <span className={centerFixClasses} aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className={dialogClasses}>
              {closeButton ? (
                <div className={closeButtonContainerClasses}>
                  <button className={closeButtonClasses} onClick={onClose}>
                    <HiX className={closeSVGClasses} />
                  </button>
                </div>
              ) : null}
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
