// Function to print the resume
function printResume() {
  window.print();
}

// Function to download the resume as a PDF
function downloadResume() {
  const element = document.getElementById('resume');
  html2pdf(element);
}
