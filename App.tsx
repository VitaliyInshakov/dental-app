import React from "react";
import { SectionList } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { Group, SectionTitle } from "./components";

const DATA = [
    {
        title: "11 September",
        data: [
            {
                time: "12:30",
                diagnosis: "Pulpits, remove a tooth",
                user: {
                    fullName: "Speedy Gonzales",
                    avatar: "https://avatars.githubusercontent.com/u/22046753?v=4",
                },
                active: true,
            },
            {
                time: "15:30",
                diagnosis: "Pulpits, remove a tooth",
                user: {
                    fullName: "Speedy Gonzales",
                    avatar: "https://avatars.githubusercontent.com/u/22046753?v=4",
                },
                active: false,
            },
        ],
    },
    {
        title: "15 September",
        data: [
            {
                time: "12:30",
                diagnosis: "Pulpits, remove a tooth",
                user: {
                    fullName: "Speedy Gonzales",
                    avatar: "https://avatars.githubusercontent.com/u/22046753?v=4",
                },
                active: false,
            },
            {
                time: "15:30",
                diagnosis: "Pulpits, remove a tooth",
                user: {
                    fullName: "Speedy Gonzales",
                    avatar: "https://avatars.githubusercontent.com/u/22046753?v=4",
                },
                active: false,
            },
        ],
    },
];

export default function App() {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => `group_${index}`}
        renderItem={({ item }) => <Group {...item} />}
        renderSectionHeader={({ section: { title }}) => <SectionTitle>{title}</SectionTitle>}
      />
      <PlusButton style={{
          shadowColor: "#2a86ff",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.7,
          shadowRadius: 3.5,
          elevation: 4,
      }}>
          <Ionicons name="ios-add" size={36} color="white" />
      </PlusButton>
    </Container>
  );
}

const PlusButton = styled.TouchableOpacity`
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background-color: #2a86ff;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 25px;
  bottom: 25px;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`;