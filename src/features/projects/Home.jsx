import { useState } from "react";

import Error from "../../ui/Error";
import Filter from "../../ui/Filter";
import Loading from "../../ui/Loading";
import Pagination from "../../ui/Pagination";
import Projects from "./Projects";
import { useProjects } from "./useProjects";

function Home() {
  const { projects, isLoading, isError, error } = useProjects();
  const [filterTechnology, setFilterTechnology] = useState("");

  const projectsCount = projects?.length;

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && isError) {
    return <Error>{error.message}</Error>;
  }

  return (
    <div className="h-full overflow-y-auto bg-gray-900 px-4 py-12">
      <div className="container mx-auto space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-center text-2xl font-bold sm:text-left sm:text-4xl">
            <span className="text-white">Featured</span>{" "}
            <span className="text-orange-500">Projects</span>
          </h1>
          <Filter
            projects={projects}
            filterTechnology={filterTechnology}
            setfilterTechnology={setFilterTechnology}
          />
        </div>
        <Projects projects={projects} filterTechnology={filterTechnology} />
        <div>
          <Pagination projectsCount={projectsCount} filterTechnology={filterTechnology} />
        </div>
      </div>
    </div>
  );
}

export default Home;
