import { FC } from "react";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";

interface QBottomSheetProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const QBottomSheet: FC<QBottomSheetProps> = ({ open, onClose, children }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogBackdrop
        className="fixed inset-0 bg-black bg-opacity-50 data-[closed]:bg-opacity-0 duration-300"
        transition
      />

      <DialogPanel
        className="fixed inset-x-0 bottom-0 bg-white p-4 rounded-t-xl max-w-lg mx-auto ease duration-300 data-[closed]:translate-y-full"
        transition
      >
        {children}
      </DialogPanel>
    </Dialog>
  );
};

export default QBottomSheet;
