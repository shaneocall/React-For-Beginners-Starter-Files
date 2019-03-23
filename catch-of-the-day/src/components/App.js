import React from "react";
import Header from "./Header"
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes"
import Fish from "./Fish"

class App extends React.Component {
    
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    //1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    //2. Add our new fish to that fishes variable 

    fishes[`fish${Date.now()}`] = fish;

    //3. Set the new fishes object to state
    this.setState({ fishes })
  };


  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  };
  
  addToOrder = (key) => {
  // 1. take a copy of state
    const  order ={...this.state.order}
  // 2. Add/Update order number
    order[key] = order[key] +1 || 1;
  // 3. Call Set State to update state object
    this.setState({ order });
}

  render() {
        return (
          <div className="catch-of-the-day">
            <div className="menu">
              <Header tagline="Fresh Seafood market" age={100} />
              <ul className="fishes">
                {Object.keys(this.state.fishes).map(key =>
                  <Fish details={this.state.fishes[key]}
                    key={key}
                    addToOrder={this.addToOrder}
                    index={key}
                  ></Fish>)}
              </ul>
            </div>
            <Order />
            <Inventory loadSampleFishes={this.loadSampleFishes} addFish={this.addFish}/>
          </div>
        );
    }
}

export default App;