import html from "../assets/skillsIcons/html-icon.svg";
import css from "../assets/skillsIcons/css.svg";
import bootstrap from "../assets/skillsIcons/bootstrap.svg";
import reactIcon from "../assets/skillsIcons/react.svg";
import typeScript from "../assets/skillsIcons/typescript.svg";
import tailwindcss from "../assets/skillsIcons/tailwindcss.svg";
import nextjs from "../assets/skillsIcons/nextjs.svg";
import nodejs from "../assets/skillsIcons/nodejs.svg";
import expressjs from "../assets/skillsIcons/express-js.png";
import pythonIcon from "../assets/skillsIcons/python.svg";
import mysqlIcon from "../assets/skillsIcons/mysql.svg";
import laravelIcon from "../assets/skillsIcons/laravel.svg";
import postgres from "../assets/skillsIcons/postgresql.svg";
import gitIcon from "../assets/skillsIcons/git.svg";
import github from "../assets/skillsIcons/github.svg";
import dockerIcon from "../assets/skillsIcons/docker.svg";
import splunk from "../assets/skillsIcons/splunk.jpeg";
import javascript from "../assets/skillsIcons/javascript.svg";
import wordpress from "../assets/skillsIcons/wordpress.svg";
import php from "../assets/skillsIcons/php.svg";

import { useState } from "react";
import { cn } from "@/lib/utils"

const skills = [
        //Frontend
        { name: <img src={html} alt="" width={70} height={70} className="text-center" />, category: "frontend"},
        { name: <img src={css} alt="" width={70} height={70} className="" />, category: "frontend"},
        { name: <img src={bootstrap} alt="" width={70} height={70} />, category: "frontend"},
         { name: <img src={javascript} alt="" width={70} height={70} />, category: "frontend"},
        { name: <img src={reactIcon} alt="" width={70} height={70} />, category: "frontend"},
        { name: <img src={typeScript} alt="" width={70} height={70} />, category: "frontend"},
        { name: <img src={tailwindcss} alt="" width={70} height={70} />, category: "frontend"},
        { name: <img src={nextjs} alt="" width={70} height={70} />, category: "frontend"},
        { name: <img src={wordpress} alt="" width={70} height={70} />,  category: "frontend",},

         //backend
        { name: <img src={nodejs} alt="" width={70} height={70} />, category: "backend"},
        { name: <img src={expressjs} alt="" width={70} height={70} />, category: "backend"},
        { name: <img src={pythonIcon} alt="" width={70} height={70} />, category: "backend"},
        { name: <img src={mysqlIcon} alt="" width={70} height={70} />, category: "backend"},
        { name: <img src={laravelIcon} alt="" width={70} height={70} />, category: "backend"},
        { name: <img src={postgres} alt="" width={70} height={70} />, category: "backend"},
        { name: <img src={php} alt="" width={70} height={70} />, category: "backend"},

        //tools&platforms
        { name: <img src={gitIcon} alt="" width={70} height={70} />, category: "tools"},
        { name: <img src={github} alt="" width={70} height={70} />, category: "tools"},
        { name: <img src={dockerIcon} alt="" width={70} height={70} />, category: "tools"},
        { name: <img src={splunk} alt="" width={70} height={70} />, category: "tools"},
]

const categories = ["all", "frontend", "backend", "tools"];
export const SkillSection = () => {

        const [activeCategory, setActiveCategory] = useState("all")

        const filteredSkills = skills.filter(
                (skill) => activeCategory === "all" || skill.category === activeCategory
        )

    return <section id="skills" className="py-24 px-6 relative bg-secondary/30">
         <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
            </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category, key) => (
                                <button key={key} 
                                onClick={() => setActiveCategory(category)}
                                className={cn("px-5 cursor-pointer rounded-full transition-colors duration-300 capitalize",
                                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-seconday/70 text-foreground hover:text-primary"                                
                                )}>
                                        {category}
                                </button>
                        ))}
                        
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                      {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card md:ml-auto p-4 rounded-lg shadow-xs card-hover">
                                <div className="item-center">
                                        {skill.name}
                                </div>
                        </div>
                      ))}
                </div>
            </div>
    </section>
}