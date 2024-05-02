import React  from "react"

const Listitems=()=>{
    const iplHistory=[{
        name:"RCBians",
        WinningHistory:[],
        image:"https://images.tv9kannada.com/wp-content/uploads/2023/12/rcb-2023.jpg",
        Totalscore:1000,
        TeamPlayers:["Faf du Plessis-C","Kohli","Glenn Maxwell","Dinesh Karthik","Will Jacks","Mohammad Siraj","Rajat Patidar","Anuj Rawat","Mahipal Lomror","Karn Sharma","Akash Deep"],
        heigth:600,
        width:600,
    },
    {
    name:"Hydrabad",
    WinningHistory:[2006,2014],
    Totalscore:500,
    image:"https://pbs.twimg.com/media/F_286_iWsAAhwHu?format=jpg&name=4096x4096",
    TeamPlayers:["Pat Cummins-C","Heinrich Klaasen","Travis Head","Jaydev Unadkat","Aiden Markram","Abhishek Sharma","Abdul Samad","Washington Sundar","Rahul Tripathi","Bhuvneshwar Kumar","T. Natarajan"],
    heigth:600,
    width:600,
    }
    
    ];
    const iplTeams=["RCB","Hydrabad","Chennai","Gujarat"]
    return(
        <React.Fragment>
       {/* <li className="Items">{iplHistory[0].name}</li>
       <li className="Items">{iplTeams[1]}</li>

        <li className="Items">{iplTeams[2]}</li>
         <li className="Items">{iplTeams[3]}</li> */}
        {
            iplHistory.map((value,index)=>{
            return(
                
                    <> 
                <h3>{index+1}.{value.name}</h3>
                <img src={value.image} heigth={value.heigth} width={value.width}></img>
                <ol>
                   {
                 value.TeamPlayers.map((player)=>{
                            return(
                                <>
                               
                                <li>{player}</li>
                                
                               
                                </>
                            )
                        
                        })
            }
             </ol>
                    </>
                )
            
            })
        }
    

      </React.Fragment>
      
    )
}
export default Listitems


