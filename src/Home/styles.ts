import { StyleSheet } from "react-native";

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#1B2338'

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#DEDEDE',
        marginBottom: 25
    },
    screen: {
        width: 350,
        height: 120,
        backgroundColor: '#3A3F50',
        borderRadius: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    text: {
        color: '#DEDEDE',
        fontWeight: '100',
        fontSize: 24,
        paddingHorizontal: 20,
        flexWrap: 'wrap',
        width: '80%'
    },
    keyboard: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'space-between',
    },
    numbers: {
        width: '75 %',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

    },
    operators: {


    }
})