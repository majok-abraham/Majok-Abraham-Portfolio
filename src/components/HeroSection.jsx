import { ArrowDown } from "lucide-react"
import hero1 from "../assets/images/hero3.jpg"
import myResume from "/Resume-Majok_Abraham_Ayii.pdf"

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center">
                <div className="container max-w-4xl mx-auto flex text-center">
                    <div className="grid grid-cols-1 text-center md:grid-cols-2">
                        <div className="flex justify-center">
                                <img src={hero1} className="max-md:h-70 item-flex item-center max-md:item-center rounded-full" /> 
                        </div>

                        <div className="space-y-6">
                        
                            <h3 className="text-4xl max-md:text-2xl font-bold tracking-light">
                                
                                <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                                <span className="text-primary opacity-0 animate-fade-in-delay-1"> {" "}Majok</span>
                                <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">{" "} Abraham</span>

                            </h3> 
                            <h4 className="font-bold">Software Engineer • Cybersecurity Enthusiast</h4>
                            <p className="ml-5 text-lg md:text-xl text-muted-foreground max-2-2xl ml-auto opacity-0 animate-fade-in-delay-2">
                               A full-stack developer specializing in mordern web technologies to build secure, scalable and responsive soluations.
                            </p> 

                            <div className="md:text-5 flex max-md:flex-col opacity-0 pt-5 animate-fade-in-delay-4">
                                <a href="#contact" className="nice-button md:ml-20 max-md:px-0 max-md:ml-0">Get In Touch</a>
                                <a href={myResume} className="nice-button md:ml-10 max-md:mt-6">Download Resume</a>
                            </div>
                        </div>
                    </div>
                        
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span> Scroll </span>
                    <ArrowDown className="h-5 w-5 text-primary" />
                </div>
            </section>
}