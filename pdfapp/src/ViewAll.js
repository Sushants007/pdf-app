import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import View from './View';

const ViewAll = () => {
    const [pdfs, setPdfs] = useState([]);
    const [selectedPdf, setSelectedPdf] = useState(null);
    const[id,setId]=useState();

    const baseURL="http://localhost:3001"
    

    useEffect(() => {
      axios.get(`${baseURL}/pdfs`)
        .then(response => {
          setPdfs(response.data);
        })
        .catch(error => console.error(error));
    }, []);
  
    return (
      <div>
        <ul>
          {pdfs.map((pdf,i)=> (
            <button key={pdf._id} onClick={()=>{setId(pdf._id)}}>{pdf._id}</button>
          ))}
          {id && (
          <View onClose={()=>{setSelectedPdf(null)}}
          pdfId={id} />
        )}
        </ul>
        
      </div>
    );
  }
  

export default ViewAll;