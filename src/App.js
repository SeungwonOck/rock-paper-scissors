import logo from './logo.svg';
import './App.css';
import Box from "./component/Box"
import { useState } from 'react';

const choice = {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimsNjjJ9wPd-PhnTOAEQ9jw78rpOY5041f1PaLwPrpA&s"
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn11.bigcommerce.com/s-m98be6s3w6/images/stencil/1280x1280/products/6913/12382/Scissors__74082.1702284402.jpg?c=1?imbypass=on"
  },
  paper: {
    name: "Paper",
    img: "https://i.etsystatic.com/19232050/r/il/6233a6/3092080944/il_fullxfull.3092080944_mra0.jpg"
  }
}
function App() {
  const[userSelect, setUserSelect] = useState(null)
  const[computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length)
    let final = itemArray[randomItem];
    return choice[final]
  }

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie"
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "win" : "lose"
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "win" : "lose"
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "win" : "lose"
    }
  };
  return (
    <div>
    <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
    </div>
    <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
    </div>
    </div>
  );
}

export default App;
