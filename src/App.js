import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Body from './Body';
import Footer from './Footer';
import LowerBar from './LowerBar';
import UpperBar from './UpperBar';
function App() {
  return (
    <>
    <UpperBar />
    <LowerBar />
     <Body />
     <Footer />
    </>
  );
}

export default App;
