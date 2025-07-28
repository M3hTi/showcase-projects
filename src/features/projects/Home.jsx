import { useTechnologyFilter } from "../../context/TechnologyContext";
import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import Projects from "./Projects";
import { useProjects } from "./useProjects";

function Home() {
  const { projects, isLoading, isError, error } = useProjects();

  const { filterTechnology, setFilterTechnology } = useTechnologyFilter();

  const technologies = projects?.reduce((arr, current) => {
    if (current.tech_stack) {
      arr.push(...current.tech_stack.map((t) => t.trim()));
    }

    return arr;
  }, []);

  console.log(technologies);

  const uniqueTechnologies = [...new Set(technologies)];

  console.log(uniqueTechnologies);

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
          <select
            name="technologies"
            value={filterTechnology}
            onChange={(e) => setFilterTechnology(e.target.value)}
            className="w-full cursor-pointer rounded-lg border border-gray-700 bg-gray-800/40 px-3 py-1.5 text-sm text-white backdrop-blur-sm transition-all hover:border-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 focus:outline-none sm:w-auto sm:px-4 sm:py-2 sm:text-base"
          >
            <option value="" className="bg-gray-800">
              Filter by technology
            </option>
            {Array.from({ length: uniqueTechnologies.length }, (_, i) => (
              <option
                key={i}
                value={uniqueTechnologies[i]}
                className="bg-gray-800"
              >
                {uniqueTechnologies[i]}
              </option>
            ))}
          </select>
        </div>
        <Projects projects={projects} />
      </div>
    </div>
  );
}

export default Home;
