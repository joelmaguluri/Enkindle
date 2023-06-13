import Modal, { BasicModal } from "@/app/common/html/Modal";

function AddQuoteDialog({ open, onClose }: BasicModal) {
  return (
    <Modal open={open} onClose={() => onClose()} size="max-w-3xl">
      <div className="flex flex-col p-3 my-6 space-y-3">
        <h1 className="pb-2 font-sans text-xl font-semibold border-b-2 text-eerie-black border-eerie-black border-opacity-20">
          Add Quote
        </h1>
        <div className="flex flex-col w-full h-32 space-y-1">
          <p className="font-serif text-sm italic font-extralight text-battleship-gray">
            Quote
          </p>
          <textarea className="w-full h-full p-1 border-2 outline-none border-eerie-black border-opacity-30 rounded-xl" />
        </div>
        <div className="flex flex-col w-full h-12 space-y-1">
          <p className="font-serif text-sm italic font-extralight text-battleship-gray">
            author
          </p>
          <input className="w-full h-full p-1 border-2 rounded-md outline-none border-eerie-black border-opacity-30" />
        </div>
        <div className="flex flex-col w-full h-12 space-y-1">
          <p className="font-serif text-sm italic font-extralight text-battleship-gray">
            tags
          </p>
          <input className="w-full h-full p-1 border-2 rounded-md outline-none border-eerie-black border-opacity-30" />
        </div>
        <div className="flex justify-end py-2 mx-4 space-x-2">
          <button className="p-2 font-sans border-2 rounded-md border-eerie-black text-md hover:bg-eerie-black hover:text-white hover:font-semibold">
            cancel
          </button>
          <button className="p-2 font-sans font-semibold text-white rounded-md bg-opacity-90 text-md bg-eerie-black hover:bg-opacity-60">
            save
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default AddQuoteDialog;
