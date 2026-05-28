const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Ensure public directory exists
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const pdfPath = path.join(publicDir, 'Gaurab-Pandey-CV.pdf');
const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 40, bottom: 40, left: 40, right: 40 }
});

const writeStream = fs.createWriteStream(pdfPath);
doc.pipe(writeStream);

// Colors (matching portfolio design system)
const PRIMARY = '#152d1b';     // Dark Forest Green
const SECONDARY = '#3a6645';   // Accent Green
const TEXT_DARK = '#1f2937';   // Near Black
const TEXT_LIGHT = '#4b5563';  // Slate Gray
const LINE_COLOR = '#e5e7eb';  // Border Light Gray

// ─── HEADER SECTION (Full Width Accent Banner) ───
doc.rect(40, 40, 515, 90).fill(PRIMARY);

doc.fillColor('#ffffff');
doc.font('Helvetica-Bold').fontSize(26).text('GAURAB PANDEY', 60, 55);
doc.font('Helvetica').fontSize(12).fillColor('#a4c0a9').text('Software Developer  |  Flutter Developer & UI/UX Designer', 60, 85);

// Contact Info Bar (inside header banner)
doc.fillColor('#ffffff');
doc.font('Helvetica').fontSize(8.5);
const contactText = 'Kathmandu, Nepal   •   info.gaurabpandey@gmail.com   •   gaurabpandey.com.np   •   github.com/gaurabpandey';
doc.text(contactText, 60, 106);

// Reset fill color
doc.fillColor(TEXT_DARK);

// ─── LAYOUT STRUCTURING (Two Columns) ───
// Left Column X: 40 to 200 (width: 160)
// Right Column X: 220 to 555 (width: 335)
// Vertical Divider at X = 210

doc.strokeColor(LINE_COLOR).lineWidth(1.2).moveTo(210, 145).lineTo(210, 800).stroke();

// ─── LEFT COLUMN (Sidebar) ───
let leftY = 150;

// 1. Summary
doc.font('Helvetica-Bold').fontSize(11).fillColor(PRIMARY).text('PROFILE SUMMARY', 40, leftY);
leftY += 15;
doc.font('Helvetica').fontSize(8.5).fillColor(TEXT_DARK).text(
  'Passionate and results-driven Software Developer specializing in Flutter cross-platform mobile applications and modern full-stack web solutions. Gained deep concepts in building responsive UIs, scaling backend structures, and delivering clean, maintainable code to solve real-world challenges.',
  40,
  leftY,
  { width: 155, align: 'justify', lineGap: 3.5 }
);
leftY += 125;

// 2. Technical Skills
doc.font('Helvetica-Bold').fontSize(11).fillColor(PRIMARY).text('TECHNICAL SKILLS', 40, leftY);
leftY += 15;

const skillGroups = [
  { name: 'Languages', items: 'Dart, Java, PHP, JavaScript, SQL, HTML5/CSS3' },
  { name: 'Frameworks', items: 'Flutter, Next.js, React, Spring Boot, Hibernate' },
  { name: 'Databases & Tools', items: 'MySQL, Hive, Firebase, Git, Postman, Figma, REST APIs' },
  { name: 'Core Competency', items: 'Mobile Apps, UI/UX Design, OOP, State Management' }
];

skillGroups.forEach(group => {
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(SECONDARY).text(group.name, 40, leftY);
  leftY += 11;
  doc.font('Helvetica').fontSize(8).fillColor(TEXT_DARK).text(group.items, 40, leftY, { width: 155, lineGap: 2 });
  leftY += 22;
});
leftY += 5;

// 3. Education
doc.font('Helvetica-Bold').fontSize(11).fillColor(PRIMARY).text('EDUCATION', 40, leftY);
leftY += 15;

doc.font('Helvetica-Bold').fontSize(8.5).fillColor(TEXT_DARK).text('Bachelor in Computer Application (BCA)', 40, leftY, { width: 155 });
leftY += 22;
doc.font('Helvetica').fontSize(8).fillColor(TEXT_LIGHT).text('Madan Bhandari Memorial College', 40, leftY);
leftY += 10;
doc.font('Helvetica-Bold').fontSize(8).fillColor(SECONDARY).text('2024 - 2026', 40, leftY);
leftY += 22;

