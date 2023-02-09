import React, { useEffect, useState } from 'react';
import axios from 'axios';
var pdfjsLib =require('pdfjs-dist/build/pdf');
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;


const View = ({ pdfId, onClose }) => {
    
      const [pdfData, setPdfData] = useState(null);
      const baseURL="http://localhost:3001"
      console.log(pdfId)
      useEffect(() => {
        (async () => {
          const response = await axios.get(`${baseURL}/pdf/${pdfId}`);
          const data = response.data;
          const buffer = new Uint8Array(data.pdfData.data);
          setPdfData(buffer);
        })();
      }, [pdfId]);
    
      const [pdfBuffer, setPdfBuffer] = useState(null);

  const handleDisplay = async () => {
    console.log(pdfData)
    const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
    const pdfPage = await pdf.getPage(1);

    const viewport = pdfPage.getViewport({ scale: 1.5 });
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    pdfPage.render({
      canvasContext: ctx,
      viewport: viewport,
    });
    console.log(canvas.toDataURL())
    setPdfBuffer(canvas.toDataURL());

    
  };
  return (
    <div>
      <button onClick={handleDisplay}>Display PDF</button>
      {pdfBuffer && (
        <img src={`${pdfBuffer}`}
        width="450px"
        height="450px"
        className="myClassname"
        display="initial"
        position="relative"/>
      )}
    </div>
  );
    };

export default View;