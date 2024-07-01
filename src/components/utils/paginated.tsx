import { blogData } from "@/libs/types";
import React, { EventHandler } from "react";
import { motion } from "framer-motion";

export default function Paginate({
  resData,
  setPaginated,
  actualPage,
}: {
  resData: number;
  setPaginated: EventHandler<any | number>;
  actualPage: number;
}) {
  // const [actualPage,setActualPage] = useState(0);

  const inded: React.JSX.Element[] = [];
  const elementsPerPage = 3;
  const data = Math.ceil(resData / elementsPerPage);

  const handleSetActualPageSetPagination = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const data = event.target as HTMLButtonElement;
    const value = data.value;
    setPaginated(Number(value));
    // setActualPage(Number(value))
  };

  for (let i = 1; i < data + 1; i++) {
    inded.push(
      <li className="w-8 h-8 transition-all m-2 relative z-30" key={i}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className={`w-full h-full font-chakra ${
            actualPage === i
              ? "bg-purple-900 shadow-sm shadow-gray-700 text-white"
              : "bg-white shadow-inner"
          }  shadow-slate-950`}
          key={i}
          value={i}
          onClick={handleSetActualPageSetPagination}
        >
          {i}
        </motion.button>
      </li>
    );
  }
  return (
    <ul className="fixed items-center justify-center flex bottom-0 w-1/3 m-2 bg-white rounded-xl border-2 opacity-30 hover:opacity-100 transition-opacity delay-75">
      {inded}
    </ul>
  );
}
