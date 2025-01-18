import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import ObjectList from "./components/objects";
import SubjectList from "./components/subjects";

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: "1rem" }}>
        <ObjectList />
        <SubjectList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
