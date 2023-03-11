import { useEffect } from 'react';
import "./App.css";

function App() {

  useEffect(() => {
    const mine = document.querySelector(".mine")

    if(mine != null) {
      while(mine.childElementCount < 200) {
        let block = document.createElement("button")
        block.setAttribute("class", "block")


        mine.appendChild(block)
      }
    }
  }, [])

  return (
    <div className="App" role="main">
      <h1>MineSweeper</h1>
      <div className="mine">
      </div>
    </div>
  );
}

export default App;
