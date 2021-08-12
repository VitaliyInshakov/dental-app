import React, { FC } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

type GroupProps = {
    user: {
        avatar: string;
        fullName: string;
    };
    diagnosis: string;
    active: boolean;
    time: string;
    navigate: (args: any) => void;
}

const Group: FC<GroupProps> = ({
    user,
    diagnosis,
    active,
    time,
    navigate,
}) => {
    return (
        <GroupItem onPress={() => navigate("Patient")}>
            <Avatar
                source={{ uri: user.avatar }}
            />
            <View style={{ flex: 1 }}>
                <FullName>{user.fullName}</FullName>
                <GrayText>{diagnosis}</GrayText>
            </View>
            <GroupDate isActive={active}>{time}</GroupDate>
        </GroupItem>
    );
};

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  border-bottom-color: #f3f3f3;
  border-bottom-width: 1px;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

const FullName = styled.Text`
  font-weight: 700;
  font-size: 16px;
`;

const GrayText = styled.Text`
  color: #8b979f;
`;

const GroupDate = styled.Text<{isActive?: boolean;}>`
  background-color: ${props => props.isActive ? "#2a86ff" : "#e9f5ff"};
  color: ${props => props.isActive ? "#fff" : "#4249ff"};
  border-radius: 18px;
  font-weight: 700;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 30px;
`;

export default Group;