import React from "react";

import { styles } from "./styles";
import { theme } from "../../styles/theme";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";




interface Props extends TouchableOpacityProps {
    title: number | string;
    match?: boolean;
}

export function Button({ title, match, ...rest }: Props) {



    return (
        <TouchableOpacity {...rest} style={match ? styles.match : styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}