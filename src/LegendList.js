import React from "react";
import LegendCard from "./LegendCard";

function LegendList({ legends }) {


  return (
    <ul className="cards">{legends.map((legend) => <LegendCard legend={legend} key={legend.id}/>)}</ul>
  );
}

export default LegendList;
