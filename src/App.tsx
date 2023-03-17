import { useEffect, useState } from 'react';
import "./App.css";

function App() {
  const [lose, setLose] = useState(false)

   const handleClickBomb = () => {
    setLose(true)
  }

  useEffect(() => {
    const mine = document.querySelector(".mine")

    if(mine != null) {
      while(mine.childElementCount < 200) {
        let block = document.createElement("button")
        block.setAttribute("class", "block")
        block.setAttribute("id", mine.childElementCount.toString())

        mine.appendChild(block)
      }
      
      let bombs = 20
      while(bombs > 0) {
        let blockBomb = Math.floor(Math.random() * 200)
        if(mine.children[blockBomb].innerHTML != "<p>💣</p>") {
          mine.children[blockBomb].innerHTML = "<p>💣</p>"
          mine.children[blockBomb].addEventListener("click", handleClickBomb)
          bombs--;
        }
      }

      var matriz = []
      for(let i=0; i<=mine.childElementCount-1; i++) {
        if(mine.children[i].innerHTML != "<p>💣</p>") {
          matriz.push("")
        } else {
          matriz.push("💣")
        }
      }

      for(let i=0; i<matriz.length; i++) {
        console.log(i)
      }
    }
  }, [])

  useEffect(() => {
    if(lose === true) {
      const mine = document.querySelector(".mine")

      const loseTitle = document.createElement("h1")
      loseTitle.innerHTML = "YOU LOSE"
  
      mine?.appendChild(loseTitle)
    }
  }, [lose])

  return (
    <div className="App" role="main">
      <h1>MineSweeper</h1>
      <div className="mine">
      </div>
      <footer>
        <p>Made by <a target="_blank" href="https://github.com/davitostes">Davi Tostes</a></p>
      </footer>
    </div>
  );
}

export default App;
