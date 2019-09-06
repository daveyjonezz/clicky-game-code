import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highscore: 0,
    mid: "Click a character below to begin the adventure!",
    colorStyle: "text-white"
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(friends => {
      friends.clicked = false;
    });
    this.setState({mid: `Game Over! Click an image to play again.`});
    this.setState({score: 0});
    this.setState({colorStyle: "text-danger"})
    return true;
  }

  gameWon = () => {
      this.setState({highscore: 12}, function() {
        console.log(this.state.highscore);
      })
    this.state.friends.forEach(friends => {
      friends.clicked = false;
    });
    this.setState({mid: `Congrats you won!!`});
    this.setState({score: 0});
    this.setState({colorStyle: "text-success"})
    return true;
  }

  clickFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.map(friend => { 
      if(friend.id === id){
        if(friend.clicked === false){
          friend.clicked = true
          if (this.state.score === 11) {
            console.log("winner winner")
            this.gameWon();
          } else {
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
            this.setState({mid: `Oooh keep clicking!!`});
            this.setState({colorStyle: "text-info"})
          });
        }
        } else {
          this.gameOver()
        }
      }
      return friend
    });
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });

    const newArray = this.state.friends.sort(()=> Math.random()-0.5)
    this.setState({friends: newArray})
  };
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log(this.state.score,"SCORE")
    return (
      <span>
      <NavBar score={this.state.score} highscore={this.state.highscore} mid={this.state.mid} colorStyle={this.state.colorStyle}/>
      <Title />
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.clickFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={friend.clicked}

          />
        ))}
      </Wrapper>
      <Footer/>
      </span>
    );
  }
}

export default App;
