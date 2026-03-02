import { Link } from "react-router-dom";

interface LogEntryProps {
  date: string;
  title: string;
  summary: string;
  type?: "Blog" | "Project";
  link: string;
  image?: string;
}

const LogEntry = ({ date, title, summary, type = "Blog", link, image }: LogEntryProps) => {

    const inner = (
        <div className="flex flex-col sm:flex-row justify-between p-4 rounded-lg hover:bg-white/5 transition-all border border-transparent hover:border-gray-700">
            
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="text-gray-500 font-mono text-sm min-w-25 shrink-0 pt-0.5">
                    {date}
                </div>
                <div className="pr-4">
                    <h3 className={`font-bold transition-colors ${type === 'Project' ? 'text-emerald-400 group-hover:text-emerald-300' : 'text-blue-400 group-hover:text-blue-300'}`}>
                        {title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                        {summary}
                    </p>
                </div>
            </div>

            {image && (
                <div className="shrink-0 mt-4 sm:mt-0 w-full sm:w-32 h-24 sm:h-20 overflow-hidden rounded border border-[#2f3136] bg-gray-800">
                    <img 
                        src={image} 
                        alt={title} 
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                    />
                </div>
            )}
            
        </div>
    );

    if (link.startsWith('http')) return (
        <div className="group mb-4 cursor-pointer">
            <a href={link} target='_blank' rel="noreferrer" className="block">
                {inner}
            </a>
        </div>
    );

    return (
        <div className="group mb-4 cursor-pointer">
            <Link to={link} className="block">
                {inner}
            </Link>
        </div>
    );
};
export default LogEntry;