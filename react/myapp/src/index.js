import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

function Compoment() {
  return <h1>I am xxxx</h1>;
}

//容器的写法
class Title extends Component{
  constructor(props){
    super(props);
  }
  render(props){
    return <h1>{this.props.children}</h1>
  }
};

class ES6Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 1
    };
    //this.handleClick = this.handleClick.bind(this); //给事件修改this作用域
  }
  handleClick(){
    this.setState({
      age: this.state.age + 1
    });
  }
  onValueChange(e){
    this.setState({
      age: e.target.value
    });
  }
  render() {
    // setTimeout(() => {
    //   this.setState({
    //     name: 'Rosen Test'
    //   });
    // },1000);
    return (
      <div>
        <h1>I am {this.props.name}</h1>
        <h2>{this.state.age}</h2>
        <button  onClick={(e) => {this.handleClick(e)}}>加一岁</button>
        <input type="text" onChange={(e) => {this.onValueChange(e)}}/>
      </div>
    );
  }
}

let style = {};

let name = "Rosen";
let names = ["Rosen", "Geely", "Jimin"];
let flag = false;
let jsx = (
  <div className="jsx" style={style}>
    <App/>
    <Title>
      <span>App Span</span>
    </Title>
    {/* {
      flag ? <p>I am {name}</p> : <p>I am not {name}</p>
    }
    {
      names.map((name,index) => <p key={index}>Hello, I am {name}</p>)
    } */}
    <Compoment />
    <ES6Component name="Rosen" />
    
  </div>
);
ReactDOM.render(jsx, document.getElementById("root"));
