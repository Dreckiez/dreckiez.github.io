const NVim = ({ filename, title, date, time, children }: { filename: string, title: string, date:string, time: string, children: React.ReactNode }) => {
    return (
        <div className="w-full shadow-2xl">
                    
            <div className="bg-[#1e2124] rounded-t-xl border-x border-t border-[#2f3136] p-2 flex justify-between items-center px-4 select-none">
                <span className="text-xs text-gray-500 font-mono">nvim {filename}.md</span>
                <span className="text-xs text-gray-600 font-mono">Read Only</span>
            </div>

            <article className="bg-[#151719]/90 border-x border-b border-[#2f3136] rounded-b-xl p-8 md:p-12 backdrop-blur-sm">
                
                <header className="mb-10 border-b border-gray-800 pb-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        {title}
                    </h1>
                    <div className="flex justify-center items-center gap-4 text-sm font-mono text-gray-500">
                        <span>{date}</span>
                        <span>•</span>
                        <span>{time}</span>
                    </div>
                    
                </header>

                <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                    
                    {children}

                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 text-center">
                    <span className="inline-block px-3 py-1 bg-gray-800 rounded text-xs text-gray-500 font-mono">
                        EOF
                    </span>
                </div>

            </article>
        </div>
    );
};
export default NVim;