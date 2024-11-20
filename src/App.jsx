import { useState } from "react";
import UserForm from "./components/UserForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-4 pt-5 px-4 w-50">
      <UserForm />
    </div>
  );
}

export default App;
