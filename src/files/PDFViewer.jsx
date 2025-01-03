"use client";
import React, { useEffect, useState } from "react";
import { getDocument } from "pdfjs-dist/legacy/build/pdf";

const PDFViewer = ({ url }) => {
  const [pdf, setPdf] = useState(26);

  useEffect(() => {
    const loadPdf = async () => {
      const pdfDoc = await getDocument(url).promise;
      setPdf(pdfDoc);
    };

    loadPdf();
  }, [url]);

  if (!pdf) {
    return <div>Loading PDF...</div>;
  }

  return (
    <div>
      {pdf.numPages > 0 && (
        <div>
          {Array.from(Array(pdf.numPages), (_, i) => (
            <div key={i}>
              <canvas id={`page-${i + 1}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
