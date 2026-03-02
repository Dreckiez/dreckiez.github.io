import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import TerminalWindow from '../components/TerminalWindow';
import LogEntry from '../components/LogEntry';
import blogsData from '../data/blogs.json';
import { useState } from 'react';

const Posts = () => {

    const ITEMS_PER_PAGE = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogsData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentBlogs = blogsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePrev = () => setCurrentPage(prev => Math.max(prev - 1, 1));
    const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));

    return (
        <div className='min-h-screen font-segoe text-[#e8eef2] bg-[#151719] bg-fixed' style={{ backgroundImage: 'url(images/nnnoise.svg)' }}>
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 lg:px-20">
                
                <div className="flex flex-col md:flex-row gap-8">
                    
                    <ProfileCard />

                    <TerminalWindow title="root@dreckiez:~/posts">
                        
                        <div className="mb-8 font-mono text-gray-400 text-sm border-b border-gray-800 pb-4">
                            <span className="text-blue-400">root@dreckiez:~/posts$</span> ls -l --sort=date
                            <br/>
                            <span className="text-gray-500 text-xs mt-1 block">total {blogsData.length} files</span>
                        </div>

                        <div className="space-y-1">
                            {currentBlogs.map((blog) => (
                                <LogEntry 
                                    key={blog.id}
                                    date={blog.date}
                                    title={blog.title}
                                    summary={blog.summary}
                                    type="Blog"
                                    link={blog.link}
                                    image={blog.banner}
                                />
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <div className="mt-10 pt-6 border-t border-gray-800 flex justify-center items-center gap-8 font-mono text-sm select-none">
                                <button 
                                    onClick={handlePrev} 
                                    disabled={currentPage === 1}
                                    className="text-gray-500 cursor-pointer hover:text-blue-400 disabled:opacity-30 disabled:hover:text-gray-500 disabled:cursor-not-allowed transition-colors"
                                >
                                    &lt; prev
                                </button>
                                
                                <span className="text-gray-400">
                                    page <span className="text-blue-400 font-bold">{currentPage}</span> / {totalPages}
                                </span>
                                
                                <button 
                                    onClick={handleNext} 
                                    disabled={currentPage === totalPages}
                                    className="text-gray-500 cursor-pointer hover:text-blue-400 disabled:opacity-30 disabled:hover:text-gray-500 disabled:cursor-not-allowed transition-colors"
                                >
                                    next &gt;
                                </button>
                            </div>
                        )}

                    </TerminalWindow>
                </div>
            </div>
            
            <footer className='py-7 flex justify-center text-gray-600 text-sm'></footer>
        </div>
    );
};

export default Posts;