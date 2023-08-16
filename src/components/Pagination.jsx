import React from 'react'

const Pagination = ({pages,setCurrentPage,CurrentPage}) => {
  return (
    <ul className="flex justify-center">
      {pages.map((page) => (
        <li className={`h-[40px] aspect-square flex items-center justify-center  ${CurrentPage===page && "bg-cyan-950"}`} onClick={()=>setCurrentPage(page)} key={page}>{page}</li>
        
      ))}
    </ul>
  );
}

export default Pagination