import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

function App() {
  const [monsters, setMonster] = useState([
    { name: "Linda", id: "1" },
    { name: "Frank", id: "2" },
    { name: "Jacky", id: "3" },
    { name: "Andew", id: "4" },
  ]);

  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const [searchField, setsearchField] = useState("");

  // Function / Array of dependency
  // when any of the element changes insite the [] im going to excecute the function
  useEffect(() => {
    // Get information from an api
    fetch("https://jsonplaceholder.typicode.com/users") // Set the url
      .then((response) => response.json()) // response is converted in to a json object
      .then((users) => setMonster(users));
  }, []); //this function is not going to run again

  // It will aply the filter whenever the searchfield or monsters variables are changed
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((element) => {
      return element.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]); // will be executed every time monsters ans searchfield change

  function onChangedSearch(event) {
    const searchFieldS = event.target.value.toLocaleLowerCase();
    setsearchField(searchFieldS);
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangedHandler={onChangedSearch}
        className_={"moster-search-box"}
        placeholderInfo="Search Monster"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
