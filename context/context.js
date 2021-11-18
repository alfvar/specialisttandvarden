import React from 'react';
import { StyleSheet } from 'react-native';

const MyContext = React.createContext()

export const MyProvider = ({ children }) => {

    const [isEnabled, setIsEnabled] = React.useState(false);
    const styles = StyleSheet.create({
        image: {
            width: 400,
        },
        header: {
            fontWeight: 'bold',
            lineHeight: 64,
            fontSize: 28,
        },
    });
    return (
        <MyContext.Provider value={{
            isEnabled, setIsEnabled, styles
        }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContext;

