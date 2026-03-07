import SurvivingSophomore from "./SurvivingSophomore";
import GameJam from "./GameJam";
import FreshmanYear from "./FreshmanYear";
import DeveloperAwards from "./DeveloperAwards";

const PostRegistry: Record<string, React.ComponentType> = {
    "developer-awards": DeveloperAwards,
    "surviving-sophomore": SurvivingSophomore,
    "game-jam": GameJam,
    "freshman-year": FreshmanYear,
};

export default PostRegistry;