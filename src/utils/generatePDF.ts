import jsPDF from 'jspdf';
import { resumeData } from '@/data/resumeData';

export const generateResumePDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const maxWidth = pageWidth - 2 * margin;
  let yPosition = margin;

  // Header - reduced sizes
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(resumeData.personal.name, margin, yPosition);
  yPosition += 5;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(resumeData.personal.title, margin, yPosition);
  yPosition += 4;

  doc.setFontSize(8);
  const contactInfo = `${resumeData.personal.location} | ${resumeData.personal.email} | ${resumeData.personal.links.linkedin} | ${resumeData.personal.links.github}`;
  doc.text(contactInfo, margin, yPosition);
  yPosition += 6;

  // Summary - reduced sizes
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('SUMMARY', margin, yPosition);
  yPosition += 5;

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  const summaryLines = doc.splitTextToSize(resumeData.personal.summary, maxWidth);
  doc.text(summaryLines, margin, yPosition);
  yPosition += summaryLines.length * 3.2 + 3;

  // Education - moved to top, compact table
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('EDUCATION', margin, yPosition);
  yPosition += 5;

  // Table headers - compact
  const col1X = margin;
  const col2X = margin + 90;
  const col3X = margin + 135;
  const tableWidth = pageWidth - 2 * margin;

  // Header row
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text('Education Institute/School', col1X, yPosition);
  doc.text('Year', col2X, yPosition);
  doc.text('Percentage/CGPA', col3X, yPosition);
  
  // Draw header underline
  doc.setLineWidth(0.3);
  doc.line(col1X, yPosition + 1.5, col1X + tableWidth, yPosition + 1.5);
  yPosition += 5;

  // Table rows - compact
  resumeData.education.forEach((edu, index) => {
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'bold');
    const degreeLines = doc.splitTextToSize(edu.degree, col2X - col1X - 3);
    doc.text(degreeLines, col1X, yPosition);
    
    doc.setFont('helvetica', 'normal');
    const institutionLines = doc.splitTextToSize(edu.institution, col2X - col1X - 3);
    doc.text(institutionLines, col1X, yPosition + degreeLines.length * 3);
    
    doc.setFont('helvetica', 'normal');
    doc.text(edu.period, col2X, yPosition);
    doc.text(edu.score, col3X, yPosition);
    
    const contentHeight = Math.max(degreeLines.length * 3 + institutionLines.length * 3, 8);
    yPosition += contentHeight + 2;
  });

  yPosition += 2;

  // Experience - reduced sizes and spacing
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('EXPERIENCE', margin, yPosition);
  yPosition += 5;

  resumeData.experience.forEach((exp, index) => {
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text(exp.role, margin, yPosition);
    yPosition += 4;

    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    const companyInfo = `${exp.company} | ${exp.location} | ${exp.period}`;
    doc.text(companyInfo, margin, yPosition);
    yPosition += 4;

    // Limit descriptions to fit on one page - take first 3-4 key points
    const maxDescriptions = index === 0 ? 4 : 3; // More for first (current) role
    exp.description.slice(0, maxDescriptions).forEach((desc) => {
      doc.setFontSize(7.5);
      const descLines = doc.splitTextToSize(`• ${desc}`, maxWidth - 3);
      doc.text(descLines, margin + 3, yPosition);
      yPosition += descLines.length * 2.8;
    });

    yPosition += 2;
  });

  // Open Source Contributions - compact
  if (resumeData.openSource && resumeData.openSource.length > 0) {
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('OPEN SOURCE CONTRIBUTIONS', margin, yPosition);
    yPosition += 5;

    resumeData.openSource.forEach((org) => {
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.text(org.organization, margin, yPosition);
      yPosition += 4;

      org.contributions.forEach((contribution) => {
        doc.setFontSize(7.5);
        doc.setFont('helvetica', 'normal');
        const contLines = doc.splitTextToSize(`• ${contribution}`, maxWidth - 3);
        doc.text(contLines, margin + 3, yPosition);
        yPosition += contLines.length * 2.8;
      });

      yPosition += 2;
    });
  }

  // Skills - compact
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('TECHNICAL SKILLS', margin, yPosition);
  yPosition += 5;

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  const skillsText = resumeData.skills.join(', ');
  const skillsLines = doc.splitTextToSize(skillsText, maxWidth);
  doc.text(skillsLines, margin, yPosition);

  // Save the PDF
  doc.save('Vikas_Mahato_Resume_ATS.pdf');
};

