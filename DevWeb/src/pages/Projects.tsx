import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import TerminalWindow from '../components/TerminalWindow';
import projectsData from '../data/projects.json';

const Projects = () => {
    return (
        <div className='min-h-screen font-segoe text-[#e8eef2] bg-[#151719] bg-fixed' style={{ backgroundImage: 'url(images/nnnoise.svg)' }}>
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 lg:px-20">
                
                <div className="flex flex-col md:flex-row gap-8">
                    
                    <ProfileCard />

                    <TerminalWindow title="root@dreckiez:~/projects">
                        
                        <div className="mb-8 font-mono text-gray-400 text-sm border-b border-gray-800 pb-4">
                            <span className="text-emerald-400">root@dreckiez:~/projects$</span> ls -la --sort=date
                            <br/>
                            <span className="text-gray-500 text-xs mt-1 block">total {projectsData.length} directories</span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {projectsData.map((project) => (
                                <a 
                                    key={project.id} 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="group block h-full"
                                >
                                    <div className="bg-[#1e2124] border border-[#2f3136] rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all shadow-lg hover:shadow-emerald-900/10 hover:-translate-y-1 h-full flex flex-col">
                                        
                                        <div className="relative h-40 overflow-hidden bg-gray-800">
                                            <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors z-10" />
                                            <img 
                                                src={project.banner} 
                                                alt={project.title} 
                                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                                            />
                                            
                                            <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono text-emerald-300 border border-emerald-500/30 z-20">
                                                {project.semester}
                                            </div>
                                        </div>

                                        <div className="p-5 flex flex-col grow">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                                    {project.title}
                                                </h3>

                                                <i className="fa-brands fa-github text-gray-500 group-hover:text-white transition-colors"></i>
                                            </div>
                                            
                                            <div className="text-xs font-mono text-gray-500 mb-3">
                                                {project.date}
                                            </div>

                                            <p className="text-gray-400 text-sm leading-relaxed mb-4 grow">
                                                {project.summary}
                                            </p>

                                            <div className="pt-4 border-t border-gray-800 flex items-center text-xs font-mono text-emerald-500/80">
                                                <span className="mr-2">➜</span> View Source
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                    </TerminalWindow>
                </div>
            </div>
            
            <footer className='py-7 flex justify-center text-gray-600 text-sm'></footer>
        </div>
    );
};

export default Projects;