import { useState, useRef, useEffect, FC, ReactNode } from "react";

type QPopoverProps = {
  children: ReactNode;
  trigger: (openPopover: () => void) => ReactNode;
};

const QPopover: FC<QPopoverProps> = ({ trigger, children }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const openPopover = () => {
    setTimeout(() => {
      setIsPopoverOpen(true);
    });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node)
    ) {
      setIsPopoverOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block">
      {trigger(openPopover)}

      {isPopoverOpen && (
        <div
          ref={popoverRef}
          className="absolute left-0 transform -translate-x-[70%] mt-3 w-64 bg-white border rounded shadow-lg"
        >
          <div className="p-4">{children}</div>
        </div>
      )}
    </div>
  );
};

export default QPopover;
