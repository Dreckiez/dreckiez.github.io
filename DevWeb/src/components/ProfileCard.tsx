import contactsData from "../data/contacts.json";

const ProfileCard = () => {
    return (
        <aside className="w-full mt-18.75 md:mt-0 md:w-1/3 lg:w-1/4 shrink-0">
            <div className="md:sticky md:top-24 bg-[#1e2124] border border-[#2f3136] rounded-xl p-6 shadow-lg">
            
                <div className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-[#2f3136] shadow-md">
                    <img src="images/6854_ORmr1H8w.png" alt="Dreckiez" className='rounded-full' />
                </div>

                {/* Name & Title */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-extrabold text-white tracking-wide">Dreckiez</h1>
                    <p className="text-sm text-gray-400 mt-1 font-mono">Software Engineer</p>
                    <div className="inline-block px-2 py-0.5 mt-2 bg-emerald-900/30 border border-emerald-500/30 rounded text-emerald-400 text-xs font-mono">
                        DevOps Aspirant
                    </div>
                </div>

                {/* Social Links (Simple Text/Emoji version) */}
                <div className="flex justify-center gap-4 mb-6">
                    {contactsData.map((item, idx) => (
                        <a key={idx} href={`${item.href}`} className='text-gray-400 hover:text-white transition-colors text-xl' title ={`${item.title}`} target="_blank">
                            <i className={`${item.class}`} ></i>
                        </a>
                    ))}
                </div>

                {/* Status Widget */}
                <div className="bg-[#151719] rounded-lg p-4 text-sm border border-[#2f3136]">
                    <div className="flex items-center gap-3 mb-2 text-gray-300">
                        <span className="text-red-400">📍</span>
                        <span>HCMUS, Vietnam</span>
                    </div>
                    <div className="flex items-center gap-3 mb-2 text-gray-300">
                        <span className="text-blue-400">🍵</span>
                        <span>Drinking Boba</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                        {/* <span className="text-green-400">🎵</span> */}
                        <i className="fa-brands fa-spotify ml-0.75 mr-1" style={{color: "#07ca8f"}}></i>
                        <span>Jazz / Pop</span>
                    </div>
                </div>

            </div>
        </aside>
    );
};
export default ProfileCard;