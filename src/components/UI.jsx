import { atom, useAtom } from "jotai";

export const currentPageAtom = atom("intro");
export const UI = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center 
      duration-500
      ${currentPage === "home" ? "" : "opacity-0"}`}
      >
        <div className="h-[66%]"></div>
        <button
          onClick={() => setCurrentPage("store")}
          className="pointer-events-auto py-4 px-8 bg-orange-400 text-white font-black rounded-full hover:bg-orange-600 cursor-pointer transition-colors duration-500"
        >
          ENTER
        </button>
      </section>

      {/* 在第二个页面添加返回按钮 */}
      <section
        className={`fixed bottom-10 right-10 pointer-events-auto 
        ${currentPage === "store" ? "" : "opacity-0"} 
        transition-opacity duration-500`}
      >
        <button
          onClick={() => setCurrentPage("home")}
          className="py-4 px-8 bg-blue-400 text-white font-black rounded-full hover:bg-blue-600 cursor-pointer transition-colors duration-500"
        >
          BACK
        </button>
      </section>
    </div>
  );
};

// export const UI = () => {
//   const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
//   return (
//     <div className="fixed inset-0 pointer-events-none">
//       <section
//         className={`flex w-full h-full flex-col items-center justify-center
//       duration-500
//       ${currentPage === "home" ? "" : "opacity-0"}`}
//       >
//         <div className="h-[66%]"></div>
//         <button
//           onClick={() => setCurrentPage("store")}
//           className="pointer-events-auto py-4 px-8 bg-orange-400 text-white font-black rounded-full hover:bg-orange-600 cursor-pointer transition-colors duration-500"
//         >
//           ENTER
//         </button>
//       </section>
//     </div>
//   );
// };
