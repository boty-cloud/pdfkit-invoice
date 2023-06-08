const fs = require("fs");
const PDFDocument = require("pdfkit");
const afipFunctions = require('./html_afip_items.js');

// Create a new PDF document
const doc = new PDFDocument();

const puppeteer = require('puppeteer');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // get HTML content from ./GRIFERIA-RODDEX-SA_00002_00000027-junio.html
  // const htmlContent = fs.readFileSync('./GRIFERIA-RODDEX-SA_00002_00000027-junio.html', 'utf8');

  items = [
    {
      item: "TC 100",
      name: "Toner Cartridge",
      quantity: 2,
      amount: 6000
    },
    {
      item: "USB_EXT",
      name: "USB Cable Extender",
      quantity: 1,
      amount: 2000
    }
  ];

  let nombre = "John Doe";
  let generatedHTML = afipFunctions.html_afip(nombre,items);

  const htmlContent = generatedHTML;

  // Set the HTML content on the page
  await page.setContent(htmlContent);

  // Generate PDF from the page content
  await page.pdf({ path: 'aaa4.pdf', format: 'A4' });

  // Close the browser
  await browser.close();

  console.log('PDF generated successfully!');
}

generatePDF().catch((error) => {
  console.error('Error generating PDF:', error);
});
