import React from "react";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="mt-10 mb-10">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(18, minmax(0, 1fr))",
          gridTemplateRows: "auto",
          gridGap: 20,
        }}
      >
        <Sidebar />
        <div className="col-start-3 col-span-3">
          <img
            src={require("./assets/image/1.jpg")}
            alt="namestory"
            className="rounded-lg"
          />
        </div>

        <Card
          image={require("./assets/image/1.jpg")}
          namestory={"namestory"}
          link={"https://nhentai.net/g/251365/"}
        />
        <Card
          image={require("./assets/image/1.jpg")}
          namestory={"namestory"}
          link={"https://nhentai.net/g/251365/"}
        />
        <Card
          image={require("./assets/image/1.jpg")}
          namestory={"namestory"}
          link={"https://nhentai.net/g/251365/"}
        />
        <Card
          image={require("./assets/image/1.jpg")}
          namestory={"namestory"}
          link={"https://nhentai.net/g/251365/"}
        />
        <div className="col-start-3 col-span-3">
          <img
            src={require("./assets/image/1.jpg")}
            alt="namestory"
            className="rounded-lg"
          />
        </div>

        <Card
          image={require("./assets/image/1.jpg")}
          namestory={"namestory"}
          link={"https://nhentai.net/g/251365/"}
        />
        <Card
          image={require("./assets/image/1.jpg")}
          namestory={"namestory"}
          link={"https://nhentai.net/g/251365/"}
        />
      </div>
    </div>
  );
}

export default App;
