import React  from "react"
const Listitems=()=>{
    const iplTeams=["RCB","Hydrabad","Chennai","Gujarat"]
    const iplHistory=[{
        name:"RCBians",
        WinningHistory:[],
        TeamPlayers:["kohli","Dk"],
    },
{
    name:"Hydrabad",
    WinningHistory:[2006,2014],
    TeamPlayers:["kohli","Dk"],
}

]
    return(
        <React.Fragment>
       <li className="Items">{iplHistory[0].name}</li>
       <li className="Items">{iplTeams[1]}</li>
        <li className="Items">{iplTeams[2]}</li>
        <li className="Items">{iplTeams[3]}</li>
      </React.Fragment>
      
    )
}
export default Listitems