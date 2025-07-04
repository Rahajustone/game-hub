import { useParams } from "react-router-dom";

function GameDetailsPage() {
    const { id } = useParams(); 
    return <div>GameDetailsPage {id}</div>;
}

export default GameDetailsPage;