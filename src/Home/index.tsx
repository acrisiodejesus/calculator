import React from "react";
import { useState } from "react";
import { Text, View } from "react-native";

import { Button } from '../components/Button';

import { styles } from "./styles";


export function Home() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    const operators = ["+", "-", "x", "÷"]
    const [currentNumber, setCurrentNumber] = useState("");
    const [result, setResult] = useState(0);

    function handleCalculate(value: string) {
        const matchValueString = value.replace("x", "*").replace("÷", "/");
        const matchValueNumber = eval(matchValueString);
        const result = matchValueNumber
        console.log(result, matchValueString)

        return setCurrentNumber(currentNumber.substring(0, currentNumber.length - currentNumber.length) + matchValueNumber);

    }

    return (
        <View style={styles.container} >
            <Text style={styles.title}>
                Calculadora Criativa
            </Text>
            <View style={styles.screen}>
                <Text style={styles.text}>{result < 0 ? result : currentNumber}</Text>

                <Button title="C" onPress={() => (setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1)))} />
            </View>
            <View style={styles.keyboard}>
                <View style={styles.numbers}>

                    {numbers.map((number) =>
                        <Button title={number} activeOpacity={0.5} onPress={() => (setCurrentNumber(currentNumber + number))} />
                    )}
                    <Button title="=" match activeOpacity={0.5} onPress={() => (handleCalculate(currentNumber))} />
                </View>

                <View style={styles.operators}>
                    {operators.map((operator) =>
                        <Button
                            title={operator}
                            activeOpacity={0.5}
                            onPress={() => (
                                setCurrentNumber(
                                    currentNumber.substr(-1, 1) == "÷" || currentNumber.substr(-1, 1) == "+" || currentNumber.substr(-1, 1) == "x" || currentNumber.substr(-1, 1) == "-" ? currentNumber : currentNumber + operator
                                )

                            )}
                        />
                    )}
                </View>
            </View>
        </View>

    );
}