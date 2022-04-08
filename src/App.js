import AddItemForm from "./components/addItemForm/AddItemForm";
import ItemsList from "./components/itemList/ItemsList";
import FilterPanel from "./components/filterPanel/FilterPanel";

import './App.css';

function App() {
  return (
    <div className="App">
      <AddItemForm/>
      <ItemsList/>
      <FilterPanel/>
    </div>
  );
}

export default App;
