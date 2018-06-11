import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
import { HashRouter as Router,Route,Link,Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();

//下面是学习笔记
function Compoment() {
  return <h1>I am xxxx</h1>;
}

//容器的写法
class Title extends Component {
  constructor(props) {
    super(props);
  }
  render(props) {
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
  handleClick() {
    this.setState({
      age: this.state.age + 1
    });
  }
  onValueChange(e) {
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
        <button onClick={(e) => { this.handleClick(e) }}>加一岁</button>
        <input type="text" onChange={(e) => { this.onValueChange(e) }} />
      </div>
    );
  }
}

//路由
class A extends Component{
  constructor(props){
    super(props);
  }
  render(){
  return (
      <div>
        <Switch>
          <Route exact path={`${this.props.match.path}`} render={(route) => {
            return <div>A组件：{route.match.path}</div>
          }}/> 
          <Route exact path={`${this.props.match.path}/sub`} render={(route) => {
            return <div>A sub组件</div>
          }}/> 
          <Route path={`${this.props.match.path}/:id`} render={(route) => {
            return <div>A组件参数是：{route.match.params.id}</div>
          }}/>
        </Switch> 
      </div> 
    );
  }
};
class B extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return <div>Component B</div>;
  }
};
class Wrapper extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <Link to="/a">组件A</Link>
        <br/>
        <Link to="/a/sub">组件A sub</Link>
        <br/>
        <Link to="/a/123">带参数的组件A</Link>
        <br/>
        <Link to="/b">组件B</Link>
        
        {this.props.children}
      </div>
    );
  }
};



let style = {};

let name = "Rosen";
let names = ["Rosen", "Geely", "Jimin"];
let flag = false;
let jsx = (
  <div className="jsx" style={style}>
    {/* <App/> */}
    <Router>
      <Wrapper>
        <Route path="/a" component={A}/>
        <Route path="/b" component={B}/>
      </Wrapper>
    </Router>

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
//ReactDOM.render(jsx, document.getElementById("root"));