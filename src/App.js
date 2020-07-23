import React from 'react';
import './App.css';
import Navbar from './Components/Layouts/Navbar'
import User from './Components/Users/User';
import Alert from './Components/Layouts/Alert';
import About from './Components/Pages/About';
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { Home } from './Components/Pages/Home';
import {NotFound} from './Components/Pages/NotFound';


const App = ()=> {
  
  // async componentDidMount(){
  //   this.setState({loading:true})
  //  const res= await axios
  // .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

  // this.setState({users:res.data,loading:false})
  // }
 
   
  

  

  return (
    <GithubState>
      <AlertState>
    <Router>
    <div className="App">
      <Navbar />
      <div className='container'>
        <Alert/>
        <Switch>
          <Route exact path='/' component={Home}/>
         <Route exact path='/about' component={About}/>
         <Route exact path='/user/:login' component={User}/>
         <Route component={NotFound}/>
        </Switch>
      </div>
    </div>
    </Router>
    </AlertState>
    </GithubState>
  );
}

export default App;
