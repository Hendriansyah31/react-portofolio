import React from "react";
import WorkItem from "./WorkItem";

const data = [
    {
        year: 2022,
        title: "Full Stack Developer",
        duration: "3 Mouth", 
        details: "Created, communicated, and managed project plans. Analyzed, designed and developed the company's internal systems and applications. Maintained up-to-date knowledge of all the company's internal systems and applications. Doing work using technology including PHP, Java, Bootstrap, MySQL, jQuery."
    },
    {
        year: 2022,
        title: "Web Design",
        duration: "1 Mouth",
        details: "Designing and creating a Company website profile with attention to a visually appealing and user-friendly web layout and incorporating corporate branding and visual identity with technology WordPress."
    },

]

const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#5e1000]">Work</h1>
            {data.map((item, idx) => (
                <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>     
            ))}
        </div>
    )
}

export default Work