import React from 'react';

const MyContext = React.createContext()

export const MyProvider = ({ children }) => {

    const [isEnabled, setIsEnabled] = React.useState(false);

    return (
        <MyContext.Provider value={{
            isEnabled, setIsEnabled
        }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContext;