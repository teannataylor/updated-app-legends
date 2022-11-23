import React, {useState} from "react";


function LegendCard({legend}) {
  const {id,legendType, name, image, likes} = legend;
  const [legendLikes, setLegendLikes] = useState(likes);


function handleClick(){


  //key value pairs ; json stringify takes information to pass as a string
  fetch(`http://localhost:6004/legends/${id}`,{
    method: "PATCH",
    headers: {
      'Content-type': 'application/json'
    },
    
  body:JSON.stringify({likes: legend.likes +1}),
  })
  .then(res => res.json())
  .then(function(updatedLikesObj){
        legend.likes = updatedLikesObj.likes
        console.log(updatedLikesObj)
  })

  setLegendLikes(legendLikes + 1)
};


function showMoreClick(){

  console.log('show more!')
}

// function handleDelete(){
// //   fetch(`http://localhost:6004/legends/${id}`,{
// //       method: "DELETE"
// //   })
// //    .then(res => res.json())
// //    .then( () => {
// //       onDeleteLegend(id)
// //    })
// }

  return (
    <li className="card">
      <img src={image} alt={"legend image"} />
      <h4>{name}</h4>
      <p>Legend Type: {legendType}</p>
        <button onClick={handleClick}>Number of Likes: {legendLikes} </button>
        <button onClick={showMoreClick}>View Legend</button>
        {/* <button onClick={handleDelete} className="emoji-button delete">🗑</button> */}
    </li>
  );
}

export default LegendCard;
