const MissionCard = ({mission_name, rating, children}: {mission_name: string, rating: string, children: React.ReactNode}) => {
    return (
        <div className="bg-[#1e2124] p-6 rounded-lg border border-[#2f3136] mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-9xl font-black text-gray-500 rotate-12 select-none pointer-events-none">
                {rating}
            </div>

            <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                <span className="text-2xl">💾</span>
                <h3 className="text-gray-200 font-bold font-mono">Mission Debrief: {mission_name}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {children}
            </div>
        </div>
    );
    
}

export default MissionCard;