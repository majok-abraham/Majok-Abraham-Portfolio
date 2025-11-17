import easyvote from "/projects/easyvote.PNG";
import digipay from "/projects/digipay.PNG";
import digiResult from "/projects/digiResult.PNG";
import climaxssd from "/projects/climaxssd.PNG";
import { ExternalLink, Github, Info, InfoIcon } from "lucide-react";
import { useState } from "react";
import { Close } from "@radix-ui/react-toast";
import { IoClose } from "react-icons/io5";

const projects = [
    {
        id: 1,
        title: "EasyVote: An online Voting System",
        description: "A fast and secure user-friendly system that ensures transparency and efficiency in voting. Key features in voter registration, voter authentication during voting, automatic votes tallying, provisional results display during voting and final results diplay showing total votes and percentage of each candidate, results summary of each candidate, printing of results.",
        image: easyvote,
        tags: ["Laravel", "JavaScript", "Bootstrap", "MySQL"],
        demoUrl: "#",
        githubUrl: "#"
    },

    {
        id: 2,
        title: "Dashboard for USSD App",
        description: "A modern admin dashboard as part of a USSD application on the Digitel mobile network. The USSD app is used by students and the public to access the South Sudan primary and secondary leaving examination results via SMS upon release. Key features of the admin dashboard include excel upload of results, analysis of data, setting functionality to set prices and SMPP account details, usage and revenue report.",
        image: digiResult,
        tags: ["ExpressJS", "NodeJS", "Bootstrap", "JavaScript", "MySQL"],
        demoUrl: "",
        githubUrl: "#"
    },

     {
        id: 2,
        title: "Payment monitoring system for Internet Point-to-point clients",
        description: "An automated system to monitor point-to-point corporate internet clients. It is used to make payments for clients, payment then triggers the system to automatically enable client’s CISCO router interface connecting the client to allow internet usage. The system also notifies via email and SMS when their payment is five days from expiry, and automatically shut down their CISCO router interface when the payment expires, and send email SMS termination email.",
        image: digipay,
        tags: ["ExpressJS", "Python", "JavaScript", "TypeScript", "TypeORM", "Bootstrap", "MySQL"],
        demoUrl: "#",
        githubUrl: "#"
    },



]
export const ProjectSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

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
                            <h5 className="text-xl font-semibold mb-1">{project.title}</h5>
                          

                            </div>
                            {/* Toggle button */}
                            <button
                                onClick={() => setSelectedProject(project)}
                                className="flex flex-wrap gap-2 mb-4 text-1xl ml-3 bg-primary p-1 rounded-full"
                            >
                              <Info />Info
                            </button>
                    </div>
                ))}

                   {/* start description Modal */}
                      

{selectedProject && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
                
        
        {/* Header: Title + Close Icon */}
                    <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                        {selectedProject.title}
                    </h2>

                    <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-500 hover:text-gray-800 cursor-pointer"
                    >
                        <IoClose size={28} color="red"/>
                    </button>
                    </div>
      

            <p className="text-gray-700">
              {selectedProject.description}
            </p>

            <button
              onClick={() => setSelectedProject(null)}
              className="mt-5 p-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
            >
              Close
            </button>
           
          </div>
          
        </div>
      )}
                {/* end description modal */}

            </div>
        </div>

    </section>
}
