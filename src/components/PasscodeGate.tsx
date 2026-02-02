
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PasscodeGateProps {
    children: React.ReactNode;
}

const PASSCODE = '4444'; // Default passcode
const STORAGE_KEY = 'private_gallery_auth';

export const PasscodeGate: React.FC<PasscodeGateProps> = ({ children }) => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [code, setCode] = useState('');
    const [errorString, setErrorString] = useState('');

    useEffect(() => {
        const storedAuth = localStorage.getItem(STORAGE_KEY);
        if (storedAuth === 'true') {
            setIsUnlocked(true);
        }
    }, []);

    useEffect(() => {
        if (code.length === 4) {
            if (code === PASSCODE) {
                localStorage.setItem(STORAGE_KEY, 'true');
                setIsUnlocked(true);
            } else {
                setErrorString('shake');
                setTimeout(() => {
                    setCode('');
                    setErrorString('');
                }, 500);
            }
        }
    }, [code]);

    const handleDigit = (digit: string) => {
        if (code.length < 4) {
            setCode((prev) => prev + digit);
        }
    };

    const handleDelete = () => {
        setCode((prev) => prev.slice(0, -1));
    };

    if (isUnlocked) {
        return <>{children}</>;
    }

    return (
        <div className="fixed inset-0 z-[10000] bg-gray-50 flex items-center justify-center font-inter">
            <div className="w-full max-w-md px-8 py-12 flex flex-col items-center">

                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        Enter private PIN
                    </h2>
                    <p className="text-gray-500 text-sm">
                        Please enter the access code to view the collection.
                    </p>
                </div>

                {/* Dots Display */}
                <motion.div
                    className="flex gap-4 mb-16"
                    animate={errorString === 'shake' ? { x: [-10, 10, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                >
                    {[0, 1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${i < code.length
                                ? 'bg-blue-600 border-blue-600'
                                : 'bg-transparent border-gray-300'
                                }`}
                        />
                    ))}
                </motion.div>

                {/* Numpad */}
                <div className="grid grid-cols-3 gap-x-8 gap-y-6 w-full max-w-[280px]">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <button
                            key={num}
                            onClick={() => handleDigit(num.toString())}
                            className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-medium text-gray-900 hover:bg-gray-200 active:scale-95 transition-all duration-200 outline-none select-none"
                        >
                            {num}
                        </button>
                    ))}

                    <div className="w-16 h-16" /> {/* Spacer */}

                    <button
                        onClick={() => handleDigit('0')}
                        className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-medium text-gray-900 hover:bg-gray-200 active:scale-95 transition-all duration-200 outline-none select-none"
                    >
                        0
                    </button>

                    <button
                        onClick={handleDelete}
                        className="w-16 h-16 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 active:scale-95 transition-all duration-200 outline-none select-none text-xl font-bold"
                    >
                        ⌫
                    </button>
                </div>

                {/* Forgot PIN / Info */}
                <div className="mt-12 text-center">
                    <button className="text-sm text-gray-400 font-medium hover:text-gray-600 transition-colors">
                        Protected Collection
                    </button>
                </div>

            </div>
        </div>
    );
};
