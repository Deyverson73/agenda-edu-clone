import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { vs } from 'react-native-size-matters';
import { useTheme } from 'styled-components/native';
import HomeScreen from '../Screens/Home';
import { IconContainer, IconCard } from './styles';

function NotificationsScreen() {
  return (
    <View>
      <Text>Notifications!</Text>
    </View>
  );
}

function ChatScreen() {
  return (
    <View>
      <Text>Chat!</Text>
    </View>
  );
}

function MenuScreen() {
  return (
    <View>
      <Text>Menu!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle={{ backgroundColor: theme.background }}
        tabBarOptions={{
          style: {
            minHeight: vs(58),
            elevation: 0,
            borderTopColor: 'transparent',
            backgroundColor: theme.backgroundBar,
          },
          showLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <IconContainer focused={focused}>
                <IconCard
                  lib="MaterialCommunityIcons"
                  name={focused ? 'home' : 'home-outline'}
                  focused={focused}
                />
              </IconContainer>
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <IconContainer focused={focused}>
                <IconCard
                  lib="MaterialCommunityIcons"
                  name={focused ? 'bell' : 'bell-outline'}
                  focused={focused}
                />
              </IconContainer>
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <IconContainer focused={focused}>
                <IconCard
                  lib="MaterialCommunityIcons"
                  name={focused ? 'chat' : 'chat-outline'}
                  focused={focused}
                />
              </IconContainer>
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <IconContainer focused={focused}>
                <IconCard
                  lib="MaterialCommunityIcons"
                  name={focused ? 'view-grid' : 'view-grid-outline'}
                  focused={focused}
                />
              </IconContainer>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
