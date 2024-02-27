import Moles from "./Moles"

function Game(){
    return(
        <div>
            <h1>MOLEMAN</h1>
            {
                Array(6).fill(<Moles />)
            }
        </div>

    );
}
export default Game;  