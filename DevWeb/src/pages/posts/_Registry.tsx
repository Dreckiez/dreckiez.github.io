import SurvivingSophomore from "./SurvivingSophomore";
import GameJam from "./GameJam";
import FreshmanYear from "./FreshmanYear";

const PostRegistry: Record<string, React.ComponentType> = {
    "surviving-sophomore": SurvivingSophomore,
    "game-jam": GameJam,
    "freshman-year": FreshmanYear,
};

export default PostRegistry;