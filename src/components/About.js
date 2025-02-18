import User from "./User";
import React from "react";
import UserClass from "./UserClass";

class About extends React.Component{
  constructor(props) {
    super(props);
  }

  ComponentDidMount() {}

  render() {
    return (
            <div>
              <h1>About</h1>
              <h2>This is Nameste React React Series</h2>
              <UserClass name={"Nitin Sutar"} location={"Sumerpur"}/>
            </div>
          );
        }
};

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Nameste React React Series</h2>

//       <UserClass name={"Nitin Sutar"} location={"Sumerpur"}/>
//     </div>
//   );
// };

export default About;
