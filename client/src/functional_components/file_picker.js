import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
// import 'react-dropzone/dist/styles.css';

export function FilePicker() {
    const [selectedFile, setSelectedFile] = useState(null);

    const onDrop = (acceptedFiles) => {
        setSelectedFile(acceptedFiles[0]);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {selectedFile ? (
                <p>Selected file: {selectedFile.name}</p>
            ) : (
                <p>Drag and drop a file here, or click to select a file</p>
            )}
        </div>
    );
}
