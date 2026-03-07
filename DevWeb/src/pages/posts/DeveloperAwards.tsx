import Navbar from '../../components/Navbar';
import NVim from '../../components/NVim';
import { Link } from 'react-router-dom';
import MissionCard from '../../components/MissionCard';

const DeveloperAwards = () => {
    return (
        <div className='min-h-screen font-segoe text-[#e8eef2] bg-[#151719] bg-fixed' style={{ backgroundImage: 'url(../images/nnnoise.svg)' }}>
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 pt-32 pb-12">
                
                <div className="mb-8">
                    <Link to="/posts" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-mono transition-colors group">
                        <span className="text-blue-400 group-hover:-translate-x-1 transition-transform">➜</span> cd ..
                    </Link>
                </div>

                <NVim filename='developer_awards' title='🏆 2nd Place at the Developer Awards' date='03-03-2026' time='22 mins read'>
                    
                    <p className="text-xl text-gray-400 text-center italic leading-relaxed max-w-2xl mb-8 mx-auto">
                        How a two-minute README fix turned into learning Angular, fighting backend schemas, and building a full-stack app against the clock for an open-source contest.
                    </p>

                    <div className="mb-8 rounded-lg h-96 overflow-hidden border border-[#2f3136] shadow-lg">
                        <img src="../images/posts/FTB_Developer_Awards.png" alt="HCMUS Campus" className="w-full h-full object-cover object-center" />
                    </div>

                    <div className="mt-12 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400 text-base">##</span> The Accidental Side Quest
                        </h2>
                        <hr className="border-gray-800 mb-6" />
                    </div>

                    <p>
                        Happy Lunar New Year! It's been about a week since Tet, so I hope everyone is doing well, recovering from the fried Banh Tet food comas, and successfully surviving the annual family interrogations about whether you have a significant other yet.
                    </p>
                    <p>
                        I'm currently three weeks into the second semester of my third year (Junior year). Right now, I'm unofficially studying DevOps. Since I couldn't enroll in the official course, I decided to build my own curriculum. Step one: convert my old HTML/CSS static portfolio to React, wire up GitHub Actions for CI/CD, and eventually Dockerize the whole thing.
                    </p>

                    <figure className="my-8">
                        <img src="../images/posts/newyear.jpg" alt="New Year meme" className="rounded-lg border border-[#2f3136] mx-auto max-w-full md:max-w-md" />
                    </figure>

                    <p>
                        During the migration, I had a fleeting idea: <i>"What if I built a centralized dashboard to track my website deployments?"</i> It was a cool thought, but it felt a bit too simple, so I put it aside and continued the React conversion.
                    </p>
                    <p>
                        While updating the website, I realized it had been a while since I last wrote a README, and my recent projects were completely missing them. I headed over to the <b>"For the Badge"</b> website to grab some slick SVG badges to spruce them up. Right there on their site, I spotted a section for a <b>Developer Awards</b> contest.
                    </p>

                    <div className="bg-gray-800/50 border border-gray-700/50 p-4 rounded-lg my-6 relative overflow-hidden">
                        <div className="absolute top-2 right-3 text-gray-600/20 text-4xl">📜</div>
                        
                        <h3 className="text-yellow-400 font-bold font-mono text-sm uppercase mb-2 tracking-wider">
                            Mission Objective
                        </h3>
                        <p className="italic text-gray-300 border-l-2 border-yellow-500/30 pl-3">
                            "Build an open source project committed to protecting user data and privacy"
                        </p>
                        <div className="mt-3 text-sm text-gray-500 font-mono">
                            Constraint: 13 Days (When I found it). | Mode: Solo Run.
                        </div>
                    </div>

                    <p>
                        I rarely go solo in coding contests, let alone open-source ones. But combining my earlier "Deployment Dashboard" idea with the "Privacy" theme, they aligned perfectly. What if the dashboard didn't track deployments anymore, but instead scanned your repositories for leaked API keys and PII (Personally Identifiable Information)?
                    </p>
                    <p>
                        And just like that, <span className="text-emerald-400 font-bold">PrivaCI</span> was born.
                    </p>

                    <div className="pl-4 border-l-2 border-red-500/50 my-8 bg-red-500/5 p-3 rounded-r-lg">
                        <h4 className="font-bold text-red-400 mb-1">🤡 Status Effect Applied: "Irony"</h4>
                        <p className="text-sm text-gray-400 font-mono">
                            Fun fact: While building this tool to prevent people from leaking secrets, I accidentally leaked my own GitHub Client Secret in a commit. 
                            <br/><span className="italic text-gray-500">(Don't worry, I disabled it immediately. You can't use it.)</span>
                        </p>
                    </div>

                    <div className="mt-12 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400 text-base">##</span> Learning Angular (React PTSD)
                        </h2>
                        <hr className="border-gray-800 mb-6" />
                    </div>

                    <p>
                        I decided to use <span className="text-red-500 font-bold">Angular</span> for this, since its strength in building SPAs (Single Page Applications) fit the Dashboard theme perfectly. However, getting familiar with it felt exactly like learning React for the first time. I initialized the project and was immediately assaulted by a million configuration options. 
                    </p>

                    {/* Angular Code Panic */}
                    <div className="bg-[#1e1e1e] border border-gray-700 p-4 rounded-lg my-6 font-mono text-sm overflow-x-auto">
                        <div className="flex gap-1.5 mb-3">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-gray-400">
                            <span className="text-gray-500">// My brain processing Angular:</span><br/>
                            <span className="text-pink-400">import</span> &#123; <span className="text-blue-400">Component</span>, <span className="text-blue-400">inject</span>, <span className="text-blue-400">Input</span>, <span className="text-blue-400">Output</span> &#125; <span className="text-pink-400">from</span> <span className="text-green-400">'@angular/core'</span>;<br/>
                            <span className="text-pink-400">import</span> &#123; <span className="text-blue-400">firstValueFrom</span> &#125; <span className="text-pink-400">from</span> <span className="text-green-400">'rxjs'</span>;<br/>
                            <br/>
                            <span className="text-gray-500">// Wait, what file does what again??</span>
                        </div>
                    </div>

                    <figure className="my-8">
                        <img src="../images/posts/angular.webp" alt="Angular meme" className="rounded-lg border border-[#2f3136] mx-auto max-w-full md:max-w-md" />
                    </figure>

                    <p>
                        The hardest part wasn't the syntax, but bridging the gap between backend models and the frontend interface. In past projects, I usually either worked strictly on the frontend or built the backend <i>first</i>, meaning I already had a clear vision of what the API responses would look like. 
                    </p>
                    <p>
                        This time, I did it backwards: I went for the UI design first, using "dumb" data for the mockups. Trying to reverse-engineer my frontend to be strictly consistent with the real backend responses later took me way longer than I'd like to admit.
                    </p>

                    <div className="mt-12 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400 text-base">##</span> The Backend Boss Fight
                        </h2>
                        <hr className="border-gray-800 mb-6" />
                    </div>

                    <p className="text-lg text-gray-300 font-medium mb-3">
                        If the frontend was the tutorial level, the backend was the actual Boss Fight.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        PrivaCI couldn't just be a simple CRUD application. To make the scanner work, I had to architect a custom <span className="text-blue-400 font-bold">execution engine</span> capable of handling asynchronous repository cloning, child-process CLI wrappers, and massive data parsing all at once.
                    </p>
                    
                    {/* Terminal Separator */}
                    <div className="flex items-center gap-4 text-xs font-mono mt-8 mb-2">
                        <span className="uppercase tracking-widest text-gray-500">System_Architecture_Breakdown</span>
                        <div className="h-px bg-[#2f3136] flex-1"></div>
                    </div>

                    <div className="space-y-6 mb-8 mt-6">
                        
                        {/* Boss Phase 1 */}
                        <div className="bg-[#1e2124] border border-[#2f3136] rounded-lg overflow-hidden shadow-md">
                            <div className="bg-gray-800/40 px-4 py-2 border-b border-[#2f3136] flex items-center gap-3">
                                <span className="text-blue-400 font-mono text-xs font-bold bg-blue-500/10 px-2 py-0.5 rounded">PHASE 01</span>
                                <h3 className="text-white font-bold text-sm">Secure Git Cloning</h3>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    Getting the OAuth token was easy, but securely decrypting those access tokens at runtime and injecting them into <code className="text-emerald-400 bg-[#151719] px-1.5 py-0.5 border border-[#2f3136] rounded font-mono text-xs">git clone</code> child processes without accidentally leaking them in error logs was something else.
                                </p>
                                <div className="bg-[#151719] border-l-2 border-red-500/50 rounded-r p-3 text-xs font-mono text-gray-400">
                                    <span className="text-red-400 font-bold mr-2">[WARN]</span>
                                    Bizarre performance issue: timeout spiked from 60s to 5+ mins. Had to massively bump limits to prevent crashes.
                                </div>
                            </div>
                        </div>

                        {/* Boss Phase 2 */}
                        <div className="bg-[#1e2124] border border-[#2f3136] rounded-lg overflow-hidden shadow-md">
                            <div className="bg-gray-800/40 px-4 py-2 border-b border-[#2f3136] flex items-center gap-3">
                                <span className="text-emerald-400 font-mono text-xs font-bold bg-emerald-500/10 px-2 py-0.5 rounded">PHASE 02</span>
                                <h3 className="text-white font-bold text-sm">The Gitleaks Wrapper</h3>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    At first, I used <code className="text-emerald-400 bg-[#151719] px-1.5 py-0.5 border border-[#2f3136] rounded font-mono text-xs">gitleaks detect</code>, but since it was deprecated, I switched to <code className="text-emerald-400 bg-[#151719] px-1.5 py-0.5 border border-[#2f3136] rounded font-mono text-xs">gitleaks dir</code> (now that I rechecked the docs, I should have used <code className="text-emerald-400 bg-[#151719] px-1.5 py-0.5 border border-[#2f3136] rounded font-mono text-xs">gitleaks git</code>—not sure how I missed that!). 
                                </p>
                                <div className="bg-[#151719] border-l-2 border-yellow-500/50 rounded-r p-3 text-xs font-mono text-gray-400">
                                    <span className="text-yellow-400 font-bold mr-2">[LOG]</span>
                                    Because <code className="text-emerald-400 bg-[#1e2124] px-1 py-0.5 rounded">dir</code> scans aggressively, I had to physically move the <code className="text-emerald-400 bg-[#1e2124] px-1 py-0.5 rounded">.git</code> folder out of the repo and create an allow-list to avoid false positives.
                                </div>
                            </div>
                        </div>

                        {/* Boss Phase 3 */}
                        <div className="bg-[#1e2124] border border-[#2f3136] rounded-lg overflow-hidden shadow-md">
                            <div className="bg-gray-800/40 px-4 py-2 border-b border-[#2f3136] flex items-center gap-3">
                                <span className="text-purple-400 font-mono text-xs font-bold bg-purple-500/10 px-2 py-0.5 rounded">PHASE 03</span>
                                <h3 className="text-white font-bold text-sm">SQL Schemas</h3>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Designing the actual database structure was manageable, but writing the massive, multi-layered PostgreSQL queries to process all that data was a complete brain-bender.
                                </p>
                            </div>
                        </div>

                    </div>

                    <blockquote className="border-l-4 border-blue-500/50 pl-4 py-3 my-8 italic text-gray-400 bg-blue-500/5 rounded-r-lg">
                        "I gotta admit: even though I can do Full Stack, I am definitely still a Frontend main. Designing backend schemas, handling server-side file systems, and writing complex queries is heavily outside my comfort zone."
                    </blockquote>

                    <div className="mt-12 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400 text-base">##</span> The Tet Holiday Crunch
                        </h2>
                        <hr className="border-gray-800 mb-6" />
                    </div>

                    <p>
                        Because it was the Tet holiday, I naturally slacked off. The first 11 days of the contest were spent enjoying the break, eating, and taking it easy. 
                    </p>
                    <p>
                        Which meant I had to absolutely speedrun the core infrastructure in the last 48 hours. I went into full lockdown mode, coding aggressively while fueled by leftover Tet snacks and pure panic. By the day before the deadline, the scanning logic was finally behaving, and I thought I was in the clear.
                    </p>

                    <figure className="my-8">
                        <img src="../images/posts/This is fine.webp" alt="Panic meme" className="rounded-lg border border-[#2f3136] mx-auto max-w-full md:max-w-md" />
                    </figure>

                    <div className="flex flex-col items-center justify-center my-24 space-y-6 select-none">
                        {/* Fading line down */}
                        <div className="w-px h-16 bg-linear-to-b from-[#2f3136] to-transparent"></div>
                        
                        {/* Ominous Text */}
                        <div className="text-center font-mono">
                            <p className="text-gray-500 italic text-sm mb-2">"He was, in fact, not fine."</p>
                            <p className="text-red-500/50 text-xs tracking-widest uppercase animate-pulse">
                                [ Connection Lost ]
                            </p>
                        </div>
                        
                        {/* Red warning line pointing to the bug */}
                        <div className="w-px h-16 bg-linear-to-t from-red-500/50 to-transparent"></div>
                    </div>

                    <div className="border-l-2 border-red-500/50 my-8 bg-[#1e2124] rounded-r-lg shadow-lg overflow-hidden">
                        <div className="bg-red-500/10 px-5 py-3 border-b border-red-500/10">
                            <h4 className="font-bold text-red-400 flex items-center gap-2 text-lg mb-0">
                                <span>💥</span> Critical Event: The 6-Hour Bug
                            </h4>
                        </div>
                        
                        <div className="p-5 space-y-4 text-sm text-gray-300">
                            <p>
                                With only <b className="text-red-400">5 to 6 hours left</b> on the clock, a massive bug brought everything to a halt. 
                            </p>

                            {/* Pseudo-Terminal Trace Log - Fixed Alignment */}
                            <div className="bg-[#151719] border border-[#2f3136] p-4 rounded-md font-mono text-xs space-y-3 shadow-inner">
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                    <div className="w-24 shrink-0 text-blue-400 font-bold mt-0.5">[ACTION]</div>
                                    <div className="text-gray-400 leading-relaxed">Dynamically generating a temporary Git config and setting <code className="text-emerald-400">GIT_CONFIG_GLOBAL</code> to pass OAuth tokens.</div>
                                </div>
                                
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                    <div className="w-24 shrink-0 text-yellow-400 font-bold mt-0.5">[ERROR_01]</div>
                                    <div className="text-gray-400 leading-relaxed">Overwrote my local machine's Git credentials. Logged me out of GitHub in my own terminal. Could not <code className="text-emerald-400">git push</code> my project.</div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                    <div className="w-24 shrink-0 text-red-500 font-bold mt-0.5">[ERROR_02]</div>
                                    <div className="text-gray-400 leading-relaxed">Re-authenticated my terminal to push code {"->"} backend's token injection completely broke down as a result.</div>
                                </div>
                            </div>

                            <p className="leading-relaxed italic text-gray-500 pt-2">
                                Combine that with the sudden 5-minute timeout spikes, and trying to untangle asynchronous child-process auth bugs while watching a countdown timer was a special kind of stress.
                            </p>
                        </div>
                    </div>

                    <figure className="my-8">
                        <img src="../images/posts/oppenheimer.webp" alt="Oppenheimer meme" className="rounded-lg border border-[#2f3136] mx-auto max-w-full md:max-w-md" />
                        <figcaption className="text-center text-sm text-gray-500 mt-2 font-mono italic">Oh... FU-</figcaption>
                    </figure>

                    <p>
                        Due to the extreme time crunch and those final bugs, I had to make the painful decision to drop several planned features just to ship a working MVP:
                    </p>

                    <ul className="list-disc list-inside text-gray-400 leading-relaxed mb-6 pl-4 space-y-1 font-mono text-sm">
                        <li>GitHub Webhooks for auto-scanning on push</li>
                        <li>User Custom Allow-lists (ignoring specific folders/files)</li>
                        <li>Proper deployment to Vercel + Render</li>
                    </ul>                    

                    <p>
                        I submitted what I had—bugs patched together with duct tape, local hosting instructions in the README—and hoped for the best.
                    </p>

                    <div className="mt-12 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400 text-base">##</span> Mission Debrief
                        </h2>
                        <hr className="border-gray-800 mb-6" />
                    </div>

                    <p>
                        Despite the feature cuts, the messy backend, and the Tet holiday panic, the core idea resonated with the judges. 
                    </p>

                    <MissionCard mission_name='For The Badge: Developer Awards' rating='A'>
                        <div>
                            <h4 className="text-blue-400 text-sm font-bold uppercase mb-3 tracking-wider">
                                Objectives
                            </h4>
                            <ul className="space-y-2 text-sm font-mono text-gray-300">
                                <li className="flex items-center gap-2">
                                    <span className="text-emerald-500">✔</span> Build an Open Source tool
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-emerald-500">✔</span> Integrate Gitleaks
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-500">✘</span> Deploy to Vercel/Render
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-purple-400 text-sm font-bold uppercase mb-3 tracking-wider">
                                Final Result
                            </h4>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center bg-gray-800/50 px-3 py-2 rounded border border-gray-700/50">
                                    <span className="text-sm text-gray-300">Placement</span>
                                    <span className="text-xs font-bold text-yellow-400">🥈 2nd Place (Runner-Up)</span>
                                </div>
                                <div className="flex justify-between items-center bg-gray-800/50 px-3 py-2 rounded border border-gray-700/50">
                                    <span className="text-sm text-gray-300">Angular XP</span>
                                    <span className="text-xs font-bold text-emerald-400">LEVEL UP</span>
                                </div>
                            </div>
                        </div>
                    </MissionCard>

                    <p>
                        I walked away with 2nd Place! It was a chaotic, stressful, but incredibly rewarding side quest. Now, it's time to get back to the main quest: finishing my actual CI/CD pipeline and mastering Docker.
                    </p>

                    <p className="mt-6 text-xl font-bold text-emerald-400">
                        Until the next bug. (⌐■_■)
                    </p>


                </NVim>

                <div className="flex justify-between items-center mt-12 mb-4">
                    <Link to="/posts/surviving-sophomore" className="group flex flex-col items-start text-left">
                        <span className="text-gray-500 text-xs font-mono mb-1">&lt; Prev Post</span>
                        <span className="text-blue-400 font-bold group-hover:text-blue-300 transition-colors">
                            Surviving Sophomore Year
                        </span>
                    </Link>

                    {/* <Link to="/posts/surviving-sophomore" className="group flex flex-col items-end text-right">
                        <span className="text-gray-500 text-xs font-mono mb-1">Next Post &gt;</span>
                        <span className="text-emerald-400 font-bold group-hover:text-emerald-300 transition-colors">
                        
                        </span>
                    </Link> */}
                </div>

            </div>
        </div>
    );
}

export default DeveloperAwards