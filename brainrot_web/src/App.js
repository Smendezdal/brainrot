import React, { useState, useEffect } from 'react';
import FileUpload from './components/fileUpload';
import AudioPlayer from './components/audioPlayer';
import './App.css';

const App = () => {
    const [audioUrl, setAudioUrl] = useState('');

    useEffect(() => {
        console.log('Audio URL:', audioUrl);
    }, [audioUrl]);

    return (
        <div className="app-container">
            <h1 className="title">BrainRot App</h1>
            <div className="buttons-container">
                <FileUpload setAudioUrl={setAudioUrl} />
            </div>
            {audioUrl && <AudioPlayer audioUrl={audioUrl} />}
        </div>
    );
};

export default App;