export const getFileInfo = (url: string) => {
  const ext = url.split('.').pop()?.toLowerCase() || '';

  return {
    extension: ext,
    isPdf: ext === 'pdf',
    isDoc: ['doc', 'docx', 'rtf'].includes(ext),
    isImage: ['jpg', 'jpeg', 'png', 'webp'].includes(ext)
  };
};
