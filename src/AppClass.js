import React, { Component } from 'react'
import BoxClass from './component/BoxClass';
import './App.css';

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


export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
    }
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice)     
    })
    
  }

  randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length)
    let final = itemArray[randomItem];
    return choice[final]
  }

  judgement = (user, computer) => {
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


  render() {
    return (
      <div>
        <div className="main">
          <BoxClass title="You" item={this.state.userSelect} result={this.state.result}/>
          <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result}/>
        </div>
        <div className="main">
          <button onClick={() => this.play("scissors")}>가위</button>
          <button onClick={() => this.play("rock")}>바위</button>
          <button onClick={() => this.play("paper")}>보</button>
        </div>
      </div>
    )
  }
}
