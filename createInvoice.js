const fs = require("fs");
const PDFDocument = require("pdfkit");

// Create a new PDF document
const doc = new PDFDocument();

const puppeteer = require('puppeteer');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // get HTML content from ./GRIFERIA-RODDEX-SA_00002_00000027-junio.html
  const htmlContent = fs.readFileSync('./GRIFERIA-RODDEX-SA_00002_00000027-junio.html', 'utf8');

  // Set the HTML content on the page
  await page.setContent(htmlContent);

  // Generate PDF from the page content
  await page.pdf({ path: 'a4.pdf', format: 'A4' });

  // Close the browser
  await browser.close();

  console.log('PDF generated successfully!');
}

generatePDF().catch((error) => {
  console.error('Error generating PDF:', error);
});
