import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

const MyContext = React.createContext()

export const MyProvider = ({ children }) => {

    const [isEnabled, setIsEnabled] = React.useState(false);
    const [kariesValue, setkariesValue] = useState(1);
    const [inflamValue, setinflamValue] = useState(1);
    let defaultTeethImage = require('../assets/inflam1.png')
    let sockerklockaImage = require('../assets/sockerklocka.png')

    let iconKariesFlow = require('../assets/icons/kariesIcon.png')
    let iconInflamFlow = require('../assets/icons/inflamIcon.png')
    let iconEgenvard = require('../assets/icons/egenvardIcon.png')
    let iconSockerklocka = require('../assets/icons/sockerklockaIcon.png')

    const styles = StyleSheet.create({
        image: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            resizeMode: "contain",
            width: 300,
        },

        singleToothImage: {
            flex: 1,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            resizeMode: "contain",
            width: 700,

        },
        header: {
            fontWeight: 'bold',
            lineHeight: 64,
            fontSize: 28,
        },
        container: {
            flex: 1,
            width:"100%",
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "skyblue",
        },
        slider: {
            flex: 0.5,
            justifyContent: 'center',
            width: "70%",
        },
        icon: {
            justifyContent: 'center',
            alignItems: 'center',
            resizeMode: 'contain',
            height: "90%",
            width: "90%",   
            margin: 15,


        },
        iconContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: "40%",


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

            iconKariesFlow,
            iconInflamFlow,
            iconEgenvard,
            iconSockerklocka
        }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContext;

