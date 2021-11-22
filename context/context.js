import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

const MyContext = React.createContext()

export const MyProvider = ({ children }) => {

    const [isEnabled, setIsEnabled] = React.useState(false);
    const [kariesValue, setkariesValue] = useState(1);
    const [inflamValue, setinflamValue] = useState(1);
    let defaultTeethImage = require('../assets/teeth2.png')
    let sockerklockaImage = require('../assets/sockerklocka.png')
    let egenvardImage = require('../assets/egenvard.png')


    const styles = StyleSheet.create({
        image: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            resizeMode: "contain",
            width: 200,
        },
        header: {
            fontWeight: 'bold',
            lineHeight: 64,
            fontSize: 28,
        },
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        slider: {
            flex: 1,
            justifyContent: 'center' ,
            width: 300,
        }
    });
    return (
        <MyContext.Provider value={{
            isEnabled, setIsEnabled,
            styles,
            kariesValue, setkariesValue,
            inflamValue, setinflamValue,
            defaultTeethImage,
            sockerklockaImage,
            egenvardImage
        }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContext;

