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
            justifyContent: 'center',
            alignItems: 'center',
            resizeMode: "contain",
            width: 700,
            marginTop: 50,

        },
        header: {
            fontWeight: 'bold',
            lineHeight: 64,
            fontSize: 28,
        },
        container: {
            flex: 1,
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
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            resizeMode: "contain",
            width: 150,
            height: 150,
            margin: 20,

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
            egenvardImage,

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

