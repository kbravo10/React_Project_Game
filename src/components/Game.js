import Moles from "./Moles"

function Game(){
    return(
        <div>
            <h1>MOLEMAN</h1>
            <div className="moleCards">
                {
                    Array(6).fill(<Moles />)
                }
            </div>
        </div>

    );
}
export default Game;  