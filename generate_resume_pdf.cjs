const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const darkNavy = rgb(0.08, 0.12, 0.22);
  const accentBlue = rgb(0.12, 0.45, 0.85);
  const textDark = rgb(0.18, 0.2, 0.25);
  const textMuted = rgb(0.4, 0.45, 0.52);
  const margin = 40;

  // Page 1
  const page1 = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page1.getSize();

  let y = height - margin;

  // Header Banner
  page1.drawRectangle({
    x: 0,
    y: height - 100,
    width: width,
    height: 100,
    color: darkNavy,
  });

  // Name & Title
  page1.drawText('ADAIKALARAJ S', {
    x: margin,
    y: height - 42,
    size: 22,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  page1.drawText('Mechanical Design Engineer | CAD/CAM Engineer | Quality & Inspection Specialist', {
    x: margin,
    y: height - 62,
    size: 10,
    font: fontRegular,
    color: rgb(0.85, 0.9, 0.98),
  });

  page1.drawText('Ajman, UAE  |  +971 54 335 1693  |  adaikalaraj1993@gmail.com  |  linkedin.com/in/adaikalaraj-selvaraj-b7b275288', {
    x: margin,
    y: height - 82,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.75, 0.82, 0.92),
  });

  y = height - 120;

  function drawSectionHeading(page, title, currentY) {
    page.drawText(title.toUpperCase(), {
      x: margin,
      y: currentY,
      size: 10.5,
      font: fontBold,
      color: accentBlue,
    });
    page.drawLine({
      start: { x: margin, y: currentY - 4 },
      end: { x: width - margin, y: currentY - 4 },
      thickness: 1,
      color: rgb(0.85, 0.88, 0.92),
    });
    return currentY - 18;
  }

  // Summary
  y = drawSectionHeading(page1, 'Professional Summary', y);
  const summaryText = [
    'To work in a challenging environment demanding all my skills and efforts to explore and adapt myself in different fields',
    'and realize my potential where I get the opportunity for continuous learning across mechanical design, manufacturing,',
    'CNC programming, sheet metal engineering, quality assurance (QA/QC), and pre-delivery inspection (PDI).'
  ];
  summaryText.forEach(line => {
    page1.drawText(line, { x: margin, y, size: 9, font: fontRegular, color: textDark });
    y -= 13;
  });

  y -= 8;

  // Work Experience Section
  y = drawSectionHeading(page1, 'Professional Work Experience', y);

  // 1. Metal Fascination LLC
  page1.drawText('1. Metal Fascination L.L.C, Ajman - UAE', { x: margin, y, size: 11, font: fontBold, color: textDark });
  page1.drawText('2019 – Present', { x: width - margin - 90, y, size: 9.5, font: fontBold, color: accentBlue });
  y -= 14;
  page1.drawText('Role: CAD/CAM Engineer (AHU, FAHU, HVAC) | Mechanical Design Engineer & CNC Programmer', { x: margin + 10, y, size: 9, font: fontBold, color: textMuted });
  y -= 16;
  const mfBullets = [
    'Designed precision sheet-metal components and mechanical assemblies using AutoCAD and SolidWorks.',
    'Developed CNC programs for fiber laser and CNC turret punch machines using Lantek Expert and CypCut.',
    'Designed HVAC sheet-metal systems, including AHU and FAHU-related enclosures and duct components.',
    'Performed sheet-metal estimation, nesting, and material optimization to reduce scrap and manufacturing cost.',
    'Prepared BOMs (Bill of Materials), fabrication documentation, production records, and assembly drawings.'
  ];
  mfBullets.forEach(resp => {
    page1.drawText('•', { x: margin + 12, y, size: 9, font: fontBold, color: accentBlue });
    page1.drawText(resp, { x: margin + 22, y, size: 8.5, font: fontRegular, color: textDark });
    y -= 13;
  });

  y -= 8;

  // 2. Glazier Tehno Casting
  page1.drawText('2. Glazier Tehno Casting PVT LTD, Coimbatore, India', { x: margin, y, size: 11, font: fontBold, color: textDark });
  page1.drawText('2017 – 2018', { x: width - margin - 90, y, size: 9.5, font: fontBold, color: accentBlue });
  y -= 14;
  page1.drawText('Role: Quality Assurance (QA) Department Engineer', { x: margin + 10, y, size: 9, font: fontBold, color: textMuted });
  y -= 16;
  const glazierBullets = [
    'Conducted quality inspection of precision casting components, dimensional checks, and tolerance verification.',
    'Monitored casting defects, root-cause analysis, and compliance with quality control standards.',
    'Prepared QA/QC documentation, inspection logs, and initial sample inspection reports (ISIR).'
  ];
  glazierBullets.forEach(resp => {
    page1.drawText('•', { x: margin + 12, y, size: 9, font: fontBold, color: accentBlue });
    page1.drawText(resp, { x: margin + 22, y, size: 8.5, font: fontRegular, color: textDark });
    y -= 13;
  });

  y -= 8;

  // 3. Hyundai Motor India Limited
  page1.drawText('3. Hyundai Motor India Limited, Chennai, India', { x: margin, y, size: 11, font: fontBold, color: textDark });
  page1.drawText('2013 – 2014', { x: width - margin - 90, y, size: 9.5, font: fontBold, color: accentBlue });
  y -= 14;
  page1.drawText('Role: PDI - Pre-Delivery Inspector', { x: margin + 10, y, size: 9, font: fontBold, color: textMuted });
  y -= 16;
  const hyundaiBullets = [
    'Conducted comprehensive pre-delivery inspection (PDI) on manufactured vehicles and automotive systems.',
    'Verified mechanical alignment, paint finish, electrical circuitry, and safety compliance prior to dispatch.',
    'Documented non-conformance logs and coordinated with assembly line quality supervisors.'
  ];
  hyundaiBullets.forEach(resp => {
    page1.drawText('•', { x: margin + 12, y, size: 9, font: fontBold, color: accentBlue });
    page1.drawText(resp, { x: margin + 22, y, size: 8.5, font: fontRegular, color: textDark });
    y -= 13;
  });

  y -= 10;

  // Education Section
  y = drawSectionHeading(page1, 'Education & Academic Background', y);
  const eduList = [
    { degree: 'Bachelor of Engineering in Mechanical Engineering', school: 'Hindusthan College of Engineering and Technology, Coimbatore', year: '2017', grade: 'CGPA: 7.04' },
    { degree: 'Diploma Automobile Engineering', school: 'Thanthai Rover Institute of Polytechnic College, Perambalur', year: '2013', grade: 'CGPA: 86.54%' },
    { degree: 'Higher Secondary Certificate (HSC)', school: 'Sri Ragavendra Matriculation Higher Secondary School, Veeraganur', year: '2011', grade: 'Percentage: 65%' },
    { degree: 'Secondary School Leaving Certificate (SSLC)', school: 'Sri Ragavendra Matriculation Higher Secondary School, Veeraganur', year: '2009', grade: 'Percentage: 70%' },
  ];

  eduList.forEach(e => {
    page1.drawText(e.degree, { x: margin, y, size: 9.5, font: fontBold, color: textDark });
    page1.drawText(`${e.year}  |  ${e.grade}`, { x: width - margin - 110, y, size: 8.5, font: fontBold, color: textMuted });
    y -= 12;
    page1.drawText(e.school, { x: margin, y, size: 8, font: fontRegular, color: textMuted });
    y -= 15;
  });

  y -= 5;

  // Courses & Certifications
  y = drawSectionHeading(page1, 'Courses & Certifications', y);
  const courses = [
    'Completed PGDIRA and PG DIPLOMA IN INDUSTRIAL ROBOTICS AUTOMATION course under Technocrat Automation in Chennai.',
    'Completed TWO WHEELER MECHANISM and PRO-E design and analysis software under CANADA INDIA INSTITUTIONAL CO-OPERATION PROJECT (CIICP) in Guindy, Chennai.',
    'Completed Communication course in Sri Anu Institute, Coimbatore.'
  ];
  courses.forEach(c => {
    page1.drawText('•', { x: margin + 5, y, size: 9, font: fontBold, color: accentBlue });
    page1.drawText(c, { x: margin + 15, y, size: 8, font: fontRegular, color: textDark });
    y -= 13;
  });

  // Projects
  y -= 5;
  y = drawSectionHeading(page1, 'Key Projects Executed', y);
  const projects = [
    '• Automatic Feeding and cutting machine using Geneva mechanism (Engineering Main Project)',
    '• Air Assistant Exhaust Braking system (Diploma Main Project)',
    '• Power Harvesting in dam outlet water (Engineering Mini Project)',
    '• MSME Heat Assisted Solar Water Heater (Proposed for MSME Funding)'
  ];
  projects.forEach(p => {
    page1.drawText(p, { x: margin, y, size: 8.5, font: fontRegular, color: textDark });
    y -= 13;
  });

  const pdfBytes = await pdfDoc.save();
  const publicDir = path.join(__dirname, 'public');
  const outputPath = path.join(publicDir, 'Adaikalaraj_Selvaraj_Resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('Successfully updated complete PDF resume at:', outputPath);
}

createResume();
