import React from "react";


function App() {
  const name="sarvin"
    return (
        <div className="App">
            <Person 
            name={"sarvin"}
            email={"salam@"}
            age={43}
            ismarried={true}
            courses={["react","mysql","python"]}
            />
        </div>
    );
}

export default App;
