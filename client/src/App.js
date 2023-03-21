import { Route } from "react-router";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <div className="App">
     
      {/* <Route exact path='/'>   
        <Landing />
      </Route>  ---- con la siguiente forma o de pueden pasar props */}
      <Route exact path='/' component={Landing}/>
     
      {/* <Route path='/home'>
        <Home />
      </Route> ----------con la siguiente forma si se pueden psar props--------- */}
      <Route path='/home' render={() => <Home/>} />

    </div>
  );
}

export default App;
