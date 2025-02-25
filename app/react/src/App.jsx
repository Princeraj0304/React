// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // import './App.css'
// // jsx= javascript xml
// // jsx is used to write html and javascript file in a single file
import {Contact,Email} from './contact.jsx'
import Gallery from './gallery.jsx'
import Services from './services.jsx'
import About from './about.jsx'
function App(){
  return(
      // <div>
      // {/* <h1>Welcome to React Class</h1>
      // <p>Hello World My name is Prince Raj</p>
      // <img src="s.jpg" alt=""  /> */}
      // </div>
      <>
      <h1>Welcome to react class</h1>
      <About/>
      <Services/> 
      <Gallery/>
      <Contact/>
      <Email/>  
      </>
  )
}

// There are two types of components ...Functional components and class component.
// In jsx the first letter name of the function should be capital

// What is fragment
// Difference between npx and npm
// fragment : Empty div <> </>
// Write four rules of jsx
// jsx returns only one element 
// There are two types of component in react : Functional component and class component
// In App.jsx we render components

export default App
