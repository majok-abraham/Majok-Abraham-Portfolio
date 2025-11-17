import hero1 from "../assets/images/hero1.JPG"
import myResume from "/Resume-Majok_Abraham_Ayii.pdf"

export const AboutSection = () => {

    const downloadResume = (url) => {
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("Download", "Resume-Majok_Abraham_Ayii.pdf")
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();

    }
    return <section id="about" className="py-2 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                    About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 text-center md:grid-cols-2 py-10">
                    <div className="space-y-6 h-auto ml-auto flex justify-center">
                        <img src={hero1} alt="" className="" /> 
                    </div>

                    <div className="grid grid-cols-1 px-8 gap-4 max-md:mt-5  text-left ">
                        <p className="text-muted-foreground">
                         I am a self-motivated, detail-oriented, and task-driven full-stack developer with 
                         over five years of experience working with technologies such as JavaScript, React.js, Node.js, TypeScript, 
                         Express.js, PHP, Laravel, MySQL, and WordPress. 
                         I am passionate about creating innovative, user-friendly solutions that deliver real value.
                        </p>

                        <p className="text-muted-foreground">
                           In addition to my development expertise, I am also a cybersecurity enthusiast, having successfully 
                           completed the Google Cybersecurity Certificate. This has equipped me with a solid foundation in 
                           cybersecurity principles and practical exposure to SIEM tools such as Splunk. I excel in collaborating 
                           with dynamic teams to build high-quality, secure systems while consistently identifying opportunities to 
                           enhance both performance and user experience.
                        </p>

                        <div className="md:text-5 flex max-md:flex-col items-center justify-center opacity-0 animate-fade-in-delay-4">
                            <a href="#contact" className="nice-button max-md:ml-0">Get In Touch</a>
                            <a href={myResume} className="nice-button md:ml-10 max-md:mt-10">Download Resume</a>
                        </div>

                    </div>
            </div>
        </div> 
        
    </section>
}