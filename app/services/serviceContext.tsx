// context/MyContext.tsx
"use client"
import { createContext, useState, ReactNode, useEffect } from 'react';

interface MyContextType {
    value: string;
    setServices: (status: string) => void;
    serviceStatus: string;
}

const serviceContext = createContext<MyContextType | undefined>(undefined);

interface MyProviderProps {
    children: ReactNode;
}

export const ServicesProvider = ({ children }: MyProviderProps) => {
    const [value, setValue] = useState<string>("default value");
    const [serviceStatus, setServiceStatus] = useState('Instagram-Followers');

    useEffect(() => {
        reSetStatus();
    }, [])

    const reSetStatus = () => {
        // Get localstorage value.
        const storedStatus: string = localStorage.getItem('servicesStatus') as string;
        // Set the status with the status stored in localStorage
        if (storedStatus) setServiceStatus(storedStatus);
    }

    const setServices = (status: string) => {
        setServiceStatus(status);
    }

    return (
        <serviceContext.Provider value={{ value, serviceStatus, setServices }}>
            {children}
        </serviceContext.Provider>
    );
};

export default serviceContext;
