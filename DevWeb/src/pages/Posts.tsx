import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import TerminalWindow from '../components/TerminalWindow';
import LogEntry from '../components/LogEntry';
import blogsData from '../data/blogs.json';

const Posts = () => {

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
                            {blogsData.map((blog) => (
                                <LogEntry 
                                    key={blog.id}
                                    date={blog.date}
                                    title={blog.title}
                                    summary={blog.summary}
                                    type="Blog"
                                    link={blog.link}
                                />
                            ))}
                        </div>

                    </TerminalWindow>
                </div>
            </div>
            
            <footer className='py-7 flex justify-center text-gray-600 text-sm'></footer>
        </div>
    );
};

export default Posts;