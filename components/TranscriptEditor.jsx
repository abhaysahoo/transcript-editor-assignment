"use client";

import { useState } from 'react';

import TranscriptWord from './TranscriptWord';

const TranscriptEditor = ({ initialTranscript }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayback = () => {
        setIsPlaying(true);
        let currentTime = 0;
        initialTranscript.forEach((word, index) => {
            setTimeout(() => {
                setCurrentWordIndex(index);  
            }, currentTime);

            currentTime += word.duration;

            if (index === initialTranscript.length - 1) {
                setTimeout(() => {
                    setIsPlaying(false);
                    setCurrentWordIndex(null);
                }, currentTime)
            }   
        });
    };

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-wrap gap-[2px] max-w-xl w-full">
                {initialTranscript.map((word, index) => (         
                    <TranscriptWord 
                        key={index}
                        word={word}
                        index={index}
                        highlightedIndex={currentWordIndex}
                    />
                ))}
            </div>
            <button
                className={`max-w-max px-4 py-2 rounded-md text-white ${isPlaying ? 'bg-gray-500' : 'bg-green-500 hover:bg-green-600'
                    }`}
                onClick={handlePlayback}
                disabled={isPlaying}
            >
                {isPlaying ? 'Playing...' : 'Play The Transcript'}
            </button>
        </div>
    );
};

export default TranscriptEditor;
