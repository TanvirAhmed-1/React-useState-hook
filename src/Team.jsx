import { useState } from "react"
import'./Team.css'

export default function Team(){
  
    const [player, setPlayer]=useState(10);
        
    const add=()=>{
      
        if(player>=15){
            alert("You already add all Player");
            return;
        }
        const added = player+1;
        setPlayer(added);
    }

    const subtract=()=>{

        if(player<=0){
            alert("You remove all Player");
            return;
        }

        setPlayer(player-1);
    }

    return(


        <div className="team">
        <h1>Total Player: {player}</h1>
        <button  onClick={add}>Add Player</button>
        <button className="gap" onClick={subtract}>remover Player</button>

       </div>



    );


}