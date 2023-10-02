import React, { Component  } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => {this.setState({ robots: users})})
        
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
            <h1 className='tc white'>Loading Robots...</h1> :
            (
                <div className='tc min-h-100'>
                    <h1 className='white pa2 ma0'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}


export default App;