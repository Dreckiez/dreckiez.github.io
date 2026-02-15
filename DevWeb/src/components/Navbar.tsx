import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [opacity, setOpacity] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newOpacity = Math.min(scrollY / 300, 1); // Cap at 1
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Posts', path: '/posts' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
    ];

    return (
        <>
            <div className="h-20 left-0 right-0 fixed justify-between flex z-100 flex-1 py-0 px-6">
                <div className='opacity-0 absolute h-full -left-10 -z-10 backdrop-blur-2xl' style={{ opacity: opacity, width: 'calc(100% + 40px)', boxShadow: '0 0 #000, 0 0 #000, 0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}></div>
                <div className="justify-between items-center flex flex-[0.65] mx-auto max-w-5xl">
                    <nav>
                        <Link to="/" className="flex text-[#e8eef2] text-[1.4rem] leading-6 font-[650] md:hidden" onClick={closeMenu}>Dreckiez</Link>
                    </nav>

                    <nav className="hidden md:flex">
                        {links.map((link) => (
                            <Link 
                                key={link.name}
                                to={link.path} 
                                className={`ml-6 color-[#e8eef2] inline-flex items-center ${
                                    (location.pathname === link.path || (location.pathname.includes("posts") && link.path === '/posts')) ? 'text-blue-400' : 'text-[#e8eef2] hover:text-white'
                                }`}
                            >
                                <p className="leading-6 font-medium  text-[1rem]">{link.name}</p>
                            </Link>
                        ))}
                    </nav>

                    <button 
                        className="md:hidden text-white text-2xl z-50 focus:outline-none" 
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </div>

            <div 
                className={`fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col justify-center px-8 transition-all duration-500 ease-in-out ${
                    isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
                }`}
            >
                {/* Menu Items */}
                <div className="flex flex-col gap-6">
                    {links.map((link) => (
                        <Link 
                            key={link.name}
                            to={link.path} 
                            onClick={closeMenu}
                            className={`text-5xl font-bold transition-colors duration-300 flex items-start ${
                                (location.pathname === link.path || (location.pathname.includes("posts") && link.path === '/posts')) ? 'text-[#3b82f6]' : 'text-[#333] hover:text-white'
                            }`}
                        >
                            {link.name}
                            {(location.pathname === link.path || (location.pathname.includes("posts") && link.path === '/posts')) && (
                                <span className="ml-2 text-blue-500 text-5xl">•</span>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;