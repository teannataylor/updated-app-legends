import React,  { useEffect, useState } from "react";

const blankNewLegend = {
  name:"",
  image:"",
  nickname:"",
  legendType:"",
  tactAbility:"",
  passAbility:"",
  ultAbility:"",
  season: 0,
  likes: 0,
};

//need a POST request; create a new Legend

function NewLegendForm() {

  const[newLegend, setNewLegend] = useState(blankNewLegend)

console.log(newLegend)

function handleChange(e){
  console.log(e)
  setNewLegend((prev) => ({
      ...prev,
      [e.target.name] : e.target.value

      
  }
  ));
  e.preventDefault();

}

function handleSubmit(e){
  e.preventDefault();

  console.log(newLegend)
  
  fetch('http://localhost:6004/legends',{
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newLegend),
  })
    .then(() => {
      console.log('this has been added')
    })
    
}



  return (
    <div className="new-legend-form">
      <h2>Add New Legend</h2>
       <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="Legend name" value={newLegend.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={newLegend.image} onChange={handleChange}/>
        <input type="text" name="nickname" placeholder="Nickname" value={newLegend.nickname} onChange={handleChange}/>
        <input type="text" name="legendType" placeholder="Legend Type" value={newLegend.legendType} onChange={handleChange}/>
        <input type="text" name="tactAbility" placeholder="Tactical Ability" value={newLegend.tactAbility} onChange={handleChange}/>
        <input type="text" name="passAbility" placeholder="Passive Ability" value={newLegend.passAbility} onChange={handleChange}/>
        <input type="text" name="ultAbility" placeholder="Ultimate Ability" value={newLegend.ultAbility} onChange={handleChange}/>
        <input type="number" name="season"  placeholder="Debut Season" value={newLegend.season} onChange={handleChange}/>
        <input type="number" name="likes"  placeholder="Likes" value={newLegend.likes} onChange={handleChange}/>
        <button type="submit">Add Legend</button>
      </form>
      <p>{newLegend.name}</p>
    </div>
  );
}

export default NewLegendForm;
//onSubmit={handleSubmit}

// "id": 0,
// "name": "Ash",
// "image": "https://assets.gamepur.com/wp-content/uploads/2021/10/18104728/Ash-Apex-Legends.jpg",
// "nickname": "Incisive Instigator",
// "legendType": "Offensive",
// "tactAbility": "Arc Snare",
// "summaryOne": "Throw a spinning snare that damages and tethers the first enemy who gets too close.",
// "passAbility": "Marked For Death",
// "summaryTwo": "Ash's map shows the location of recent deathboxes and marks surviving attackers.",
// "ultAbility": "Phase Breach",
// "summaryThree": "Tear open a one-way portal to a targeted location.",
// "pickRate": 2.9,
// "season": 11,
// "likes": 5,
// "trailer": "https://www.youtube.com/watch?v=1R559DWBYbU&t=1s"