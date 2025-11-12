import easyvote from "../../public/projects/easyvote.png";
import digipay from "../../public/projects/digipay.png";
import climaxssd from "../../public/projects/climaxssd.png";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "EasyVote: An online Voting System",
        description: "A fast and secure user-friendly system that ensures transparency and efficiency in voting",
        image: easyvote,
        tags: ["Laravel", "JavaScript", "Bootstrap", "MySQL"],
        demoUrl: "#",
        githubUrl: "#"
    },

    {
        id: 2,
        title: "General Trading company website",
        description: "A modern website for general trading company using WordPress to showcase their services",
        image: climaxssd,
        tags: ["WordPress"],
        demoUrl: "https://climaxssd.com/",
        githubUrl: "#"
    },

     {
        id: 2,
        title: "Payment System for Internet Point-to-point clients",
        description: "A payment system which automate the shuting down the CISCO interface connecting the client and send deactivation notification via SMS and Email when the payment expires. Also sends a reminder via email and SMS 5 days before payment expiry",
        image: digipay,
        tags: ["ExpressJS", "Python", "JavaScript", "TypeScript", "TypeORM", "Bootstrap", "MySQL"],
        demoUrl: "#",
        githubUrl: "#"
    },



]
export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent projects. Each project represent a specific technology and was developed with user experience and performance in mind.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xl card-hover">

                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="bg-primary text-primary-foreground rounded-full px-1"> {tag} </span>
                                    ))}
                                </div>
                            

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3 relative bottom-0">
                                        <a href={project.demoUrl}  target="__blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"> <ExternalLink /> </a>
                                        <a href={project.demoUrl}  target="__blank"  className="text-foreground/80 hover:text-primary transition-colors duration-300"> <Github /> </a>
                                </div>

                            </div>
                            </div>
                    </div>
                ))}
            </div>
        </div>

    </section>
}