const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function createAttachedResume() {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Colors matching the original attached resume
  const greenAccent = rgb(0.11, 0.44, 0.27); // #1d7044
  const textBlack = rgb(0.05, 0.05, 0.05);
  const margin = 45;

  // Single Page A4
  const page = pdfDoc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  let y = height - 40;

  // 1. Header: Centered ADAIKALARAI S
  const nameText = 'ADAIKALARAJ S';
  const nameWidth = fontBold.widthOfTextAtSize(nameText, 24);
  page.drawText(nameText, {
    x: (width - nameWidth) / 2,
    y: y,
    size: 24,
    font: fontBold,
    color: textBlack,
  });

  y -= 22;

  // Contact Info Row 1
  const contactText1 = 'Phone: +971 543351693       Email: adaikalaraj1993@gmail.com       Address: Ajman.UAE';
  const c1Width = fontRegular.widthOfTextAtSize(contactText1, 9.5);
  
  // Draw green labels & text
  page.drawText('Phone:', { x: (width - c1Width) / 2, y: y, size: 9.5, font: fontBold, color: greenAccent });
  page.drawText('+971 543351693', { x: (width - c1Width) / 2 + 38, y: y, size: 9.5, font: fontRegular, color: textBlack });

  page.drawText('Email:', { x: (width - c1Width) / 2 + 155, y: y, size: 9.5, font: fontBold, color: greenAccent });
  page.drawText('adaikalaraj1993@gmail.com', { x: (width - c1Width) / 2 + 188, y: y, size: 9.5, font: fontRegular, color: textBlack });

  page.drawText('Address:', { x: (width - c1Width) / 2 + 355, y: y, size: 9.5, font: fontBold, color: greenAccent });
  page.drawText('Ajman.UAE', { x: (width - c1Width) / 2 + 400, y: y, size: 9.5, font: fontRegular, color: textBlack });

  y -= 15;

  // LinkedIn Row
  const linkedinUrl = 'https://www.linkedin.com/in/adaikalaraj-selvaraj-b7b275288';
  const lWidth = fontRegular.widthOfTextAtSize(linkedinUrl, 9.5);
  page.drawText(linkedinUrl, {
    x: (width - lWidth) / 2,
    y: y,
    size: 9.5,
    font: fontRegular,
    color: textBlack,
  });

  y -= 10;

  // Header Divider Green Line
  page.drawLine({
    start: { x: margin, y },
    end: { x: width - margin, y },
    thickness: 1.5,
    color: greenAccent,
  });

  y -= 18;

  function drawSectionHeader(title) {
    page.drawText(title, {
      x: margin,
      y: y,
      size: 11,
      font: fontBold,
      color: textBlack,
    });
    y -= 4;
    page.drawLine({
      start: { x: margin, y },
      end: { x: width - margin, y },
      thickness: 1.2,
      color: greenAccent,
    });
    y -= 14;
  }

  // SUMMARY
  drawSectionHeader('SUMMARY');
  const summaryLines = [
    'To work in a challenging environment demanding all my skills and efforts to explore and adapt Myself in',
    'different fields and realize my potential where I get the opportunity for continuous Learning.'
  ];
  summaryLines.forEach(line => {
    page.drawText(line, { x: margin, y, size: 9.5, font: fontRegular, color: textBlack });
    y -= 13;
  });

  y -= 6;

  // EDUCATION
  drawSectionHeader('EDUCATION');
  
  // BE
  page.drawText('Bachelor of Engineering in Mechanical Engineering', { x: margin, y, size: 10, font: fontBold, color: textBlack });
  page.drawText('2017', { x: width - margin - 30, y, size: 10, font: fontBold, color: textBlack });
  y -= 13;
  page.drawText('Hindusthan College of Engineering and Technology, Coimbatore', { x: margin, y, size: 9, font: fontRegular, color: textBlack });
  y -= 13;
  page.drawText('CGPA: 7.04', { x: margin, y, size: 9, font: fontRegular, color: textBlack });
  y -= 16;

  // Diploma
  page.drawText('Diploma Automobile Engineering', { x: margin, y, size: 10, font: fontBold, color: textBlack });
  page.drawText('2013', { x: width - margin - 30, y, size: 10, font: fontBold, color: textBlack });
  y -= 13;
  page.drawText('Thanthai Rover Institute of Polytechnic College, Perambalur.', { x: margin, y, size: 9, font: fontRegular, color: textBlack });
  y -= 13;
  page.drawText('Percentage: 86.54%', { x: margin, y, size: 9, font: fontRegular, color: textBlack });
  y -= 16;

  // HSC
  page.drawText('Higher Secondary Certificate', { x: margin, y, size: 10, font: fontBold, color: textBlack });
  page.drawText('2011', { x: width - margin - 30, y, size: 10, font: fontBold, color: textBlack });
  y -= 13;
  page.drawText('Sri Ragavendra Matriculation Higher Secondary School, Veeraganur', { x: margin, y, size: 9, font: fontRegular, color: textBlack });
  y -= 13;
  page.drawText('Percentage: 65', { x: margin, y, size: 9, font: fontRegular, color: textBlack });
  y -= 16;

  // SSLC
  page.drawText('Secondary School Leaving', { x: margin, y, size: 10, font: fontBold, color: textBlack });
  page.drawText('2009', { x: width - margin - 30, y, size: 10, font: fontBold, color: textBlack });
  y -= 13;
  page.drawText('Sri Ragavendra Matriculation Higher Secondary School, Veeraganur', { x: margin, y, size: 9, font: fontRegular, color: textBlack });
  y -= 13;
  page.drawText('Percentage: 70', { x: margin, y, size: 9, font: fontRegular, color: textBlack });

  y -= 6;

  // EXPERIENCE
  drawSectionHeader('EXPERIENCE');

  // Exp 1
  page.drawText('•  Metal Fascination L.L.C, Ajman - UAE', { x: margin, y, size: 10, font: fontBold, color: textBlack });
  page.drawText('2019', { x: width - margin - 30, y, size: 10, font: fontBold, color: textBlack });
  y -= 13;
  page.drawText('CAD/CAM Engineer (AHU,FAHU,HVAC)', { x: margin + 15, y, size: 9, font: fontRegular, color: textBlack });
  y -= 16;

  // Exp 2
  page.drawText('•  Glazier Tehno Casting PVT LTD, Coimbatore', { x: margin, y, size: 10, font: fontBold, color: textBlack });
  page.drawText('2017 - 2018', { x: width - margin - 65, y, size: 10, font: fontBold, color: textBlack });
  y -= 13;
  page.drawText('Quality Assurance Department', { x: margin + 15, y, size: 9, font: fontRegular, color: textBlack });
  y -= 16;

  // Exp 3
  page.drawText('•  Hyundai Motor India Limited, Chennai', { x: margin, y, size: 10, font: fontBold, color: textBlack });
  page.drawText('2013 - 2014', { x: width - margin - 65, y, size: 10, font: fontBold, color: textBlack });
  y -= 13;
  page.drawText('PDI - PRE–DELIVERY INSPECTOR', { x: margin + 15, y, size: 9, font: fontRegular, color: textBlack });

  y -= 6;

  // COURSES
  drawSectionHeader('COURSES');
  const courseList = [
    'Completed PGDIRA and PG DIPLOMA IN INDUSTRIAL ROBOTICS AUTOMATION course under Technocrat Automation in Chennai.',
    'Completed TWO WHEELER MECHANISM and PRO-E, design and analysis software under CANADA INDIA INSTITUTIONAL CO-OPERATION PROJECT in Guindy, Chennai.',
    'Completed Communication course in Sri Anu Institute, Coimbatore.'
  ];
  courseList.forEach(c => {
    page.drawText('•', { x: margin, y, size: 9, font: fontRegular, color: textBlack });
    page.drawText(c, { x: margin + 12, y, size: 8.5, font: fontRegular, color: textBlack });
    y -= 14;
  });

  y -= 4;

  // SKILLS (2-column layout matching attached image)
  drawSectionHeader('SKILLS');

  page.drawText('•  AutoCAD', { x: margin, y, size: 9, font: fontRegular, color: textBlack });
  page.drawText('•  Lantek & Cypcut (Programming Software)', { x: margin + 220, y, size: 9, font: fontRegular, color: textBlack });
  y -= 13;

  page.drawText('•  Solid Works', { x: margin, y, size: 9, font: fontRegular, color: textBlack });
  page.drawText('•  Sheet Metal Design & Nesting', { x: margin + 220, y, size: 9, font: fontRegular, color: textBlack });
  y -= 13;

  page.drawText('•  Creo', { x: margin, y, size: 9, font: fontRegular, color: textBlack });
  page.drawText('•  Tally', { x: margin + 220, y, size: 9, font: fontRegular, color: textBlack });
  y -= 13;

  page.drawText('•  Pro-E', { x: margin, y, size: 9, font: fontRegular, color: textBlack });
  page.drawText('•  Microsoft Excel', { x: margin + 220, y, size: 9, font: fontRegular, color: textBlack });

  y -= 6;

  // PROJECTS
  drawSectionHeader('PROJECTS');
  const projectList = [
    'Air Assistant Exhaust Breaking system ( Diploma Main Project )',
    'Power Harvesting in dam outlet water ( Engineering. mini Project )',
    'Automatic Feeding and cutting machine using Geneva mechanism ( Engineering. main project )'
  ];
  projectList.forEach(p => {
    page.drawText('•', { x: margin, y, size: 9, font: fontRegular, color: textBlack });
    page.drawText(p, { x: margin + 12, y, size: 8.5, font: fontRegular, color: textBlack });
    y -= 14;
  });

  y -= 4;

  // WORKSHOPS ATTENDED
  drawSectionHeader('WORKSHOPS ATTENDED:');
  const workshops = [
    'Attended a workshop in "Design and Development of Jigs and Fixtures for Advanced Manufacturing Industries" held at KPR Institute of engineering and technology, Coimbatore.',
    'I have participated project on MSME (Ministry of Micro, Small & Medium Enterprises) HEAT PUMP ASSISTED SOLAR WATER HEATER under the guidance of Dr.M.Mohanraj and was proposed to the MSME funding.'
  ];
  workshops.forEach(w => {
    page.drawText('•', { x: margin, y, size: 9, font: fontRegular, color: textBlack });
    
    // Wrap text if needed
    if (w.length > 105) {
      const line1 = w.substring(0, 105);
      const line2 = w.substring(105);
      page.drawText(line1, { x: margin + 12, y, size: 8, font: fontRegular, color: textBlack });
      y -= 11;
      page.drawText(line2, { x: margin + 12, y, size: 8, font: fontRegular, color: textBlack });
    } else {
      page.drawText(w, { x: margin + 12, y, size: 8, font: fontRegular, color: textBlack });
    }
    y -= 13;
  });

  y -= 6;
  page.drawLine({
    start: { x: margin, y },
    end: { x: width - margin, y },
    thickness: 1.2,
    color: greenAccent,
  });

  y -= 16;
  page.drawText('I hereby declared that all the information mentioned above are true to my knowledge.', {
    x: margin,
    y: y,
    size: 9,
    font: fontRegular,
    color: textBlack,
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(__dirname, 'public', 'Adaikalaraj_Selvaraj_Resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);

  // Also write to .output/public if exists
  const distPath = path.join(__dirname, '.output', 'public', 'Adaikalaraj_Selvaraj_Resume.pdf');
  if (fs.existsSync(path.dirname(distPath))) {
    fs.writeFileSync(distPath, pdfBytes);
  }

  console.log('Successfully generated EXACT original resume PDF at:', outputPath);
}

createAttachedResume();
