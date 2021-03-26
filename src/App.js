import "./App.css";
import Header from "./components/Header";
import Calculator from "./pages/Calculator";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "./consts";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import All from "./pages/All";

const App = () => {
  const ways = [ "Unknown yet, make a choice.",
  "During a magic show, you will get brainwashed to a Trump Supporter. But the magicien will forget to undo the brainwash. That evening you decide to inject yourself with Javel to protect yourself from the Corona Virus.",
  "One day you will have overslept and be late for work. In the hurry you will run past a stray cat on your driveway without feeding it. As a revenge the stray cat will get all his stray buddies and attack you. You will die of the diseases they carried.",
  "On your way to the bathroom, you will slip and fall on the back of your head, because you were wearing socks. A few hours later you will wake up and continu crawling to the batchroom. Once on the toilet you dont notice the snake coming out of it and it bites you in your sensitive parts. You die a slow and painful death. ",
  "You will be working as a JS developper. One day you will find your match, a bug you can't seem to fix. You try and try and try. With heavy sleep deprevation and a caffeine overdose, you head to Stackoverflow and sell your soul to fix the bug. The bug is fixed and you go to bed happy. You will never wake up again.",
  "You will get trampled by a pink Elephant."];
  const locations = [ "An oasis in the Sahara", "A Dixie toilet", "Media Markt", "28361" ,"The dentist waiting area", ];

  return (
    <>
    
      <NavBar/>
      
      <Switch>
          <Route path={ROUTES.CALCULATOR}>
            <Header subtitle="To the GRAAAVE"/>
            <Calculator ways={ways} locations={locations}/>
          </Route>

          <Route path={ROUTES.ALL}>
            <Header subtitle="On this page you find all possible results:"/>
            <All ways={ways} locations={locations} />
          </Route>

          <Route path={ROUTES.HOME}>
            <Home />
          </Route>

        </Switch>
      
      <Footer/>
    </>
    );
};

export default App;
