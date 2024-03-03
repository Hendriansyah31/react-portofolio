import React from "react"
import ProjectItem from "./ProjectItem"
import ProjectItem2 from "./ProjectItem2"
import propertyImg from "../assets/as.png"
import profilImg from "../assets/profile.jpg"



const Projects = () => {
    return (
        <div id="projects" className="max-w-[500px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#5e1000]">Projects</h1>
            <p className="text-center py-8"></p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={propertyImg} title="Warehouse system"/>
                <ProjectItem2 img={profilImg} title2="Company profile"/>
            </div>
            </div>
    )
}

export default Projects