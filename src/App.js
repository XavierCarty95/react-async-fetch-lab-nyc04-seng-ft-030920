// create your App component here
import React, { Component } from 'react'

export class App extends Component {
   
     state = {
      data: []

     }


    componentDidMount(){

         fetch("http://api.open-notify.org/astros.json")
         .then(r => r.json())
         .then(responseObj => {
            this.setState({
                data: responseObj.people
            })


         })
   }
render() {
        return (
            <div>

            <p>{this.state.data.map((person, id) => <li key={person.name}> {person.name} </li>)}</p>
                
            </div>
        )
    }
}

export default App
