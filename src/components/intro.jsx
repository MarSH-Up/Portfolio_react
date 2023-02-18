import React from "react";

const Intro = () =>{
    return (
        <div className="flex items-center justify-center 
        flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 dark:text-white font-bold">
                Mario De Los Santos
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium dark:text-white">
                Field Application Enginer & Full Stack Developer
            </p>
            <p className="text-sm max-w-xl mb-6 font-bold dark:text-white">
            I'm a former Mechatronics Engineer with +5 years in programming and studied an
            MSc motivated by biosignals. I have worked in computer science 
            for the last two years in a research line of neuroscience for Neurofeedback
            (dynamic control systems with plant delays) problems based on functional 
            Near-Infrared Spectroscopy. I've been teaching programming courses for college 
            students for the last couple of years. 
            <br />
            I am interested in blockchain development and the research of Artificial Intelligence,
            Machine Learning, and neuroimaging with a medical focus. 
            </p>
        </div>
    )
};

export default Intro;

// 