doc.font('Helvetica-Bold').fontSize(8.5).fillColor(TEXT_DARK).text('School Leaving Certificate (+2 Science)', 40, leftY, { width: 155 });
leftY += 22;
doc.font('Helvetica').fontSize(8).fillColor(TEXT_LIGHT).text('The Times International College', 40, leftY);
leftY += 10;
doc.font('Helvetica-Bold').fontSize(8).fillColor(SECONDARY).text('2020 - 2022', 40, leftY);


// ─── RIGHT COLUMN (Main Content) ───
let rightY = 150;

// 1. Professional Experience
doc.font('Helvetica-Bold').fontSize(11).fillColor(PRIMARY).text('PROFESSIONAL EXPERIENCE', 225, rightY);
rightY += 15;

doc.font('Helvetica-Bold').fontSize(10).fillColor(TEXT_DARK).text('Freelance Software Developer & Designer', 225, rightY);
doc.font('Helvetica-Bold').fontSize(8.5).fillColor(SECONDARY).text('Kathmandu, Nepal  |  2025 - Present', 225, rightY + 12);
rightY += 28;

const expPoints = [
  'Architected, designed, and deployed 20+ responsive web platforms and cross-platform mobile applications for diverse clients with modern visual styling.',
  'Integrated secure local credential storage layers utilizing biometrics and Hive database adapters in Flutter mobile applications.',
  'Engineered high-performance Java Spring Boot and PHP backends for real-time queue estimation algorithms and robust REST API delivery.',
  'Collaborated with stakeholders to construct interactive Figma wireframes and design tokens, ensuring cohesive personal branding.'
];

expPoints.forEach(point => {
  doc.circle(230, rightY + 4, 1.8).fill(SECONDARY);
  doc.font('Helvetica').fontSize(8.5).fillColor(TEXT_DARK).text(point, 238, rightY, { width: 310, align: 'left', lineGap: 3 });
  rightY += 34;
});
rightY += 10;

// 2. Key Projects
doc.font('Helvetica-Bold').fontSize(11).fillColor(PRIMARY).text('KEY PROJECTS', 225, rightY);
rightY += 15;

const projects = [
  {
    title: 'Vault — Secure Password Manager (Mobile App)',
    tech: 'Flutter, Dart, Hive, Local Auth',
    desc: 'Developed a local credential storage app utilizing device biometrics and encrypted Hive adapters for robust offline security.'
  },
  {
    title: 'EV Smart Charge — Booking & Station Finder (Mobile App)',
    tech: 'Flutter, Spring Boot, OpenStreetMap, REST API',
    desc: 'Created an interactive platform that locates closest stations and analyzes real-time reservation queues using routing algorithms.'
  },
  {
    title: 'Pacific Hiphop — Professional Web Application (Website)',
    tech: 'Next.js, React, TailwindCSS, Framer Motion',
    desc: 'Designed and deployed a responsive, smooth-scrolling client interface and custom media players for a prominent music studio.'
  },
  {
    title: 'PeakPulse Adventure — Tourism Portal (Website)',
    tech: 'Next.js, React, TailwindCSS, Framer Motion',
    desc: 'Built a travel booking portal featuring trek package details, itineraries, and dynamic visual filtering.'
  }
];

projects.forEach(proj => {
  doc.font('Helvetica-Bold').fontSize(9).fillColor(TEXT_DARK).text(proj.title, 225, rightY);
  doc.font('Helvetica-Oblique').fontSize(8).fillColor(TEXT_LIGHT).text(`Tech Stack: ${proj.tech}`, 225, rightY + 10);
  doc.font('Helvetica').fontSize(8.5).fillColor(TEXT_DARK).text(proj.desc, 225, rightY + 20, { width: 320, lineGap: 2 });
  rightY += 45;
});
rightY += 5;

// 3. Certifications & Languages (Fills the lower right column to balance with left column)
doc.font('Helvetica-Bold').fontSize(11).fillColor(PRIMARY).text('CERTIFICATIONS & LANGUAGES', 225, rightY);
rightY += 15;

doc.font('Helvetica-Bold').fontSize(8.5).fillColor(TEXT_DARK).text('Languages: ', 225, rightY).font('Helvetica').text('English (Fluent), Nepali (Native)', 285, rightY);
rightY += 14;

doc.font('Helvetica-Bold').fontSize(8.5).fillColor(TEXT_DARK).text('Certifications: ', 225, rightY).font('Helvetica').text('Full Stack Web & Mobile App Developer, UI/UX Design Specialist', 295, rightY, { width: 250, lineGap: 2 });

// Finalize PDF file
doc.end();

writeStream.on('finish', () => {
  console.log('PDF Resume generated successfully at ' + pdfPath);
});
