import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
//export is not default so you need to put {} and you can have multiple exports like {robots, cats}
//import {robots} from './robots';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            // A more realistic case taking input from an API for user details
            robots: [],
            //rather than a robots.js file
            //robots: robots,
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        // rather than saying this.state.robots we can just destructure it
        const {robots, searchfield} = this.state;
        const filterdrobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if(!robots.length){
            return <h1>Loading</h1> 

        }
        else{
            return(
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchchange={this.onSearchChange} />
                    {/* <CardList robots={robots} /> */}
                    <Scroll>
                        <CardList robots={filterdrobots} />
                    </Scroll>
                    {/* card->cardlist->app */}
                </div>
            );
        } 
    }  
}

export default App;