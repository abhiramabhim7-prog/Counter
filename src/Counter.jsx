// import React from 'react'
// import { Component } from 'react'
// import { useState } from 'react'

// class Counter extends Component {
//     state = {
//         counter: 0
//     }
//     onIncrement = () => {
//         this.setState({
//             counter: this.state.counter + 1

//         })
//     }

//     onDecrement = () => {
//         this.setState({
//             counter:this.state.counter - 1

//         })

//     }

//     onReset = () =>{

//         this.setState({
//             counter:this.state.counter = 0
//         })
//     }
//  render(){
//     return(
//         <div>
//             <h1>Count</h1>
//             <h3 > {this.state.counter} </h3>
//             <button onClick={this.onDecrement} onclick={()=>alert("One decrement")} > -</button>
//             <button onClick={this.onReset}>Reset</button>
//             <button onClick={this.onIncrement}>+</button>
//         </div>
//     )
//  }
// }

// export default Counter





    import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count - 1)
    }


    const increment = () => {
        setCount(count + 1)

       
    }

    const reset = () => {
        setCount(0)
    }

    useEffect(() =>{
        if (count === 10) {
            alert("You Reach 10");
        }
    },[count]
)




    return (
        <div className="main">
            <div className="component">
                <h1>React Events</h1>


                <h2>count: {count}</h2>
                <div className="but">

                    <button onClick={decrement}>-</button>
                    <button onClick={reset}>Reset</button>
                    <button onClick={increment}>+</button>

                </div>
            </div>


        </div>
    );
}

export default Counter;