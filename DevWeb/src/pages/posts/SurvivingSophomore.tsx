import Navbar from '../../components/Navbar';
import NVim from '../../components/NVim';
import { Link } from 'react-router-dom';
import SkillUnlockCard from '../../components/SkillUnlockCard';

const SurvivingSophomore = () => {
    return (
        <div className='min-h-screen font-segoe text-[#e8eef2] bg-[#151719] bg-fixed' style={{ backgroundImage: 'url(../images/nnnoise.svg)' }}>
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 pt-32 pb-12">
                
                <div className="mb-8">
                    <Link to="/posts" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-mono transition-colors group">
                        <span className="text-blue-400 group-hover:-translate-x-1 transition-transform">➜</span> cd ..
                    </Link>
                </div>

                <NVim filename='surviving_sophomore' title='Surviving Sophomore Year' date='25-09-2025' time='13 mins read'>
                    
                    <p className="text-xl text-gray-400 italic leading-relaxed max-w-2xl mb-8 mx-auto">
                        Reflecting on a year of extremes: from working part-time to deep-diving into frontend framework and struggling with advanced math. Here is how Sophomore year defined my path in Software Engineering.
                    </p>

                    <div className="mb-8 rounded-lg h-100 overflow-hidden border border-[#2f3136] shadow-lg">
                        <img src="../images/posts/Sep.jpg" alt="Travel Pic" className="w-full h-full object-cover object-center" />
                    </div>

                    <div className="mt-12 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400 text-base">##</span> The Part-time Job (and Why I Quit)
                        </h2>
                        <hr className="border-gray-800 mb-6" />
                    </div>

                    <p>
                        In the first semester, I did something completely out of character: I took a part-time job as a salesman. For an introvert who prefers gatekeeping TFT Emerald lobbies over socializing, this was a massive leap.
                        <span className="text-emerald-400"> ( ◡̀_◡́)ᕤ</span>
                    </p>
                    <p>
                        The job itself was a reality check. While my coworkers were amazing and patient, the work made me miserable. Having to learn products that I don't care about and promoting sales on Facebook was something that I, as a <span className="italic text-gray-400">ghost user</span>, couldn't handle that long.
                    </p>

                    <div className="pl-4 border-l-2 border-purple-500/50 my-6 bg-purple-500/5 p-3 rounded-r-lg">
                        <h4 className="font-bold text-purple-400 mb-1">📉 Status Effect: Social Battery Drain</h4>
                        <ul className="text-sm text-gray-400 font-mono space-y-1">
                            <li>- Charisma (I hate cold calling)</li>
                            <li>- Stamina (Talking to humans is hard)</li>
                            <li>+ Gold (At least I got paid)</li>
                        </ul>
                    </div>
                    
                    <figure className="my-8">
                        <img src="../images/posts/stonks.jpg" alt="Stonks meme" className="rounded-lg border border-[#2f3136] mx-auto max-w-full md:max-w-md" />
                        <figcaption className="text-center text-sm text-gray-500 mt-2 font-mono italic">But still... I got some savings out of it.</figcaption>
                    </figure>

                    <p>
                        I quit after five months, but it wasn't a waste of time. It confirmed a crucial data point about myself: I thrive on <b className="text-emerald-400">logic and systems</b>, not persuasion and marketing. I'd rather debug a segfault for 5 hours than try to sell a product for 5 minutes.
                    </p>

                    <div className="mt-12 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400 text-base">##</span> The Deep Dive
                        </h2>
                        <hr className="border-gray-800 mb-6" />
                    </div>

                    <p>
                        Second semester was quiet, but the third semester hit like a <span className="font-bold text-red-400">MOTHERF**K*NG TRUCK</span>.
                    </p>
                    <p>
                        This was my first real encounter with modern web engineering. I moved past basic HTML/CSS and started building large-scale applications with <span className="text-blue-400">React, Next.js, and TypeScript</span>.
                    </p>

                    <div className="pl-4 border-l-2 border-gray-700 my-4 italic text-gray-400">
                        <p>
                            I used to be terrified of those <b>BIG WORDS</b>. I remember staring at the file tree thinking: 
                            <span className="font-mono text-[1rem] ml-2 bg-gray-800 px-1 rounded">.tsx?</span>,
                            <span className="font-mono text-[1rem] ml-1 bg-gray-800 px-1 rounded">.jsx?</span>, 
                            a bunch of <span className="font-mono text-[1rem] ml-1 bg-gray-800 px-1 rounded">.json?</span> 
                            <br/>
                            "Where the hell did the HTML and CSS go?"
                        </p>
                    </div>

                    <p>
                        But now? I get it. The fear is gone, replaced by understanding.
                    </p>

                    <figure className="my-8">
                        <img src="../images/posts/ModernFE.webp" alt="Frontend Meme" className="rounded-lg border border-[#2f3136] mx-auto max-w-full md:max-w-md" />
                    </figure>

                    <p>
                        Simultaneously, my <i>"Applied Maths for IT"</i> course humbled me. I went from implementing basic matrix operations to coding "homemade" regression algorithms from scratch. There were nights where I stared at Ridge and Lasso regression formulas wondering if I was in the wrong major.
                    </p>

                    <div className="pl-4 border-l-2 border-red-500/50 my-4 bg-red-500/5 p-3 rounded-r-lg">
                        <h4 className="font-bold text-red-400 mb-1">💥 Critical Hit: Math Damage</h4>
                        <p className="text-gray-400 italic text-sm">
                            Staring at Lasso Regression formulas at 2 AM.<br/>
                            HP: 1/100.
                        </p>
                    </div>

                    <p>
                        But pushing through that math-heavy logic reinforced my understanding of how Computer Science got to this day <span className="text-emerald-400">from just pure math.</span>
                    </p>

                    <div className="mt-12 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400 text-base">##</span> Why Software Engineering?
                        </h2>
                        <hr className="border-gray-800 mb-6" />
                    </div>

                    <p>
                        At my university, we spend two years on general subjects before locking in a specialty. The options were diverse: Data Science, Computer Vision, AI, Cybersecurity, etc.
                    </p>
                    <p>
                        I briefly considered Computer Vision, but the math-heavy projects from last semester reminded me that while I <i>can</i> do math, I don't <i>love</i> it. I realized my dopamine hit comes from building functional systems.
                    </p>
                    
                    <blockquote className="border-l-4 border-blue-500/50 pl-4 py-2 my-8 italic text-gray-400 bg-blue-500/5 rounded-r-lg">
                        "Coding is what I'm actually good at. I love the genuine satisfaction of seeing an app I built actually <b>work</b>."
                    </blockquote>
                    
                    <div className="border border-emerald-500/30 bg-emerald-500/5 p-4 rounded-lg my-8 text-center">
                        <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-2">Class Selection</h4>
                        <div className="text-2xl font-bold text-white mb-1">Software Engineer</div>
                        <div className="text-gray-400 text-sm italic mb-4">"Builder of Tools. Automator of Workflows."</div>
                        <button className="bg-emerald-600/20 text-emerald-300 border border-emerald-500/50 px-4 py-1 rounded text-sm hover:bg-emerald-600/30 transition-colors cursor-default">
                            [ CONFIRMED ]
                        </button>
                    </div>

                    <p>
                        I chose <span className="text-emerald-400 font-bold">Software Engineering</span> because it fits my mindset. I want to build tools, automate workflows, and create tangible products.
                    </p>

                    <div className="mt-12 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400 text-base">##</span> Next Target: DevOps
                        </h2>
                        <hr className="border-gray-800 mb-6" />
                    </div>

                    <p>
                        Now that I’ve committed to the path, I’m narrowing my focus. I plan to specialize in <span className="text-emerald-400 font-bold">DevOps</span> for my junior year.
                    </p>

                    <SkillUnlockCard>
                        <div>
                            <h4 className="text-gray-400 text-sm font-bold uppercase mb-2 tracking-wider">Main Quests</h4>
                            <ul className="space-y-2 text-sm font-mono text-gray-300">
                                <li>🐳 <span className="text-blue-300">Docker:</span> Containerization</li>
                                <li>☸️ <span className="text-blue-300">K8s:</span> Orchestration</li>
                                <li>☁️ <span className="text-orange-300">AWS:</span> Cloud Infrastructure</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-gray-400 text-sm font-bold uppercase mb-2 tracking-wider">Objective</h4>
                            <p className="text-sm text-gray-400 italic leading-relaxed">
                                "Automate everything. If I have to do it twice, write a script."
                            </p>
                        </div>
                    </SkillUnlockCard>

                    <p>
                        Junior year is going to be intense, but at least now I know exactly where I'm going.
                    </p>

                    <p className="mt-6 text-xl font-bold text-emerald-400">
                        Loading Level 3 (Junior Year)... <span className="animate-pulse">_</span>
                    </p>
                </NVim>

                <div className="flex justify-between items-center mt-12 mb-4">
                    <Link to="/posts/game-jam" className="group flex flex-col items-start text-left">
                        <span className="text-gray-500 text-xs font-mono mb-1">&lt; Prev Post</span>
                        <span className="text-blue-400 font-bold group-hover:text-blue-300 transition-colors">
                            First-Ever Game Jam
                        </span>
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default SurvivingSophomore;