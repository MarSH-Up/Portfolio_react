import React from "react";

const academicItem = ({university, image, areas, link}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 rounded-md overflow-hidden dark:border-slate-50"
    >
      <img 
        src={image}
        alt='academics'
        className="w-full h-auto md:h-auto object-cover cursor-pointer"
      />
      <div className="w-full p-4">
          <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{university}</h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
              {areas.map(item =>(
                  <span className="inline-block px-2 py-1 font-semibold border-2
                  border-stone-900 rounded-md dark:border-slate-50">
                      {item}
                  </span>
              ))}
          </p>
      </div>
    </a>
  )
};

export default academicItem;
