import React, {useState} from 'react';
import {Title, TheHeader, Subtitle, Paragraph,
SpeakButton, Response} from './Styling';

export const App: React.FC = () => {
    return (
        <div>
            <TheHeader>
                <nav></nav>
            </TheHeader>
            <Title>Speech Recognizer</Title>
            <Subtitle>Search for information by using your voice</Subtitle>
            <Paragraph>Click the button below to say something</Paragraph>
            <SpeakButton id="speak">Click to speak</SpeakButton>
            <Response id="response"></Response>
        </div>
    )
}