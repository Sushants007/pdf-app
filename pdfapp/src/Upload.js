import axios from 'axios';
import React, { useState } from 'react'
import './Upload.css'

const Upload=() =>{
    const [file, setFile] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
  
    const baseURL="http://localhost:3001"
  
    const handleFileChange = event => {
      setFile(event.target.files[0]);
    };
    const handleSubmit = async event => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('pdf', file);
      console.log(formData)
      const response = await axios.post(`${baseURL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setFile(null);
      setIsOpen(false);
    };
    return (
      <div className='upload'>
           <button onClick={() => setIsOpen(true)}>Upload PDF</button>
        {isOpen && (
          <div className="modal">
            <form onSubmit={handleSubmit}>
              <input type="file" onChange={handleFileChange} accept="application/pdf" />
              <button type="submit">Upload</button>
              <button type="button" onClick={() => setIsOpen(false)}>Cancel</button>
            </form>
          </div>
        )}
      </div>
    )
}

export default Upload