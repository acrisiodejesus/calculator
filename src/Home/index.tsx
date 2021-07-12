import React from "react";
import { useState } from "react";
import { Text, View } from "react-native";

import { Button } from '../components/Button';

import { styles } from "./styles";





export function Home() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const operators = ["+", "-", "", "÷"]


    return (
        <View style={styles.container} >
            <Text style={styles.title}>
                Calculadora Criativa
            </Text>
            <View style={styles.screen}>
                <Text>{ }</Text>
            </View>
            <View style={styles.keyboard}>
                <View style={styles.numbers}>

                    {numbers.map((number) =>
                        <Button title={number} activeOpacity={0.5} />
                    )}
                    <Button title="=" match activeOpacity={0.5} />
                </View>

                <View style={styles.operators}>
                    {operators.map((operator) =>
                        <Button title={operator} activeOpacity={0.5} />
                    )}
                </View>
            </View>
        </View>

    );
}