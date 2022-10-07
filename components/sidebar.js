import * as React from 'react';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
    NativeBaseProvider,
    Button,
    Box,
    HamburgerIcon,
    Pressable,
    Heading,
    VStack,
    Text,
    Center,
    HStack,
    Divider,
    Icon,
} from 'native-base';
import Home from "../pages/home";

const Drawer = createDrawerNavigator();

function Component(props) {
    return (
        <Center>
            <Text mt="12" fontSize="18">
                This is {props.route.name} page.
            </Text>
        </Center>
    );
}

const getIcon = (screenName) => {
    switch (screenName) {
        case 'Inbox':
            return 'email';
        case 'Outbox':
            return 'send';
        case 'Favorites':
            return 'heart';
        case 'Archive':
            return 'archive';
        case 'Trash':
            return 'trash-can';
        case 'Spam':
            return 'alert-circle';
        default:
            return undefined;
    }
};

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} safeArea>
            <VStack space="6" my="2" mx="1">
                <Box px="4">
                    <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
                        john_doe@gmail.com
                    </Text>
                </Box>
                <VStack divider={<Divider/>} space="4">
                    <VStack space="3">
                        {props.state.routeNames.map((name, index) => (
                            <Pressable
                                px="5"
                                py="3"
                                rounded="md"
                                key={index}
                                bg={
                                    index === props.state.index
                                        ? 'rgba(6, 182, 212, 0.1)'
                                        : 'transparent'
                                }
                                onPress={(event) => {
                                    props.navigation.navigate(name);
                                }}
                            >
                                <HStack space="7" alignItems="center">
                                    {/*<Icon*/}
                                    {/*  color={*/}
                                    {/*    index === props.state.index ? 'primary.500' : 'gray.500'*/}
                                    {/*  }*/}
                                    {/*  size="5"*/}
                                    {/*  as={<MaterialCommunityIcons name={getIcon(name)} />}*/}
                                    {/*/>*/}
                                    <Text
                                        fontWeight="500"
                                        color={
                                            index === props.state.index ? 'primary.500' : 'gray.700'
                                        }
                                    >
                                        {name}
                                    </Text>
                                </HStack>
                            </Pressable>
                        ))}
                    </VStack>
                </VStack>
            </VStack>
        </DrawerContentScrollView>
    );
}

export function SideBar() {
    return (
        <Box safeArea flex={1}>
            <Drawer.Navigator
                screenOptions={{swipeEnabled: true}}
                drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="Browse" component={Component}/>
            </Drawer.Navigator>
        </Box>
    );
}