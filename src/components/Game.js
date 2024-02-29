import Moles from "./Moles"
import Score  from "./Score";

function Game(){
    return(
        <div>
            <h1>MOLEMAN</h1>
            <div className="scoreCount">
                <Score />
            </div>
            <div className="moleCards">
                {
                    Array(6).fill(<Moles />)
                }
            </div>
        </div>

    );
}
export default Game;  