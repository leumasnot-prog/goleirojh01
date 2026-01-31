import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { translations, Language, Translations } from './translations';

interface LanguageContextType {
    language: Language;
    t: Translations;
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('pt');

    const toggleLanguage = useCallback(() => {
        setLanguageState(prev => prev === 'pt' ? 'en' : 'pt');
    }, []);

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang);
    }, []);

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, t, toggleLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
