import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import TerminalWindow from '../components/TerminalWindow';

const About = () => {
  return (
    <div className='min-h-screen font-segoe text-[#e8eef2] bg-[#151719] bg-fixed' style={{ backgroundImage: 'url(images/nnnoise.svg)' }}>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 lg:px-20">
          
        <div className="flex flex-col md:flex-row gap-8">
          <ProfileCard />

          <TerminalWindow title="root@dreckiez:~/about/README.md">
              
            <div className="space-y-8 text-[#e8eef2] leading-relaxed text-lg">
                
              {/* Section: Backstory */}
              <section>
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-blue-500">#</span> Backstory
                </h2>
                <div className="space-y-4 text-gray-300">
                  <div className='flex justify-center my-10'>
                    <img src="images/kaomoji-2.gif" alt="" />
                  </div>
                  <p>
                    こんにちは, my name is Dreckiez. I'm a Software Engineering major at Ho Chi Minh University of Science (HCMUS).
                  </p>
                  <p>
                    My journey started with <span className="text-blue-300 font-semibold">Frontend Development</span> (ReactJS, NextJS). I genuinely enjoy the engineering side of it—coding the UI, managing state, and making features come alive. However, I often hit a wall when it came to the <i>artistic</i> side. I struggled to be "creative" with designs and color palettes.
                  </p>
                  <p>
                    That challenge pushed me to explore <span className="text-emerald-400 font-bold">DevOps</span> as a way to grow. It started as curiosity, but I realized that understanding the infrastructure makes me a better developer overall. I like the logic of automation and the satisfaction of seeing a deployment pipeline run green.
                  </p>
                  <p>
                    I still enjoy coding the frontend, but adding DevOps to my skillset allows me to focus on building robust systems without getting stuck on the visuals. I might not be a designer, but I am definitely a builder.
                    <span className="inline-block ml-2 text-emerald-400 font-mono text-sm"> ( •̀ ω •́ )✧</span>
                  </p>
                </div>
              </section>

              {/* Section: The "Hand-Crafted" Story */}
              <section>
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-yellow-500">#</span> About This Site
                </h2>
                
                {/* Styled Blockquote */}
                <blockquote className="border-l-4 border-yellow-500/50 pl-4 italic text-gray-400 bg-yellow-500/5 p-4 rounded-r-lg mb-4">
                  "I started by building websites the hard way—hand-coding HTML for every single page just to master the fundamentals."
                </blockquote>
                
                <div className="text-gray-300 space-y-4">
                  <p>
                    That was Version 1.0. Now that I’ve leveled up my skills, I rebuilt this site using <span className="text-blue-300 font-semibold">ReactJS</span>.
                  </p>
                  <p>
                    While I work with Next.js and dynamic backends in my projects, this specific site is <span className="text-yellow-300">static</span> by design. I host it on <b>GitHub Pages</b> to keep it free (because student budgets are real). It proves you don't need a complex backend or monthly server fees to ship something cool.
                    <span className="inline-block ml-2 text-sm text-green-400 font-mono"> // ( $_$ ) savings!</span>
                  </p>
                </div>
              </section>

              {/* Section: Interests / Stats */}
              <section>
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-purple-500">#</span> Character Stats
                </h2>
                
                {/* Grid for interests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="bg-[#151719] p-4 rounded border border-[#2f3136] hover:border-purple-500/30 transition-colors">
                    <h3 className="text-white font-bold mb-1">🎮 Games</h3>
                    <p className="text-gray-400">Indie Games (mostly), occasional AAA titles.</p>
                  </div>
                  <div className="bg-[#151719] p-4 rounded border border-[#2f3136] hover:border-purple-500/30 transition-colors">
                    <h3 className="text-white font-bold mb-1">🎵 Music</h3>
                    <p className="text-gray-400">Pop when coding, Jazz when im in mood.</p>
                  </div>
                  <div className="bg-[#151719] p-4 rounded border border-[#2f3136] hover:border-purple-500/30 transition-colors">
                    <h3 className="text-white font-bold mb-1">🏸 Sport</h3>
                    <p className="text-gray-400">Badminton, Volleyball, Soccer.</p>
                  </div>
                  <div className="bg-[#151719] p-4 rounded border border-[#2f3136] hover:border-purple-500/30 transition-colors">
                    <h3 className="text-white font-bold mb-1">📚 Books</h3>
                    <p className="text-gray-400">Detective & Light Novels.</p>
                  </div>
                </div>
              </section>

            </div>

          </TerminalWindow>
        </div>
      </div>

      <footer className='py-7 flex justify-center text-gray-600 text-sm'>
      </footer>
    </div>
  );
};

export default About;