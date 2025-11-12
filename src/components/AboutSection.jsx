import hero1 from "../assets/images/hero1.jpg"

export const AboutSection = () => {
    return <section id="about" className="py-2 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                    About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 text-center md:grid-cols-2">
                    <div className="space-y-6 h-auto ml-auto flex justify-center">
                        <img src={hero1} alt="" className="" /> 
                    </div>

                    <div className="grid grid-cols-1 px-10 gap-4 max-md:mt-5  text-left ">
                        <p className="text-muted-foreground">
                            I am a self-motivated, detail-oriented, flexible, and task-driven full stack developer
                             with over five years of experience specializing in technologies like JavaScript, Reacj.JS, NodeJs, TypeScript, ExpressJS, PHP, Laravel, MySQL, 
                             and WordPress with a strong passion for creating innovative user-friendly solutions.
                        </p>

                        <p className="text-muted-foreground">
                            Skilled in collaborating with dynamic teams to build high-quality websites
                             and identify opportunities to enhance the user experience.
                        </p>

                        <div className="md:text-5 flex max-md:flex-col items-center justify-center opacity-0 animate-fade-in-delay-4">
                            <a href="" className="nice-button max-md:ml-0">Get In Touch</a>
                            <a href="" className="nice-button md:ml-10 max-md:mt-10">Download CV</a>
                        </div>

                    </div>
            </div>
        </div> 
        
    </section>
}