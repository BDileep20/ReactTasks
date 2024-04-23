import Listitems from "./listitems";
const ListComponent=()=>{
    const iplTeams=["RCB","Hydrabad","Chennai"]
    const indianLeague="INDIAN PREMIER LEAGUE";
    const image="https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/Ipl-auction_1703034762917_1703034773943.jpg";
    const dimensonsons={
        width:500,
        height:500
    }
    return(
        <div>
            <h3>{indianLeague}</h3>
            <img src={image} height={dimensonsons.height} width={dimensonsons.width}></img>
            <button onClick={()=>{}}>click me</button>
            <ul>
                <Listitems/>
                </ul>
        
        </div>
        
    )
}
export default ListComponent