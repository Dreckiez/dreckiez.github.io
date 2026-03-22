import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import TerminalWindow from '../components/TerminalWindow';
import photosData from '../data/photos.json';

const Photography = () => {
    return (
        <div className='min-h-screen font-segoe text-[#e8eef2] bg-[#151719] bg-fixed' style={{ backgroundImage: 'url(images/nnnoise.svg)' }}>
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 lg:px-20">
                
                <div className="flex flex-col md:flex-row gap-8">
                    
                    {/* Keep the consistent sidebar */}
                    <ProfileCard />

                    <TerminalWindow title="root@dreckiez:~/media/photos">
                        
                        {/* Terminal Header */}
                        <div className="mb-8 font-mono text-gray-400 text-sm border-b border-gray-800 pb-4">
                            <span className="text-purple-400">root@dreckiez:~/media/photos$</span> tree --charset=ascii
                            <br/>
                            <span className="text-gray-500 text-xs mt-1 block">
                                scanning {photosData.length} media files... 
                                <span className="text-emerald-400 ml-2">[OK]</span>
                            </span>
                        </div>

                        {/* Masonry Image Gallery */}
                        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                            {photosData.map((photo) => (
                                <div 
                                    key={photo.id} 
                                    className="group cursor-pointer relative break-inside-avoid rounded-xl overflow-hidden border border-[#2f3136] bg-[#1e2124] shadow-lg hover:border-purple-500/50 transition-all"
                                >
                                    {/* The Image */}
                                    <img 
                                        src={photo.url} 
                                        loading="lazy"
                                        className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                                    />
                                    
                                    {/* Overlay Gradient for readability */}
                                    <div className="absolute inset-0 bg-linear-to-t from-[#151719]/90 via-[#151719]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* EXIF Data / Meta Info (Shows on Hover) */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                                            <span className="bg-purple-500/20 text-purple-300 border border-purple-500/30 px-1.5 py-0.5 rounded backdrop-blur-sm">
                                                📸 {photo.camera}
                                            </span>
                                            <span className="bg-gray-800/80 text-gray-400 border border-gray-700 px-1.5 py-0.5 rounded backdrop-blur-sm">
                                                📍 {photo.location}
                                            </span>
                                            <span className="text-gray-400 block w-full mt-1 font-bold">
                                                {photo.date}
                                            </span>
                                        </div>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>

                    </TerminalWindow>
                </div>
            </div>
            
            <footer className='py-7 flex justify-center text-gray-600 text-sm'></footer>
        </div>
    );
};

export default Photography;