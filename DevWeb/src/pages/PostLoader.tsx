import { useParams } from "react-router-dom";
import PostRegistry from "./posts/_Registry";

export default function PostLoader() {
    const {slug} = useParams();

    if (!slug || !PostRegistry[slug])
        return <div className="text-black text-center mt-20">Error 404: Post not found in Registry.</div>;

    const SelectedPost = PostRegistry[slug];

    return <SelectedPost />;
}