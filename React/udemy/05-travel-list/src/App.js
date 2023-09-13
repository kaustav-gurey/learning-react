import { useState } from "react";

 
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  return (
    <div className="App">
      <Logo/>
      <Form/>
      <PackingList/>
      <Stats/>
    </div>
  );
}

function Logo(){
  return(
    <h1>🌴 Far away 💼</h1>
  )
}

function Form(){
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);

  function handleAdditems(item){
    setItems((items) => [...items, item])
  }
  function handleSubmit(e){
    // e.preventDefault();
    
    if(!description) return;

    const newItem = {description, quantity, packed:false, id:Date.now()};
    console.log(newItem);

    handleAdditems(newItem);

    setDescription("");
    setQuantity(1);

  }


  return(
    <div className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} 
        onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({length: 20}, (_,i) => i + 1).map
          ((item)=> (
            <option key={item} value={item}>
              {item}
            </option>) 
          )}
      </select>
      <input type="text" placeholder="Item..." 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}>
      </input>
      <button onSubmit={handleSubmit}>Add</button>
    </div>
  )
}

function PackingList(){
  return(
    <div className="list">
      <ul>
        {initialItems.map(item => (
          <Item item={item} key={item.id}/>
        ))}
      </ul>
    </div>
  )
}
function Item({item}){
  return(
    <li>
      <span style={item.packed?{textDecoration: "line-through"}:{}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  )
}

function Stats(){
  return(
    <footer className="stats">
      💼You have X items on your list, and you already have packed X (X%)
    </footer>
  )
}

