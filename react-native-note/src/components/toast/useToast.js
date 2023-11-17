import { createContext, useContext, useState } from "react";

const ToastContext = createContext(null);

export const useToast = () => {
    return useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('success');

    const showToast = (msg, type) => {
        if (visible) return;
        
        setMessage(msg);
        setType(type);
        setVisible(true);
    };
    const hideToast = () => {
        setVisible(false);
    }

    return (
        <ToastContext.Provider value={{ visible, message, type, showToast, hideToast }}>{children}</ToastContext.Provider>
    );
};