import React from 'react'

// style css
import "./App.css"

// Components
import About from './Props/About';
import Home from "./Props/Home";
import Footer from "./Props/Footer"
import State from './State/State';
import Handle from './Handle/Handle';
import Time from './Time/Time';
import Goal from "./Condtion/Goal";
import Garage from "./Condtion/Garage";
import Login from './Condtion/Login';
import ListCode1 from './mapList/ListCode1';
import ListParent1 from './mapList/ListParent1';
import UseEffect from './Useffect/UseEffect';
import Axios from './Axios/Axios';
import Counter from './Reducer/Counter';

function App() {
  const cars = ['lanser', 'BMW', 'Audi'];
  // const cars = [];

  return (
      <div>

          {/* Explain Props */}
            <Home  name="abdulrahman" age="30" job="full stack"  />
            <About  name="eslam" age="25" job="front end"  img3="/images/Course Logo.jpg" img2="/images/sta-je-html.jpg" img1="/images/how-can-i-learn-javascript-jahed-net.png" /> 
            <Footer img3="/images/Course Logo.jpg" img2="/images/sta-je-html.jpg" img1="/images/how-can-i-learn-javascript-jahed-net.png" />
          {/* Explain Props */}














          {/* Explain State */}
            <State />
          {/* Explain State */}





          

          {/* Explain Handle */}
            <Handle />
          {/* Explain Handle */}

          {/* Explain UseEffect */}
            <UseEffect />
          {/* Explain UseEffect */}

          {/* Explain Axios */}
            <Axios /> 
          {/* Explain Axios */}

          {/* Explain condtional */}
            {/* first explain condtional */}
            <Goal isGoal={false} />

            {/* second explain condtional */}
            <Goal isGoal={true} />
            <Garage cars={cars} />

            {/* three explain condtional */}
            <Login />
          {/* Explain condtional */}

          {/* Explain List(map) */}
            <ListCode1 />
            <ListParent1 />
          {/* Explain List(map) */}

          {/* Explain Time */}
            <Time />
          {/* Explain Time */}


          {/* Explain Context */}
            export const UserContext = React.createContext();
            export const TypeContext = React.createContext();

            {/* const [user, setUser] = useState("abdulrahman alaa"); */}

            <UserContext.Provider value={user}>
              <TypeContext.Provider value={"my age is 26"}>
                <ComponentC />
              </TypeContext.Provider>
            </UserContext.Provider>
          {/* Explain Context */}









          {/* Explain Reducer */}
            <Counter />
          {/* Explain Reducer */}

      </div>
  )
}

export default App



