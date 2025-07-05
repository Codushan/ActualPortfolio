import { useCallback } from 'react';

type ResumeType = 'Software Engineer' | 'Designer' | 'Civil Engineer' | 'Management';

export function useDownload() {
  const downloadResume = useCallback((resumeType: ResumeType) => {
    const link = document.createElement('a');
    let fileName = '';
    let filePath = '';

    switch (resumeType) {
      case 'Software Engineer':
        filePath = '/Tech Resume.pdf';
        fileName = 'Chandrabhushan_Tech_CV.pdf';
        break;
      case 'Designer':
        filePath = '/Chandrabhushan_Kumar_Design.pdf';
        fileName = 'Chandrabhushan_Design_CV.pdf';
        break;
      case 'Civil Engineer':
        filePath = '/Marketing Resume.pdf';
        fileName = 'Chandrabhushan_Marketing_CV.pdf';
        break;
      case 'Management':
        filePath = '/Management Resume.pdf';
        fileName = 'Chandrabhushan_Management_CV.pdf';
        break;
      default:
        filePath = '/Tech Resume.pdf';
        fileName = 'Chandrabhushan_CV.pdf';
    }

    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const downloadPortfolio = useCallback(() => {
    const link = document.createElement('a');
    link.href = '/Portfolio CB.pdf';
    link.download = 'Chandrabhushan_Portfolio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return { downloadResume, downloadPortfolio };
}