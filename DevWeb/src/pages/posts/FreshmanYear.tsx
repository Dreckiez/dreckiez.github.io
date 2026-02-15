import Navbar from '../../components/Navbar';
import NVim from '../../components/NVim';
import { Link } from 'react-router-dom';
import LevelSummaryCard from '../../components/LevelSummaryCard';

const FreshmanYear = () => {
    return (
        <div className='min-h-screen font-segoe text-[#e8eef2] bg-[#151719] bg-fixed' style={{ backgroundImage: 'url(../images/nnnoise.svg)' }}>
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 pt-32 pb-12">
                
                <div className="mb-8">
                    <Link to="/posts" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-mono transition-colors group">
                        <span className="text-blue-400 group-hover:-translate-x-1 transition-transform">➜</span> cd ..
                    </Link>
                </div>

                <NVim filename='freshman_year' title='My Freshman Year' date='09-01-2025' time='22 mins read'>
                    
                    <p className="text-xl text-gray-400 italic leading-relaxed max-w-2xl mb-8 mx-auto">
                        From sleeping through my first exam (literally) to coding a Pikachu clone and enjoying military training. A retrospective on my chaotic start at HCMUS.
                    </p>

                    <div className="mb-8 rounded-lg h-96 overflow-hidden border border-[#2f3136] shadow-lg">
                        <img src="../images/posts/HCMUS.png" alt="HCMUS Campus" className="w-full h-full object-cover object-center" />
                    </div>

                    <div className="mt-12 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400 text-base">##</span> Origin Story: Getting into HCMUS
                        </h2>
                        <hr className="border-gray-800 mb-6" />
                    </div>

                    <p>
                        I've always been decent at Physics, Math, and English, but never really passionate about them. In grade 12, I almost majored in English Language (thanks to a 7.5 IELTS), but pivoted to IT because... well, <span className="text-emerald-400 font-bold">stonks</span> 📈.
                    </p>

                    <figure className="my-8">
                        <img src="../images/posts/stonks.jpg" alt="Game Jam Shirt" className="rounded-lg border border-[#2f3136] mx-auto max-w-full md:max-w-md" />
                        <figcaption className="text-center text-sm text-gray-500 mt-2 font-mono italic">50M/month? Count me in.</figcaption>
                    </figure>

                    <p>
                        I aimed for HCMUT initially, but after hearing friends hype up <span className="text-blue-400 font-bold">HCMUS</span> as the top IT school in the south, so I yolo'd it.
                    </p>
                    <p>
                        To be honest, I didn't think I'd get in. I was literally preparing my paperwork for my second choice (HCMUT), when a friend texted me to check the scores. Miraculously, I passed by the skin of my teeth.
                    </p>

                    <div className="mt-12 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400 text-base">##</span> Semester 1: The "Wake Up" Call
                        </h2>
                        <hr className="border-gray-800 mb-6" />
                    </div>

                    <p>
                        First semester was a mix of basics:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 mb-6 pl-4 space-y-1 font-mono text-sm">
                        <li>Introduction to Programming (C++)</li>
                        <li>Introduction to IT</li>
                        <li>Soft Skills</li>
                        <li>Discrete Mathematics</li>
                    </ul>

                    <p>
                        It was a semester of firsts: First club, first short film, and... <span className="text-red-400 font-bold">first failed course</span>.
                    </p>
                    
                    <div className="pl-4 border-l-2 border-red-500/50 my-6 italic text-gray-400">
                        <p>
                            Story time: I stayed up until 3 AM preparing a cheatsheet for the <i>Intro to Programming</i> final. I woke up at <b>9 AM</b>. The exam started at <b>7:30 AM</b>.
                        </p>
                        <p className="mt-2 text-sm font-mono">
                            Result: FAILED. Reason: Overslept. (T.T)
                        </p>
                    </div>

                    <figure className="my-8">
                        <img src="../images/posts/waketfupsamurai.png" alt="Wake TF Up" className="rounded-lg border border-[#2f3136] mx-auto max-w-full md:max-w-md" />
                        <figcaption className="text-center text-sm text-gray-500 mt-2 font-mono italic">Wake the f**k up Samurai, you have an exam to fail.</figcaption>
                    </figure>

                    <p>
                        On the bright side, I decided to join a club for the first time.
                    </p>

                    <div className="pl-4 border-l-2 border-yellow-500/50 my-6 text-gray-400">
                        <p className="italic">
                            Funny story: The application form allowed me to pick 3 position preferences. I filled all three slots with <span className="font-bold text-yellow-400">"Video Editor"</span>.
                        </p>
                        <p className="mt-2 text-sm font-mono">
                            Strategy: All or Nothing. (Leveraging 4 years of experience).
                        </p>
                    </div>

                    <p>
                        It was a huge risk, but it paid off. I got accepted into the Multimedia board and met insane senpais who somehow juggle 4.0 GPAs, scholarships, and running events simultaneously. (How do they function? <span className="text-emerald-400 font-bold">orz</span>).
                    </p>

                    <p>
                        I also had to produce a short film for the <b>"Soft Skills"</b> course. Our group got assigned "Social Responsibilities"—a super vague topic. I pitched an environmental concept that became our script, and I even stepped in to act as a "Professor."
                    </p>

                     <figure className="my-8">
                        <img src="../images/posts/film.png" alt="Short Film" className="rounded-lg border border-[#2f3136] mx-auto max-w-full md:max-w-md" />
                        <figcaption className="text-center text-sm text-gray-500 mt-2 font-mono italic">A scene in the film.</figcaption>
                    </figure>

                    <div className="mt-12 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400 text-base">##</span> Semester 2: Redemption Arc
                        </h2>
                        <hr className="border-gray-800 mb-6" />
                    </div>

                    <p>
                        Key loot obtained this semester:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 mb-6 pl-4 space-y-1 font-mono text-sm">
                        <li>Advanced Programming (Pointers, baby!)</li>
                        <li>Calculus 1</li>
                        <li>General Physics 1</li>
                        <li>General Law</li>
                    </ul>

                    <p>
                        The highlight was the <b>"Advanced Programming Techniques"</b> course, where I got to recreate a childhood classic: <b>"Pikachu"</b>.
                    </p>
                    <p>
                        This was my first time dealing with an external graphics library (<span className="text-blue-300">Raylib</span>) and implementing game loops. There were plenty of head-scratching moments where I had to ask around for help, but I managed to finish it in a week.
                    </p>

                    <figure className="my-8">
                        <img src="../images/posts/Pikachu.png" alt="Pikachu Game" className="rounded-lg border border-[#2f3136] mx-auto max-w-full md:max-w-md" />
                        <figcaption className="text-center text-sm text-gray-500 mt-2 font-mono italic">My first game project.</figcaption>
                    </figure>

                    <div className="mt-10 mb-6">
                        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                            <span className="text-blue-400 text-sm">###</span> Side Quest: The Editor
                        </h3>
                        <p>
                            During this semester, a major academic competition took place. Instead of competing, I applied as a <b>Video Editor</b>. It was a fun but exhausting journey—I picked up Videography, leveled up my Motion Graphics skills, and made some new friends a long the way.
                        </p>
                    </div>

                    <div className="mt-10 mb-6">
                        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                            <span className="text-yellow-400 text-sm">###</span> Event: Design Contest
                        </h3>
                        
                        <p>
                            Near the end of the semester, a design contest popped up on my feed. I was going to ignore it until a friend from my club dragged me in. Together with a senpai, we entered the Video category.
                        </p>

                        <p>
                            We passed the first round with our shotlist, but when it came time to film for Round 2, we had a debuff:
                        </p>

                        <div className="pl-4 border-l-2 border-red-500/50 my-4 text-gray-400 italic">
                            <p>
                                I was stuck in my hometown. My team had to handle the entire shoot without me. (Carried by team <span className="not-italic text-emerald-400">orz</span>).
                            </p>
                        </div>

                        <p>
                            Despite the chaos, the final product was solid enough to secure <span className="text-yellow-400 font-bold">2nd Place!</span> 🏆
                        </p>

                        <figure className="my-8">
                            <img src="../images/posts/OutrSpace.png" alt="Capybara Project" className="rounded-lg border border-[#2f3136] mx-auto max-w-full md:max-w-md" />
                            <figcaption className="text-center text-sm text-gray-500 mt-2 font-mono italic">
                                Our prizes - Capybara boyyyyyysss.
                            </figcaption>
                        </figure>
                    </div>

                    <div className="mt-12 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400 text-base">##</span> Semester 3: The Difficulty Spike
                        </h2>
                        <hr className="border-gray-800 mb-6" />
                    </div>

                    <p>
                        The bosses got harder:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 mb-6 pl-4 space-y-1 font-mono text-sm">
                        <li>Computer Networking (Sockets & Packets)</li>
                        <li>Data Structures & Algorithms (DSA)</li>
                        <li>Calculus 2</li>
                        <li>Linear Algebra</li>
                    </ul>

                    <p>
                        Learning <b>Data Structures & Algorithms</b> was going great... except the <b><i>Time Complexity</i></b> part:
                    </p>

                    <div className="pl-4 border-l-2 border-purple-500/50 my-4 bg-purple-500/5 p-3 rounded-r-lg">
                        <code className="text-purple-300 font-mono text-lg block mb-2">
                            &gt; Calculate the Time Complexity (Big O) of this recursive function.
                        </code>
                        <p className="text-gray-400 italic text-[1rem]">
                            *Sweating profusely*
                        </p>
                        <p className="text-gray-400 italic text-[1rem]">
                            Me: "I-Is... Is it O(n²)?" (Spoiler: It wasn't).
                        </p>
                    </div>

                    <p>
                        Then came the raid bosses: <b>Calculus 2</b> and <b>Linear Algebra</b>. I held my ground until midterms, but couldn't focus in the second half. I lost track of the lectures, and the final exam hit my GPA with a <span className="text-red-400 font-bold">CRITICAL HIT</span>.
                    </p>

                    <p>
                        <b>Computer Networking</b> was the wild card. I had zero clue what was happening in the lectures (OSI? Switch?), but the practical labs were surprisingly interesting.
                    </p>

                    <div className="mt-8 mb-4">
                        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                            <span className="text-emerald-400 text-sm">&gt;&gt;&gt;</span> New Skill Acquired: Python Socket
                        </h3>
                        <p>
                            For the final project, I built a <b>Server-Client File Transfer</b> app. This forced me out of my C++ comfort zone to learn <span className="text-yellow-300 font-bold">Python</span>.
                        </p>
                    </div>

                    <figure className="my-8">
                        <img src="../images/posts/Socket.gif" alt="Socket Demo" className="rounded-lg border border-[#2f3136] mx-auto max-w-full md:max-w-md" />
                        <figcaption className="text-center text-sm text-gray-500 mt-2 font-mono italic">It works on my machine.</figcaption>
                    </figure>

                    <div className="mt-12 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400 text-base">##</span> Bonus: Military Training Arc
                        </h2>
                        <hr className="border-gray-800 mb-6" />
                    </div>

                    <p>
                        As a student, you are required to participate in military training at least once. Honestly, the 3.5-week period at the center was the most relaxing and healthiest time I've had since the start of the year.
                    </p>

                    <p>
                        I stayed in a 12-person room with two clean toilets and access to clean water for showers (luxury!). We had three meals a day, a small nap at noon, and eight hours of sleep every night.
                    </p>

                    <p>
                        I even started jogging and doing some calisthenics exercises. <span className="text-emerald-400 font-bold">Woooooo!</span> It doesn't get any healthier than that.
                    </p>

                    <div className="pl-4 border-l-2 border-green-500/50 my-6 bg-green-500/5 p-3 rounded-r-lg">
                        <h4 className="font-bold text-green-400 mb-1">🌿 Status Effect Applied: "Healthy Living"</h4>
                        <ul className="text-sm text-gray-400 font-mono space-y-1">
                            <li>+ HP Recovery (8h sleep)</li>
                            <li>+ Stamina Boost (Calisthenics)</li>
                            <li>- Stress Levels</li>
                        </ul>
                    </div>

                     <figure className="my-8">
                        <img src="../images/posts/MilitaryTraining.jpg" alt="Military Training" className="rounded-lg border border-[#2f3136] mx-auto max-w-full md:max-w-md" />
                        <figcaption className="text-center text-sm text-gray-500 mt-2 font-mono italic">Touch grass: Successful.</figcaption>
                    </figure>

                    {/* Conclusion */}
                    <div className="mt-12 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400 text-base">##</span> Wrapping Up
                        </h2>
                        <hr className="border-gray-800 mb-6" />
                    </div>

                    <p>
                        Looking back on my first year at HCMUS, it was a mix of excitement, challenges, and plenty of lessons—both academic and personal.
                    </p>

                    <LevelSummaryCard level={1} title='Freshman Year'>
                        <div>
                            <h4 className="text-emerald-400 text-sm font-bold uppercase mb-3 tracking-wider flex items-center gap-2">
                                🏆 Achievements
                            </h4>
                            <ul className="space-y-2 text-sm font-mono text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-500">✔</span> 
                                    <span><span className="text-white font-bold">Game Dev:</span> It's "Pikachu"</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-500">✔</span> 
                                    <span><span className="text-white font-bold">Silver Medal:</span> Video Contest</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-500">✔</span> 
                                    <span><span className="text-white font-bold">Touch Grass:</span> Survived Military Training</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-red-400 text-sm font-bold uppercase mb-3 tracking-wider flex items-center gap-2">
                                💀 Deaths
                            </h4>
                            <ul className="space-y-2 text-sm font-mono text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500">✘</span> 
                                    <span><span className="text-white font-bold">Overslept:</span> Missed An Exam</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500">✘</span> 
                                    <span><span className="text-white font-bold">Critical Hit:</span> GPA Bonked</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500">✘</span> 
                                    <span><span className="text-white font-bold">Confused:</span> Big-O Notation</span>
                                </li>
                            </ul>
                        </div>
                    </LevelSummaryCard>

                    <p>
                        I may not have aced everything, but the experiences, the friendships, and the skills I gained are what truly matter. And with that, I'm ready to take on whatever comes next.
                    </p>

                    <p className="mt-6 text-xl font-bold text-emerald-400">
                        Ready for Level 2 (Sophomore Year). (ง •̀_•́)ง
                    </p>

                </NVim>

                <div className="flex justify-end mt-12 mb-4">
                    <Link to="/posts/game-jam" className="group flex flex-col items-end text-right">
                        <span className="text-gray-500 text-xs font-mono mb-1">Next Post &gt;</span>
                        <span className="text-emerald-400 font-bold group-hover:text-emerald-300 transition-colors">
                            First-Ever Game Jam
                        </span>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default FreshmanYear;