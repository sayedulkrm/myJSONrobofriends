import React, {
    Component
} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
//import {
//    robots
//} from './robots';
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {

            robots: [],
            searchfeild: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => this.setState({
                robots: user
            }));
    }

    onSearchChange = (event) => {
        this.setState({
            searchfeild: event.target.value
        })


    }


    render() {
        const { robots, searchfeild }= this.state;


        const filterrobot = robots.filter(robot => {

            return robot.name.toLowerCase().includes(searchfeild.toLowerCase());

        })



        return !robots.length ?
         <h1 className='tc f1'> Loading < /h1>:
        (


                <
                div className = 'tc' >


                <
                h1 className = 'f1' > ROBOFRIENDS < /h1> <
                SearchBox searchChange = {
                    this.onSearchChange
                }
                / >
                <Scroll>

                    <
                    CardList robots = {
                    filterrobot
                    }
                    / >
                </Scroll>


                <
                /div>

            );
        }
    }






export default App;
