import React from "react";
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList
} from "./styles";
import { HighlightCard } from "@/components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "@/components/TransactionCard";


export interface DataListProps extends TransactionCardProps {
  id: string;
}


export const Dashboard = () => {

  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00", 
      category: {
            name: "Vendas",
            icon: "dollar-sign"
      },
    date: "13/04/2024"
  },
    {
      id: '2',
      type: 'negative',
      title: "Hamburgueria Pizzy",
      amount: "R$ 59,00", 
      category: {
            name: "Alimentação",
            icon: "coffee"
      },
    date: "10/04/2024"
  },
    {
      id: '3',
      type: 'negative',
      title: "Aluguel do apartamento",
      amount: "R$ 1.200,00", 
      category: {
            name: "casa",
            icon: "home"
      },
    date: "10/04/2024"
  },
];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/142439536?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Pedro</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard 
          type="up"
          title="Entrada" 
          amount="R$ 17.400,00" 
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard 
          type="down"
          title="Saídas" 
          amount="R$ 1.259,00" 
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard 
          type="total"
          title="Total" 
          amount="R$ R$ 16.141,00" 
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>

        <TransactionList 
          data={data}
          keyEstractor={item => item.id}
          renderItem={ ({ item }) => <TransactionCard data={item}/> }
        />

        
      </Transactions>
    </Container>
  );
};
