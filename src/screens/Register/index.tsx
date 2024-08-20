import React, {useState} from "react";

import { Input } from "@/components/Forms/Input"
import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    Transactiontypes
} from './styles'
import { Button } from "@/components/Forms/Button";
import { TransactionTypeButton } from "@/components/Forms/TransactionTypeButton";
import { CategorySelect } from "@/components/Forms/CategorySelect";

export const Register = () => {
    const [transactionType, setTransectionType] = useState('');

    const handleTransactionTypeButton = (type : 'up' | 'down') => {
        return (
            setTransectionType(type)
        )
    }

    return (
        <Container>
            <Header>
                <Title>
                    Cadastro
                </Title>
            </Header>
            <Form>
                <Fields>
                    <Input
                        placeholder="Nome" 
                        />
                    <Input
                        placeholder="Preço" 
                        />
                    <Transactiontypes>
                        <TransactionTypeButton
                            type="up"
                            title="Income"
                            onPress={() => handleTransactionTypeButton('up')}
                            isActive={transactionType === 'up'}
                            />
                        <TransactionTypeButton
                            type="down"
                            title="Outcome"
                            onPress={() => handleTransactionTypeButton('down')}
                            isActive={transactionType === 'down'}
                            />
                    </Transactiontypes>
                    <CategorySelect title="Categoria" />
                </Fields>
                <Button title='Enviar'/>
                {/* <Button /> */}
            </Form>
        </Container>
    )
}