import { ArrowDown } from "lucide-react"
import hero1 from "../assets/images/hero3.jpg"

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center">
                <div className="container max-w-4xl mx-auto flex text-center">
                    <div className="grid grid-cols-1 text-center md:grid-cols-2">
                        <div className="flex justify-center">
                                <img src={hero1} className="max-md:h-70 item-flex item-center max-md:item-center rounded-full" /> 
                        </div>

                        <div className="space-y-6">
                        
                            <h1 className="text-4xl max-md:text-2xl font-bold tracking-light">
                                
                                <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                                <span className="text-primary opacity-0 animate-fade-in-delay-1"> {" "}Majok</span>
                                <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">{" "} Abraham</span>
                            </h1> 
                            <p className="ml-5 text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-2">
                                I provide end-to-end full-stack development, ensuring a cohesive and efficient build 
                                process from frontend design to backend deployment. 
                                I leverage modern technologies to build innovative solutions that make an impact.
                            </p> 

                            <div className="md:text-5 flex max-md:flex-col opacity-0 pt-5 animate-fade-in-delay-4">
                                <a href="#contact" className="nice-button md:ml-20 max-md:px-0 max-md:ml-0">Get In Touch</a>
                                <a href="" className="nice-button md:ml-10 max-md:mt-6">Download CV</a>
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