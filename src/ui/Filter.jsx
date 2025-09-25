import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Filter({ projects, filterTechnology, setfilterTechnology }) {
  //   const { filterTechnology, setFilterTechnology } = useTechnologyFilter();

  const [searchParams, setSearchParams] = useSearchParams();

  const uniqueTechnologies = [
    ...new Set(
      projects
        ?.flatMap((project) => project?.tech_stack || [])
        .map((t) => t?.trim()),
    ),
  ];

  console.log(uniqueTechnologies);

  function handleFilter(e) {
    if (e.target.value) {
      console.log(
        "%c🔍 DEBUG: You choose Filter:",
        "color: #8B5CF6; font-weight: bold",
        true,
      );
      searchParams.set("filterBy", e.target.value);

      setSearchParams(searchParams);
    } else {
      console.log(
        "%c🔍 DEBUG: You choose filter: ",
        "color: #8B5CF6; font-weight: bold",
        false,
      );
      searchParams.delete("filterBy");

      setSearchParams(searchParams);
    }

    setfilterTechnology(e.target.value);
  }

  useEffect(() => {
    const params = searchParams.get("filterBy") || null;
    setfilterTechnology(params);
  }, [searchParams, setfilterTechnology]);

  return (
    <div>
      <select
        name="technologies"
        value={filterTechnology}
        onChange={handleFilter}
        className="w-full cursor-pointer rounded-lg border border-gray-700 bg-gray-800/40 px-3 py-1.5 text-sm text-white backdrop-blur-sm transition-all hover:border-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 focus:outline-none sm:w-auto sm:px-4 sm:py-2 sm:text-base"
      >
        <option value="" className="bg-gray-800">
          Filter by technology
        </option>
        {Array.from({ length: uniqueTechnologies.length }, (_, i) => (
          <option key={i} value={uniqueTechnologies[i]} className="bg-gray-800">
            {uniqueTechnologies[i]}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
