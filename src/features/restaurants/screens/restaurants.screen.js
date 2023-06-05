/* eslint-disable prettier/prettier */

import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurants-info-card.component";


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
padding: ${(props) => props.theme.space[3]};
 
`;



export const RestaurantsScreen = () => (
  <SafeArea>

    <SearchContainer>
      <Searchbar />
    </SearchContainer>

      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>

   </SafeArea>
);

