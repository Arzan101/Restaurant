/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const RestaurantCard = styled(Card)`
background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
padding: ${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;



const Info = styled.View`
padding: ${(props) => props.theme.space[3]};
`;

const Title = styled(Text)`

color: ${(props) => props.theme.colors.ui.primary};
font-size: ${(props)=>props.theme.fontSizes.title}
`;

const Address = styled(Text)`
font-size: ${(props)=>props.theme.fontSizes.caption}
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

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
      <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
        <Title>{name}</Title>
        <Rating>
        {ratingArray.map(() => (
          <SvgXml xml={star} width={20} height={20} />
        ))}
      </Rating>
        <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    );
    };
