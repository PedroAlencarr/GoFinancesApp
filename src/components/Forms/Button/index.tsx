import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles"

interface Props extends TouchableOpacityProps{
    title: string;
}

export const Button = ({ title, ...rest }: Props) => {
    return (
        <Container>
            <Title>
                {title}
            </Title>
        </Container>
    )
}