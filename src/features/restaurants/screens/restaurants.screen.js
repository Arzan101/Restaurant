/* eslint-disable prettier/prettier */

import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, FlatList, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurants-info-card.component";


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
padding: ${(props) => props.theme.space[3]};
`;





export const RestaurantsScreen = () => (
  <SafeArea>

    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <FlatList
    data={[
      { name: 1 },
      { name: 2 },
      { name: 3 },
      { name: 4 },
      { name: 5 },
      { name: 6 },
      { name: 7 },
      { name: 8 },
      { name: 9 },
      { name: 10 },
      { name: 11 },
      { name: 12 },
      { name: 13 },
      { name: 14 },
    ]}
     renderItem={()=><RestaurantInfoCard/>}
     keyExtractor={(item)=> item.name}
     contentContainerStyle={{padding: 16}}
    />

   </SafeArea>
);

