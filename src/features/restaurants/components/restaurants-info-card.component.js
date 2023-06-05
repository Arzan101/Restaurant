/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
background-color: ${(props) => props.theme.colors.bg.primary};
`; 

const RestaurantCardCover = styled(Card.Cover)`
padding: ${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
padding: ${(props) => props.theme.space[3]};
color: ${(props) => props.theme.colors.ui.primary};
font-size: ${(props)=>props.theme.fontSizes.title}
`;


export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
      name = "Some Restaurant",
      icon,
      photos = [
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      ],
      address = "100 some random street",
      isOpenNow = true,
      rating = 4,
      isClosedTemporarily,
    } = restaurant;
  
    return (
      <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Title>{name}</Title>
      </RestaurantCard>
    );
    };
   