import React from "react"
import {TypeAnimation} from "react-type-animation"
import {FaLinkedinIn, FaInstagram} from "react-icons/fa"
import Gambar from '../assets/tes.jpg'

const Main = () => {
    return(
    <div id="main">
        <img className="w-full h-screen object-cover object-left scale-x-[-1]" src={Gambar} alt="/" />
        <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
            <h1 className="sm:text-2xl text-4xl font-bold text-gray-900">Hello, I'm Hendriansyah, usually called Hendri. I graduated from Budiluhur University, majoring in information engineering. My experience was an internship at Tony Digital Printing for three months as a full stack developer and freelance at WAP Law Firm as a web design for one month.</h1>
            <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">I'm a
            <TypeAnimation
              sequence={[
                'Web Developer',
                4000, 
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{fontSize: "1em", paddingLeft: "5px"}}
            />
            </h2>
            <div className="flex justify-between pt-6 max-w-[80px] w-full">
    
                <a href="https://www.linkedin.com/in/vyaninsyanurmuhammad/">
                    <FaLinkedinIn className="cursor-pointer" size={20}/>
                </a>
                <FaInstagram className="cursor-pointer" size={20} />
                
            </div>
            </div>
        </div>
    </div>
    );
};
export default Main
