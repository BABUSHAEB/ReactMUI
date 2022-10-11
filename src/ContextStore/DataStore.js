import React,{ createContext,useState } from "react";







export const SignUpData = createContext();
export default function DataStore(props) {
  const [formData, setFormData] = useState([]);
  const InitialData = { 
    currentaddress: "", 
  email: "",
   firstname: "",
   gender: "",
   lastname: "",
   mobileno: "",
   password: "",
   permanentaddress: "" 
   };
  const [formValues, setFormValues] = useState(InitialData);


  return (
    <SignUpData.Provider value={{formValues,setFormValues,formData,setFormData,InitialData}}>
        {props.children}
    </SignUpData.Provider>
  )
}

