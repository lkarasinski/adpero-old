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

const Home: React.FC = () => (
    <StyledView>
        <Text>Home screen :)</Text>
    </StyledView>
);

const Details: React.FC = () => (
    <StyledView>
        <Text>Details screen :)</Text>
    </StyledView>
);

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;
