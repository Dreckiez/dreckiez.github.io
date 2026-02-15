import { Link } from "react-router-dom";

interface LogEntryProps {
  date: string;
  title: string;
  summary: string;
  type?: "Blog" | "Project";
  link: string;
}

const LogEntry = ({ date, title, summary, type = "Blog", link }: LogEntryProps) => {

    const inner = (
        <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg hover:bg-white/5 transition-all border border-transparent hover:border-gray-700">
            <div className="text-gray-500 font-mono text-sm min-w-25">
                {date}
            </div>
            <div>
                <h3 className={`font-bold transition-colors ${type === 'Project' ? 'text-emerald-400 group-hover:text-emerald-300' : 'text-blue-400 group-hover:text-blue-300'}`}>
                    {title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                    {summary}
                </p>
            </div>
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