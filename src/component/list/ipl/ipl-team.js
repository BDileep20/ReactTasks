


const Iplteam=()=>{
    const iplTeams=[
        {
        name:"Hydrabad",
        players:[
          {
            palyerName:"Head",
            image:"",
            heigth:6,
          },
          {
            palyerName:"Cummins",
            image:"",
            heigth:6.2,
          }
          ],
          
      },
      {
        name:"Mi",
        players:[
          {
            palyerName:"Rohith",
            image:"",
            heigth:5.11,
          },
          {
            palyerName:"Bhumra",
            image:"",
            heigth:5.9,
          }
          ],
          
      },
      
      ]
    return(
        
        <>
        <h1>IPL 2024 TEAMS</h1>
        {
            iplTeams.map((team)=>{
                return(
                <>
                    <h2>{team.name}</h2>
                    
                    {
                team.players.map((eachp)=>{
                 const{palyerName,heigth}=eachp
                    return(
                        <>
                        <p>{palyerName}</p>
                        <p>{heigth}</p>
                        </>
                    )
                })
                
            }
            
           </>     
        )
            
                
                })
            
              }
        
        </>
    )
}
export default Iplteam