import { useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

import { PAGE_SIZE, usePaginate } from "../context/PaginateContext";
import Button from "./Button";

function Pagination({ projectsCount, filterTechnology }) {
  const { currPage, setCurrPage } = usePaginate();
  const [searchParams, setSearchParams] = useSearchParams();

  const pagesCount = Math.ceil(projectsCount / PAGE_SIZE);

  console.log(
    "%c📝 LOG: Page count is:",
    "color: #10B981; font-weight: bold",
    pagesCount,
  );

  function handleDirection(direction) {
    if (direction === "backward") {
      setCurrPage((cp) => (cp !== 1 ? cp - 1 : 1));
      searchParams.set("page", currPage - 1);
      setSearchParams(searchParams);
    } else {
      setCurrPage((cp) => (cp !== pagesCount ? cp + 1 : pagesCount));
      searchParams.set("page", currPage + 1);
      setSearchParams(searchParams);
    }
  }

  function handlePageClick(pageNumber) {
    setCurrPage(pageNumber);
    searchParams.set("page", pageNumber);
    setSearchParams(searchParams);
  }

  useEffect(() => {
    const params = searchParams.get("page") || null;
    if (params) {
      setCurrPage(Number(params));
      setSearchParams(searchParams);
    } else {
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, setCurrPage]);

  if (pagesCount < 1 || filterTechnology) return null;

  return (
    <div className="mt-12 mb-8 flex items-center justify-center gap-2">
      {currPage !== 1 && (
        <Button
          className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-200 ${currPage === 1 ? "cursor-not-allowed border-gray-600 text-gray-500" : "border-gray-600 text-gray-300 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-500"}`}
          onClick={() => handleDirection("backward")}
        >
          <HiChevronLeft className="h-6 w-6" />
        </Button>
      )}
      <div className="flex items-center gap-1">
        {Array.from({ length: pagesCount }, (_, i) => {
          return (
            <button
              onClick={() => handlePageClick(i + 1)}
              className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg font-medium transition-all duration-200 ${i + 1 === currPage ? "border border-orange-500 bg-orange-500 text-white shadow-lg" : "border border-gray-600 text-gray-300 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-500"}`}
              key={i}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      {currPage !== pagesCount && (
        <Button
          className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-200 ${currPage === pagesCount ? "cursor-not-allowed border-gray-600 text-gray-500" : "border-gray-600 text-gray-300 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-500"}`}
          onClick={() => handleDirection("forward")}
        >
          <HiChevronRight className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}

export default Pagination;
