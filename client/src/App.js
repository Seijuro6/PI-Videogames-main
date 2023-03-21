import { Route, useLocation } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import {Home, Landing, Detail, Form} from "./views";


function App() {
  const location = useLocation()

  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}
      {/* <Route exact path='/'>   
        <Landing />
      </Route>  ---- con la siguiente forma no se pueden pasar props */}
      <Route exact path='/' component={Landing}/>
      <Route exact path='/detail' component={Detail}/>
      <Route exact path='/create' component={Form}/>
      {/* ----------con la siguiente forma si se pueden psar props---------   */}
      <Route path='/home' render={() => <Home/>} />



    </div>
  );
}

export default App;
