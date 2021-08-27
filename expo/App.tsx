import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styled from "styled-components";

const StyledView = styled(View)`
    display: flex;
    background: #ffffff;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const Stack = createNativeStackNavigator();

const Dashboard: React.FC<Props> = ({ navigation }) => (
    <StyledView>
        <Text
            onPress={() => {
                navigation.push("Details");
            }}
        >
            Dashboard screen :)
        </Text>
    </StyledView>
);

const Details: React.FC<Props> = ({ navigation }) => (
    <StyledView>
        <Text
            onPress={() => {
                navigation.push("Dashboard");
            }}
        >
            Details screen :)
        </Text>
    </StyledView>
);

interface Props {
    navigation: any;
}

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Dashboard"
                screenOptions={{ headerShown: true }}
            >
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;
