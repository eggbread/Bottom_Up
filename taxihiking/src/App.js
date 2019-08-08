import React,{Component} from 'react';
import './App.css';
import Category from'./components/Category'
import List from './components/List';
import Menu from './components/Menu';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Header from './components/Header';
import Order from './components/Order';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import StoreMange from './components/StoreManage'
class App extends Component {
  
  render(){
        return (
          <div className="App">   
            <div className="body">
              <Router>
                <Route path="/" component={Header}/>
                <Route exact path="/" component={Category}/>
                <Route exact path="/" component={Footer}/>
                <Route path="/list/:category/:location" component={List}/>
                <Route exact path="/menu/:storeID" component={Menu}/>
                <Route path="/menu/:store/order" component={Order}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/storemanage" component={StoreMange}/>
              </Router>  
            </div>
         </div>
      );
    } 
}

export default App;
