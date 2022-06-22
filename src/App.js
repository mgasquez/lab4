// import logo from './logo.svg';
// import './App.css';
import CreateCard from "./CreateCard";
// import "./styles.css";
import CardShowcase from "./CardShowcase";
import { createContext, useContext, useState } from "react";
import { Router, Outlet, ReactLocation } from "react-location";


const location = new ReactLocation();

const FormDataContext = createContext();

export const useFormData = () => {
  const context = useContext(FormDataContext);
  return context;
};

function App() {
  const [formData, setFormData] = useState ({
    fullName: "",
    aboutMe: "",
    githubURL: "",
    twitterURL: "",
    favouriteBooks: "",
    HTML: false,
    CSS: false,
    JS: false,
    Git: false,
    React: false,
    NodeJS: false});

  const routes=[
      {
      path: '/',
      element:<CreateCard formData={formData} setFormData={setFormData} />
      },
      {
        path: "showcase", 
        element: <CardShowcase />
      }
    ];
  return (
      <Router routes={routes} location={location}>
          <FormDataContext.Provider value={{formData, setFormData}} >
            <Outlet />
          </FormDataContext.Provider>
      </Router>
  );
}

export default App;
