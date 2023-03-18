import { useEffect, useState } from 'react';
import "./App.css";

function App() {
  const [lose, setLose] = useState(false)

   const handleClickBomb = () => {
    const mine = document.querySelector('.mine')
    for(let i=0; i<200; i++) {
      mine.children[i].children[0].style.filter = 'opacity(1)'
    }
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

      var matriz: any = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]

      for(let i=0; i<20; i++) {
        for(let j=0; j<10; j++) {
          let blockId : any = ''
          if(i < 1) {
            blockId = j.toString()
          } else {
            blockId = i.toString() + j.toString()
          }
          if(mine.children[blockId].innerHTML === "<p>💣</p>") {
            matriz[i][j] = '💣'
          }
        }
      }

      for(let i=0; i<20; i++) {
        for(let j=0; j<10; j++) {
          var countBomb = 0
          if(matriz[i][j] != '💣') {
            //colunas
            if(matriz[i][j+1] === '💣') {
              countBomb++
            }
            if(matriz[i][j-1] === '💣') {
              countBomb++
            }
            //linhas
            if(i < 19 && matriz[i+1][j] === '💣') {
              countBomb++
            }
            if(i > 0 && matriz[i-1][j] === '💣') {
              countBomb++
            }
            //diagonais
            if(i < 19 && j < 9 && matriz[i+1][j+1] === '💣') {
              countBomb++
            }
            if(i > 0 && j < 9 && matriz[i-1][j+1] === '💣') {
              countBomb++
            }
            if(i < 19 && j > 0 && matriz[i+1][j-1] === '💣') {
              countBomb++
            }
            if(i > 0 && j > 0 && matriz[i-1][j-1] === '💣') {
              countBomb++
            }
            matriz[i][j] = countBomb.toString()
          }
        }
      }

      for(let i=0; i<20; i++) {
        for(let j=0; j<10; j++) {
          let blockId : any = ''
          if(i < 1) {
            blockId = j.toString()
          } else {
            blockId = i.toString() + j.toString()
          }
          mine.children[blockId].innerHTML = `<p>${matriz[i][j]}</p>`
          mine.children[blockId].children[0].style.filter = 'opacity(0)'
        }
      }

      console.log(matriz)

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
