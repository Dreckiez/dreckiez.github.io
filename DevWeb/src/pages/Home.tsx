import Navbar from '../components/Navbar';
import blogsData from '../data/blogs.json';
import projectsData from '../data/projects.json';
import ProfileCard from '../components/ProfileCard';
import TerminalWindow from '../components/TerminalWindow';
import LogEntry from '../components/LogEntry';
import { Link } from 'react-router-dom';

const Home = () => {

    const parseDate = (dateStr: string) => {
        const [day, month, year] = dateStr.split('-').map(Number);
        return new Date(year, month - 1, day);
    };

    const allLogs = [
        ...blogsData.map(blog => ({
            ...blog,
            type: 'Blog'
        })),
        ...projectsData.map(project => ({
            ...project,
            type: 'Project'
        }))
    ];

    allLogs.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

    return (
        <div className='min-h-screen font-segoe text-[#e8eef2] bg-[#151719] bg-fixed' style={{ backgroundImage: 'url(images/nnnoise.svg)' }}>
            <Navbar />

            
            {/* Main Layout Container */}
            <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 lg:px-20">
                
                <div className="flex flex-col md:flex-row gap-8">
                
                    <ProfileCard></ProfileCard>

                    <TerminalWindow title='root@dreckiez:~/home ヾ(•ω•`)o'>
                        {/* SHORT INTRO */}
                        <div className="font-mono mb-8">
                            <div className="text-emerald-400 mb-2">
                                <span className="text-blue-400">➜</span> <span className="text-purple-400">~</span> <span className="text-yellow-300">whoami</span>
                            </div>
                            <p className="text-xl text-[#e8eef2] leading-relaxed font-light">
                                I'm a <span className="font-bold text-white">Software Engineering Student</span> at HCMUS. 
                                I bridge the gap between <span className="text-blue-300 border-b border-blue-300/30">code</span> and <span className="text-emerald-400 border-b border-emerald-400/30">infrastructure</span>.
                                Currently exploring DevOps, Cloud, and building systems that scale.
                                <span className="block mt-4 text-gray-500 text-sm font-mono">// (｡•̀ᴗ-)✧ just trying my best</span>
                            </p>
                        </div>

                        {/* LATEST ACTIVITY */}
                        <section className="mb-10">
                            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">
                                Latest Logs
                            </h2>
                            
                            {allLogs.slice(0,3).map((log, idx) => (
                                <LogEntry key={idx} date={log.type === 'Project' ? 'Project' : log.date} title={log.title}
                                    summary={log.summary}
                                    type={log.type as "Blog" | "Project"}
                                    link={log.link}></LogEntry>
                            ))}
                            
                            <div className="mt-6 flex gap-6 text-sm font-mono">
                                <Link to="/posts" className="text-gray-500 hover:text-blue-400 transition-colors flex items-center gap-2">
                                    <span className="text-blue-500">➜</span> cd posts/
                                </Link>
                                <Link to="/projects" className="text-gray-500 hover:text-emerald-400 transition-colors flex items-center gap-2">
                                    <span className="text-emerald-500">➜</span> cd projects/
                                </Link>
                            </div>
                        </section>

                        {/* TECH STACK */}
                        <section>
                            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">
                                System Configuration
                            </h2>
                            <div className="bg-[#1e2124] rounded-lg p-5 border border-[#2f3136] shadow-inner group hover:border-gray-600 transition-colors w-full">
                                <pre className="font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap wrap-break-words">
                                    <code>
                                        <span className="text-pink-400">current_stack:</span>{'\n'}
                                        <span className="text-blue-300">  frontend:</span> <span className="text-yellow-300">[</span>"React", "NextJS", "Tailwind"<span className="text-yellow-300">]</span>{'\n'}
                                        <span className="text-blue-300">  languages:</span><span className="text-yellow-300">[</span>"TypeScript", "C++", "Python", "Java"<span className="text-yellow-300">]</span>{'\n'}
                                        <span className="text-blue-300">  learning:</span> <span className="text-yellow-300">[</span>"DevOps", "Docker", "AWS", "Linux"<span className="text-yellow-300">]</span>
                                    </code>
                                </pre>
                            </div>
                        </section>
                    </TerminalWindow>
                </div>
            </div>

            <footer className='py-7 flex justify-center text-gray-600 text-sm'>
            </footer>
        </div>
    );
};

export default Home;