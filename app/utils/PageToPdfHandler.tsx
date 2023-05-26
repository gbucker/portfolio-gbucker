"use client";
export default async function PageToPdfHandler(e: React.MouseEvent<HTMLAnchorElement>, pathname: string): Promise<void> {
  e.preventDefault();

  try {
    const response = await fetch(`/api/PageToPdf?url=https://www.wikiart.org/pt`);
    if (!response.ok) {
      throw new Error('Failed to generate PDF.');
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'file.pdf';
    link.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
}