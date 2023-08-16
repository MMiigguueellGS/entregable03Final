import React, { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import Pagination from "./Pagination";

const INITIAL_PAGE = 1;

const ResidentList = ({ residents, currentLocation }) => {
  const [CurrentPage, setCurrentPage] = useState(INITIAL_PAGE);
  //cantidad de residentes por pagina
  const RESIDENTS_PER_PAGE = 12;
  //cantidad total de paginas
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);
  //Residentes que se van a mostrar en la pagina actual
  const sliceStart = (CurrentPage - 1) * RESIDENTS_PER_PAGE;
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE;
  const residentsInPage = residents.slice(sliceStart, sliceEnd);

  //Generacion del arreglo d elas paginas que se van a mostrar
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    setCurrentPage(INITIAL_PAGE);
  }, [currentLocation]);

  return (
    <section className="grid gap-8 pb-10  justify-center items-center">
      <section className="flex flex-wrap gap-6 justify-center max-w-[1260px]">
        {/* // grid gap-7 px-2  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1200px] mx-auto */}
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentUrl={resident} />
        ))}
      </section>
      <Pagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        CurrentPage={CurrentPage}
      />
    </section>
  );
};

export default ResidentList;
