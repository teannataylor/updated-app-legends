import React, {useEffect, useState} from "react";
import LegendList from "./LegendList";
import Search from "./Search";

const BASE_URL = "http://localhost:6004/legends";

function LegendPage() {

  const [legends, setLegend] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=> {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(setLegend)

  }, []);

  // function handleDeleteLegend(id){
  //   const updatedLegends = legends.filter((legend)=> legend.id !== id);
  //       setLegend(updatedLegends);
  // }

  const filteredLegends = legends.filter((legend) => legend.name.includes(search))


  return (
    <main>
      <Search search={search} setSearch={setSearch} />
      <LegendList legends={filteredLegends}/>
    </main>
  );
}

export default LegendPage;
