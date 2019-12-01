import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ThemeProvider} from "@yosmy/style";
import theme from '../theme';
import icons from '../icons';
import {ListItem, Text} from "../src";

storiesOf('ListItem', module)
    .add('as string', () => (
        <ThemeProvider theme={theme}>
            <ListItem
                start={<Text>L</Text>}
                title="T"
                subtitle="S"
                end={<Text>R</Text>}
            />
        </ThemeProvider>
    ))
    .add('without start', () => (
        <ThemeProvider theme={theme}>
            <ListItem
                title="T"
                subtitle="S"
                end={<Text>R</Text>}
            />
        </ThemeProvider>
    ))
    .add('without end', () => (
        <ThemeProvider theme={theme}>
            <ListItem
                start={<Text>L</Text>}
                title="T"
                subtitle="S"
            />
        </ThemeProvider>
    ))
    .add('with onClick', () => (
        <ThemeProvider theme={theme}>
            <ListItem
                start={<icons.states.unselected />}
                title={<Text margin={{left: 1}}>T</Text>}
                subtitle={<Text margin={{left: 1}}>S</Text>}
                end={<Text>R</Text>}
                onClick={() => {
                    console.log('onClick');
                }}
            />
        </ThemeProvider>
    ))
    .add('as function', () => (
        <ThemeProvider theme={theme}>
            <ListItem
                start={() => {
                    return <Text>L</Text>
                }}
                title={() => {
                    return <Text>T</Text>
                }}
                subtitle={() => {
                    return <Text>S</Text>
                }}
                end={() => {
                    return <Text>R</Text>
                }}
            />
        </ThemeProvider>
    ))
    .add('as element', () => (
        <ThemeProvider theme={theme}>
            <ListItem
                start={<Text>L</Text>}
                title={<Text>T</Text>}
                subtitle={<Text>S</Text>}
                end={<Text>R</Text>}
            />
        </ThemeProvider>
    ))
;