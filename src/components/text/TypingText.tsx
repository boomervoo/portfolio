'use client';

import { useState, useEffect } from 'react';

interface TypingTextProps {
    text: string | string[];
    speed?: number;
    className?: string;
}

export default function TypingText({ text, speed = 100, className = '' }: TypingTextProps) {
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);

    const lines = Array.isArray(text) ? text : [text];
    const currentLine = lines[currentLineIndex] || '';

    useEffect(() => {
        if (currentLineIndex >= lines.length) return;

        if (currentCharIndex < currentLine.length) {
            const timer = setTimeout(() => {
                setDisplayedLines(prev => {
                    const newLines = [...prev];
                    if (!newLines[currentLineIndex]) {
                        newLines[currentLineIndex] = '';
                    }
                    newLines[currentLineIndex] += currentLine[currentCharIndex];
                    return newLines;
                });
                setCurrentCharIndex(prev => prev + 1);
            }, speed);
            return () => clearTimeout(timer);
        }

        if (currentLineIndex + 1 < lines.length) {
            const timer = setTimeout(() => {
                setCurrentLineIndex(prev => prev + 1);
                setCurrentCharIndex(0);
            }, speed * 2); // пауза между строками
            return () => clearTimeout(timer);
        }
    }, [currentCharIndex, currentLineIndex, currentLine, lines, speed]);

    return (
        <div className={className}>
            {displayedLines.map((line, idx) => (
                <div key={idx}>
                    {line}
                    {idx === displayedLines.length - 1 && currentLineIndex < lines.length && (
                        <span className="animate-pulse">|</span>
                    )}
                </div>
            ))}
        </div>
    );
}
