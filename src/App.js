import './App.css';
import {Component} from "react";

function Something() {
    return <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusantium ad aliquam aut consequatur
        consequuntur corporis enim, eos explicabo hic magni natus neque odio pariatur perspiciatis quam quis ullam
        vero.</p>
}

function Data(data) {
    return <p> Data {JSON.stringify(data)} </p>;
}

function DateTime() {
    return (
        <div>
            {new Date().toLocaleTimeString()}
        </div>
    );
}

class ClassDateTime extends Component {

    render() {
        return (
            <div>
                {new Date().toLocaleTimeString()}
            </div>
        );
    }
}

class ClassComponent extends Component {
    render() {
        return (
            <div>
                {JSON.stringify(this.state)}
            </div>
        );
    }
}

function App() {
    return (
        <div className="App">
            <Something/>
            <Data {...{"q": 2, 2: "q"}}/>
            <DateTime/>
            <ClassDateTime/>
            <ClassComponent/>
        </div>
    );
}

export default App;
