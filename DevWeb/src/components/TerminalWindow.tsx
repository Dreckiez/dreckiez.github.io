const TerminalWindow = ({ title, children }: { title: string, children: React.ReactNode }) => {
    return (
        <main className="w-full mt-12 md:w-2/3 lg:w-3/4">
            {/* Header */}
            <div className="bg-[#1e2124] rounded-t-xl border-x border-t border-[#2f3136] p-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-4 text-xs text-gray-400 font-mono">{title}</div>
            </div>
            {/* Content */}
            <div className="bg-[#151719]/90 border-x border-b border-[#2f3136] rounded-b-xl p-6 md:p-10 backdrop-blur-sm">
                {children}
            </div>
        </main>
    );
};
export default TerminalWindow;