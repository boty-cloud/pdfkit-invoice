const fs = require("fs");
const PDFDocument = require("pdfkit");
const afipFunctions = require('./html_afip_items_paginas.js');

// Create a new PDF document
const doc = new PDFDocument();

const puppeteer = require('puppeteer');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {

    // get HTML content from ./GRIFERIA-RODDEX-SA_00002_00000027-junio.html
    // const htmlContent = fs.readFileSync('./GRIFERIA-RODDEX-SA_00002_00000027-junio.html', 'utf8');

    var items = [
      { "sku": "1-60", "name": "John", "q": 25, "pu": 85496.25, "pdto": 11.5, "dto": 23, "st": 3333335.52 },
      { "sku": "2-60", "name": "Maria", "q": 30, "pu": 653, "pdto": 00, "dto": 00, "st": 333 },
      { "sku": "3-60", "name": "Nico", "q": 35, "pu": 9878123, "pdto": 11, "dto": 224222, "st": 333333 },
      { "sku": "4-60", "name": "Emily", "q": 20, "pu": 1234.56, "pdto": 7.5, "dto": 15, "st": 24691.2 },
      { "sku": "5-60", "name": "Michael", "q": 15, "pu": 987.65, "pdto": 5, "dto": 10, "st": 14814.75 },
      { "sku": "6-60", "name": "Sophia", "q": 18, "pu": 5432.1, "pdto": 8.5, "dto": 17, "st": 97777.8 },
      { "sku": "7-60", "name": "Jacob", "q": 12, "pu": 4567.89, "pdto": 4, "dto": 8, "st": 54814.68 },
      { "sku": "8-60", "name": "Olivia", "q": 22, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 29859.28 },
      { "sku": "9-60", "name": "William", "q": 25, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 61708.75 },
      { "sku": "10-60", "name": "Ava", "q": 28, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 37981.92 },
      { "sku": "11-60", "name": "Ethan", "q": 32, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 79067.2 },
      { "sku": "12-60", "name": "Isabella", "q": 35, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 47460.6 },
      { "sku": "13-60", "name": "James", "q": 40, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 98734 },
      { "sku": "14-60", "name": "Mia", "q": 45, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 61072.8 },
      { "sku": "15-60", "name": "Alexander", "q": 50, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 123417.5 },
      { "sku": "16-60", "name": "Abigail", "q": 55, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 74654.2 },
      { "sku": "17-60", "name": "Benjamin", "q": 60, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 148830 },
      { "sku": "18-60", "name": "Emily", "q": 65, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 88235.6 },
      { "sku": "19-60", "name": "Elijah", "q": 70, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 173784.5 },
      { "sku": "2-60", "name": "Maria", "q": 30, "pu": 653, "pdto": 00, "dto": 00, "st": 333 },
      { "sku": "3-60", "name": "Nico", "q": 35, "pu": 98754123, "pdto": 11, "dto": 224222, "st": 333333 },
      { "sku": "4-60", "name": "Emily", "q": 20, "pu": 1234.56, "pdto": 7.5, "dto": 15, "st": 24691.2 },
      { "sku": "5-60", "name": "Michael", "q": 15, "pu": 987.65, "pdto": 5, "dto": 10, "st": 14814.75 },
      { "sku": "6-60", "name": "Sophia", "q": 18, "pu": 5432.1, "pdto": 8.5, "dto": 17, "st": 97777.8 },
      // { "sku": "7-60", "name": "Jacob", "q": 12, "pu": 4567.89, "pdto": 4, "dto": 8, "st": 54814.68 },
      // { "sku": "8-60", "name": "Olivia", "q": 22, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 29859.28 },
      // { "sku": "9-60", "name": "William", "q": 25, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 61708.75 }, // pag 1
      // { "sku": "10-60", "name": "Ava", "q": 28, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 37981.92 },
      // { "sku": "11-60", "name": "Ethan", "q": 32, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 79067.2 },
      // { "sku": "12-60", "name": "Isabella", "q": 35, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 47460.6 },
      // { "sku": "13-60", "name": "James", "q": 40, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 98734 },
      // { "sku": "14-60", "name": "Mia", "q": 45, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 61072.8 },
      // { "sku": "15-60", "name": "Alexander", "q": 50, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 123417.5 },
      // { "sku": "16-60", "name": "Abigail", "q": 55, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 74654.2 },
      // { "sku": "17-60", "name": "Benjamin", "q": 60, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 148830 },
      // { "sku": "18-60", "name": "Emily", "q": 65, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 88235.6 },
      // { "sku": "19-60", "name": "Elijah", "q": 70, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 173784.5 },
      // { "sku": "2-60", "name": "Maria", "q": 30, "pu": 653, "pdto": 00, "dto": 00, "st": 333 },
      // { "sku": "3-60", "name": "Nico", "q": 35, "pu": 98754123, "pdto": 11, "dto": 224222, "st": 333333 },
      // { "sku": "4-60", "name": "Emily", "q": 20, "pu": 1234.56, "pdto": 7.5, "dto": 15, "st": 24691.2 },
      // { "sku": "5-60", "name": "Michael", "q": 15, "pu": 987.65, "pdto": 5, "dto": 10, "st": 14814.75 },
      // { "sku": "6-60", "name": "Sophia", "q": 18, "pu": 5432.1, "pdto": 8.5, "dto": 17, "st": 97777.8 },
      // { "sku": "7-60", "name": "Jacob", "q": 12, "pu": 4567.89, "pdto": 4, "dto": 8, "st": 54814.68 },
      // { "sku": "8-60", "name": "Olivia", "q": 22, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 29859.28 },
      // { "sku": "9-60", "name": "William", "q": 25, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 61708.75 },
      // { "sku": "10-60", "name": "Ava", "q": 28, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 37981.92 },
      // { "sku": "11-60", "name": "Ethan", "q": 32, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 79067.2 },
      // { "sku": "12-60", "name": "Isabella", "q": 35, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 47460.6 },
      // { "sku": "13-60", "name": "James", "q": 40, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 98734 },
      // { "sku": "14-60", "name": "Mia", "q": 45, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 61072.8 },
      // { "sku": "15-60", "name": "Alexander", "q": 50, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 123417.5 },
      // { "sku": "16-60", "name": "Abigail", "q": 55, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 74654.2 },
      // { "sku": "17-60", "name": "Benjamin", "q": 60, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 148830 },
      // { "sku": "18-60", "name": "Emily", "q": 65, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 88235.6 }, // pag 2
      // { "sku": "19-60", "name": "Elijah", "q": 70, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 173784.5 },
      // { "sku": "2-60", "name": "Maria", "q": 30, "pu": 653, "pdto": 00, "dto": 00, "st": 333 },
      // { "sku": "3-60", "name": "Nico", "q": 35, "pu": 98754123, "pdto": 11, "dto": 224222, "st": 333333 },
      // { "sku": "4-60", "name": "Emily", "q": 20, "pu": 1234.56, "pdto": 7.5, "dto": 15, "st": 24691.2 },
      // { "sku": "5-60", "name": "Michael", "q": 15, "pu": 987.65, "pdto": 5, "dto": 10, "st": 14814.75 },
      // { "sku": "6-60", "name": "Sophia", "q": 18, "pu": 5432.1, "pdto": 8.5, "dto": 17, "st": 97777.8 },
      // { "sku": "7-60", "name": "Jacob", "q": 12, "pu": 4567.89, "pdto": 4, "dto": 8, "st": 54814.68 },
      // { "sku": "8-60", "name": "Olivia", "q": 22, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 29859.28 },
      // { "sku": "9-60", "name": "William", "q": 25, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 61708.75 },
      // { "sku": "10-60", "name": "Ava", "q": 28, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 37981.92 },
      // { "sku": "11-60", "name": "Ethan", "q": 32, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 79067.2 },
      // { "sku": "12-60", "name": "Isabella", "q": 35, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 47460.6 },
      // { "sku": "13-60", "name": "James", "q": 40, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 98734 },
      // { "sku": "14-60", "name": "Mia", "q": 45, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 61072.8 },
      // { "sku": "15-60", "name": "Alexander", "q": 50, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 123417.5 },
      // { "sku": "16-60", "name": "Abigail", "q": 55, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 74654.2 },
      // { "sku": "17-60", "name": "Benjamin", "q": 60, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 148830 },
      // { "sku": "18-60", "name": "Emily", "q": 65, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 88235.6 },
      // { "sku": "19-60", "name": "Elijah", "q": 70, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 173784.5 },
      // { "sku": "2-60", "name": "Maria", "q": 30, "pu": 653, "pdto": 00, "dto": 00, "st": 333 },
      // { "sku": "3-60", "name": "Nico", "q": 35, "pu": 98754123, "pdto": 11, "dto": 224222, "st": 333333 },
      // { "sku": "4-60", "name": "Emily", "q": 20, "pu": 1234.56, "pdto": 7.5, "dto": 15, "st": 24691.2 },
      // { "sku": "5-60", "name": "Michael", "q": 15, "pu": 987.65, "pdto": 5, "dto": 10, "st": 14814.75 },
      // { "sku": "6-60", "name": "Sophia", "q": 18, "pu": 5432.1, "pdto": 8.5, "dto": 17, "st": 97777.8 },
      // { "sku": "7-60", "name": "Jacob", "q": 12, "pu": 4567.89, "pdto": 4, "dto": 8, "st": 54814.68 },
      // { "sku": "8-60", "name": "Olivia", "q": 22, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 29859.28 },
      // { "sku": "9-60", "name": "William", "q": 25, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 61708.75 },
      // { "sku": "10-60", "name": "Ava", "q": 28, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 37981.92 },
      // { "sku": "11-60", "name": "Ethan", "q": 32, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 79067.2 },
      // { "sku": "12-60", "name": "Isabella", "q": 35, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 47460.6 },
      // { "sku": "13-60", "name": "James", "q": 40, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 98734 },
      // { "sku": "14-60", "name": "Mia", "q": 45, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 61072.8 },
      // { "sku": "15-60", "name": "Alexander", "q": 50, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 123417.5 },
      // { "sku": "16-60", "name": "Abigail", "q": 55, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 74654.2 },
      // { "sku": "17-60", "name": "Benjamin", "q": 60, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 148830 },
      // { "sku": "18-60", "name": "Emily", "q": 65, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 88235.6 },
      // { "sku": "19-60", "name": "Elijah", "q": 70, "pu": 2468.35, "pdto": 9, "dto": 18, "st": 173784.5 },

      // { "sku": "28-60", "name": "Avery", "q": 115, "pu": 1357.24, "pdto": 6.5, "dto": 13, "st": 159144.6 },
    ]

    let nombre = "John Doe";
    let generatedHTML = afipFunctions.html_afip(nombre,items);

    const htmlContent = generatedHTML;


    // Set the HTML content on the page
    await page.setContent(htmlContent);
    console.log('HTML content set');
    // // Wait for specific elements or events using await and page.waitFor function
    // await page.waitFor('</html>');
    // console.log('Page loaded');

    // Generate PDF from the page content
    await page.pdf({ path: 'cbaaaaaaaaadaaa4.pdf', format: 'A4' });
    console.log('PDF generated successfully');
    console.log('PDF generation completed successfully');

    // Close the browser
    await browser.close();
    
  } catch (error) {

    console.error('An error occurred during PDF generation:', error);
    // Close the browser
    await browser.close();
  }

}

generatePDF().catch((error) => {
  console.error('Error generating PDF:', error);
});
