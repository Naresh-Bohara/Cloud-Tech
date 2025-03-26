import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Hey there!</h1>
      <Card 
        title="Naresh Bohara" 
        image="https://naresh-bohara.com.np/assets/logo3-O_p_glfc.jpg" 
        description="Full Stack Developer | MERN Developer" 
        btnText="My Portfolio" 
        btnLink="https://naresh-bohara.com.np"
      />
    </div>
  );
}

export default App;
