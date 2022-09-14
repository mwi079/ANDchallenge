
import './App.css';
import {useState} from 'react';
import List from './List'


function App() {

  const [profiles,setProfile]=useState([])
  const [name,setName]=useState([])
  const [title,setTitle]=useState([])

  function saveProfile(event){
    event.preventDefault()
    setProfile([...profiles,{name,title}])
  }

 



  return (
    <div className="App">
      <form onSubmit={saveProfile}>
        <label>Name
          <input type="text" onChange={event=>setName(event.target.value)}></input>
        </label>
        <label>AND Title
         <input type="text"onChange={event=>setTitle(event.target.value)}></input>
        </label>
        <button type="submit">Save</button>
      </form>
      <List profiles={profiles}></List>
    </div>
  );
}

export default App;
