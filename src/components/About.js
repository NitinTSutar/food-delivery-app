import User from "./User";
import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component{
  constructor(props) {
    super(props);
  }


  render() {
    return (
            <div className="flex flex-col justify-center items-center">
              <UserClass name={"Nitin Sutar"} location={"Sumerpur"}/>
            </div>
          );
        }
};


export default About;
