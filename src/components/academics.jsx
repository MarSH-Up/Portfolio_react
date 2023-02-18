import React from "react";
import AcademicItem from "./AcademicsItem";
import academics from "./data/academics";

const Academics = () =>{
    return (
        <div className="flex flex-col md:flex-column items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-10">
            {academics.map(degree => (
               <AcademicItem 
               university={degree.university}
               image={degree.image}
               link={degree.link}
               areas={degree.areas}
            />
         ))}
            </div>
        </div>
    )
};

export default Academics;