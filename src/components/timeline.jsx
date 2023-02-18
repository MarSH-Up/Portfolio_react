import React from "react";
import timeline from "./data/timeline";
import TimelineItem from "./timelineItem"
import Title from "./title";

const Timeline = () =>{
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
            <Title>Timeline</Title>
            {timeline.map(item => (
                <TimelineItem 
                    year={item.year}
                    title={item.title}
                    company={item.company}
                    link={item.link}
                    duration={item.duration}
                    description1={item.description1} 
                    description2={item.description2}
                />
            ))}
            </div>
        </div>
    )
};

export default Timeline;