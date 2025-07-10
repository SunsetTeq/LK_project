import React from 'react';
import { Box, Typography } from '@mui/material';
import Icon from '@ui/icons/addFile.svg?react';
import { RegularXS } from '@ui/fonts/fonts';
import { fileUpload } from './style';

interface FileDropZoneProps {
  file: File | null;
  onFileChange: (file: File) => void;
}

export const FileUploadField: React.FC<FileDropZoneProps> = ({
  file,
  onFileChange,
}) => {
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      onFileChange(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files?.[0]) {
      onFileChange(e.dataTransfer.files[0]);
    }
  };

  return (
    <Box
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      component="label"
      htmlFor="file-upload"
      sx={fileUpload}
    >
      <input
        id="file-upload"
        name="file"
        type="file"
        hidden
        onChange={handleFileInput}
      />
      <Icon />
      <Typography sx={{ ...RegularXS, color: '#AAAAAA', mt: 1 }}>
        {file ? `Выбрано: ${file.name}` : 'Нажмите или перетащите файл сюда'}
      </Typography>
    </Box>
  );
};
