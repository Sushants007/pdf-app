import React, { useState } from "react";
import pdfjs from "pdfjs-dist";
import axios from "axios";
import Upload from "./Upload";
import ViewAll from "./ViewAll";


const App = () => {
  

  return (
    <div>
      <ViewAll/>
     <Upload/>
    </div>
  );
};

export default App;
