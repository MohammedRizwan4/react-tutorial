import React from "react";
import User from "./User";

function App() {
  
  return (
    <>
      <User />
      {Other()}
    </>
  )
}

class Other extends React.Component {
  render() {
    return <div>Other Component in same file</div>
  }
}

export default App
