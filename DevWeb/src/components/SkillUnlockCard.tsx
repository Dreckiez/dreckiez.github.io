const SkillUnlockCard = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="bg-[#1e2124] p-6 rounded-lg border border-[#2f3136] mb-8">
            <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                <span className="text-2xl">🌲</span>
                <h3 className="text-emerald-400 font-bold font-mono">New Skill Tree Unlocked</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {children}
            </div>
        </div>
    );
    
}

export default SkillUnlockCard;