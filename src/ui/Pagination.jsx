import { useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

import { PAGE_SIZE, usePaginate } from "../context/PaginateContext";
import Button from "./Button";

function Pagination({ projectsCount }) {
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

  useEffect(() => {
    const params = searchParams.get("page") || null;
    if (params) {
      setSearchParams(searchParams);
    } else {
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  return (
    <div className="flex items-center text-white">
      {currPage !== 1 && (
        <Button
          className="cursor-pointer"
          onClick={() => handleDirection("backward")}
        >
          <HiChevronLeft className="h-6 w-6" />
        </Button>
      )}
      {Array.from({ length: pagesCount }, (_, i) => {
        return (
          <button
            className={`cursor-pointer ${i + 1 === currPage ? "text-blue-400" : ""}`}
            key={i}
          >
            {i + 1}
          </button>
        );
      })}

      {currPage !== pagesCount && (
        <Button
          className="cursor-pointer"
          onClick={() => handleDirection("forward")}
        >
          <HiChevronRight className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}

export default Pagination;
