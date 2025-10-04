import React from "react";

export const PageTitle = ({ pageTitle }) => {
  return (
    <div className="h-[4rem]">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-[#050748]">
        {pageTitle}
      </h1>
    </div>
  );
};
