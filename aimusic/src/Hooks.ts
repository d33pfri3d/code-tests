// import React, { useState } from "react";
// import { any } from "prop-types";

export interface User {
  email?: string
  password?: string
}

// const useLoginForm = (callback:any) => {
//   const [inputs, setInputs] = useState({});

//   const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
//     if (event) event.preventDefault();
//     callback();
//   };
//   const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
//     event.persist();
//     setInputs(inputs => ({
//       ...inputs,
//       [event.target.email]: event.target.value
//     }));
//   };
//   return {
//     handleSubmit,
//     handleInputChange,
//     inputs
//   };

//   return null;
// };

// export default useLoginForm;
