import React from 'react';

const DownloadLink = () => {
  const handleDownload = () => {
    // You can customize this function to generate or fetch the content you want to download
    const content = 'Hello, this is the content to be downloaded!';
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Create an anchor element
    const link = document.createElement('a');
    link.href = url;

    // Set the filename for the download
    link.download = 'https://github.com/poxii/my-portfolio/Antoni_Kowalczyk.pdf';

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);

    // Release the URL object
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <p>Click the button to download a file:</p>
      <button onClick={handleDownload}>Download File</button>
    </div>
  );
};

export default DownloadLink;
