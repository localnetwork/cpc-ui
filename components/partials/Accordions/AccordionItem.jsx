import { useState } from "react";
import { motion } from "framer-motion";

export default function AccordionItem({ ...item }) {
  const { Title, Description } = item?.item;
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-[30px] border-b-[3px] border-[#13100b] pb-[15px] select-none">
      <div
        className="flex items-center justify-between cursor-pointer "
        onClick={toggleAccordion}
      >
        <h3 className="text-[25px] font-secondary">{Title}</h3>
        <span
          className={`${
            isOpen ? "bg-[#9a0c16] text-white" : "bg-white"
          } rounded-full p-[5px] shadow-md`}
        >
          {!isOpen ? (
            <motion.div transition={{ duration: 0.2 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              initial={{ rotate: 45 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </motion.div>
          )}
        </span>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden mt-[15px] text-[18px] font-primary text-[#13100b]"
      >
        <div dangerouslySetInnerHTML={{ __html: Description }} />
      </motion.div>
    </div>
  );
}
