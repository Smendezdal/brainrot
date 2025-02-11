import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css';

const FileUpload = ({ setAudioUrl }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:5000/upload', formData, {
                responseType: 'blob',
            });
            const audioUrl = URL.createObjectURL(response.data);
            setAudioUrl(audioUrl);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div className="file-upload-container">
            <input type="file" onChange={handleFileChange} accept=".txt" className="choose-file-button" />
            <button type="submit" onClick={handleSubmit} className="upload-button">Upload</button>
        </div>
    );
};

export default FileUpload;