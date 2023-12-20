import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

type DropzoneProps = {
  title: string;
  helperText?: string;
};

const Dropzone = ({ title, helperText }: DropzoneProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log("acceptedFiles", acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="main-container" {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="text-container">
        {!isDragActive && <p className="text-title">{title}</p>}
        {!isDragActive && <p className="text-helper">{helperText}</p>}
      </div>
    </div>
  );
};

export default Dropzone;
