import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ThemeProvider} from "@yosmy/style";
import icons from '../icons';
import theme from '../theme';
import {Input} from "../src";

storiesOf('Input', module)
    .add('default', () => (
        <ThemeProvider theme={theme}>
            <Input border={1} />
        </ThemeProvider>
    ))
    .add('with width', () => (
        <ThemeProvider theme={theme}>
            <Input
                width={100}
            />
        </ThemeProvider>
    ))
    .add('with help', () => (
        <ThemeProvider theme={theme}>
            <Input
                help="This is a help"
            />
        </ThemeProvider>
    ))
    .add('with error', () => (
        <ThemeProvider theme={theme}>
            <Input
                error="This is an error"
            />
        </ThemeProvider>
    ))
    .add('with help and error', () => (
        <ThemeProvider theme={theme}>
            <Input
                help="This is a help"
                error="This is an error"
            />
        </ThemeProvider>
    ))
    .add('with start', () => (
        <ThemeProvider theme={theme}>
            <Input
                start={<icons.objects.money />}
            />
        </ThemeProvider>
    ))
    .add('with end', () => (
        <ThemeProvider theme={theme}>
            <Input
                end={<icons.objects.money />}
            />
        </ThemeProvider>
    ))
;