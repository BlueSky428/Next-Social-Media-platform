// context/MyContext.tsx
"use client"
import { createContext, useState, ReactNode, useEffect } from 'react';

interface MyContextType {
    value: string;
    setServices: (status: string) => void;
    serviceStatus: string;
    setServicesTitle: (title: string) => void;
    serviceTitle: string;
}

const serviceContext = createContext<MyContextType | undefined>(undefined);

interface MyProviderProps {
    children: ReactNode;
}

export const ServicesProvider = ({ children }: MyProviderProps) => {
    const [value, setValue] = useState<string>("default value");
    const [serviceStatus, setServiceStatus] = useState('Instagram-Followers');
    const [serviceTitle, setServiceTitle] = useState("Instagram");

    useEffect(() => {
        reSetStatus();
    }, [])

    const reSetStatus = () => {
        // Get localstorage value.
        const storedStatus: string = localStorage.getItem('servicesStatus') as string;
        // Set the status with the status stored in localStorage
        if (storedStatus)
            setServiceStatus(storedStatus);
    }

    const setServices = (status: string) => {
        setServiceStatus(status);
    }

    const setServicesTitle = (title: string) => {
        setServiceTitle(title);
    }

    return (
        <serviceContext.Provider value={{ value, serviceStatus, setServices, serviceTitle, setServicesTitle }}>
            {children}
        </serviceContext.Provider>
    );
};

export default serviceContext;
