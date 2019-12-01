import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ThemeProvider} from "@yosmy/style";
import icons from '../icons';
import theme from '../theme';
import {Container, PrimaryButton, SecondaryButton, TertiaryButton, WarningButton, DangerButton, TabButton, Text} from '../src';

storiesOf('Button', module)
    .add('primary', () => (
        <ThemeProvider theme={theme}>
            <PrimaryButton
                onClick={() => {}}
            >
                <icons.actions.complete />
                <Text>Primary</Text>
            </PrimaryButton>
        </ThemeProvider>
    ))
    .add('secondary', () => (
        <ThemeProvider theme={theme}>
            <SecondaryButton
                onClick={() => {}}
            >
                <icons.actions.complete />
                <Text>Secondary</Text>
            </SecondaryButton>
        </ThemeProvider>
    ))
    .add('tertiary', () => (
        <ThemeProvider theme={theme}>
            <TertiaryButton
                onClick={() => {}}
            >
                <Text>Tertiary</Text>
            </TertiaryButton>
        </ThemeProvider>
    ))
    .add('tertiary with custom border', () => (
        <ThemeProvider theme={theme}>
            <TertiaryButton
                border={{
                    color: theme.divider.border.color,
                    bottom: {
                        width: theme.divider.border.width
                    }
                }}
                onClick={() => {}}
            >
                <Text>Tertiary</Text>
            </TertiaryButton>
        </ThemeProvider>
    ))
    .add('warning', () => (
        <ThemeProvider theme={theme}>
            <WarningButton
                onClick={() => {}}
            >
                <Text>Warning</Text>
            </WarningButton>
        </ThemeProvider>
    ))
    .add('danger', () => (
        <ThemeProvider theme={theme}>
            <DangerButton
                onClick={() => {}}
            >
                <Text>Danger</Text>
            </DangerButton>
        </ThemeProvider>
    ))
    .add('tab', () => (
        <ThemeProvider theme={theme}>
            <Container
                flow="row"
            >
                <TabButton
                    first
                    onClick={() => {}}
                >
                    <Text>Tab 1</Text>
                </TabButton>
                <TabButton
                    onClick={() => {}}
                >
                    <Text>Tab 2</Text>
                </TabButton>
                <TabButton
                    last
                    onClick={() => {}}
                >
                    <Text>Tab 3</Text>
                </TabButton>
            </Container>

        </ThemeProvider>
    ))
    .add('left icon', () => (
        <ThemeProvider theme={theme}>
            <PrimaryButton
                onClick={() => {}}
            >
                <icons.actions.back />
                <Text>Primary</Text>
            </PrimaryButton>
        </ThemeProvider>
    ))
    .add('right icon', () => (
        <ThemeProvider theme={theme}>
            <PrimaryButton
                onClick={() => {}}
            >
                <Text>Primary</Text>
                <icons.actions.continue />
            </PrimaryButton>
        </ThemeProvider>
    ))
    .add('progress with icon', () => (
        <ThemeProvider theme={theme}>
            <PrimaryButton
                progress
                onClick={() => {}}
            >
                <icons.actions.complete />
                <Text>Primary</Text>
            </PrimaryButton>
        </ThemeProvider>
    ))
    .add('progress without icon', () => (
        <ThemeProvider theme={theme}>
            <PrimaryButton
                progress
                onClick={() => {}}
            >
                <Text>Primary</Text>
            </PrimaryButton>
        </ThemeProvider>
    ))
    .add('space between', () => (
        <ThemeProvider theme={theme}>
            <PrimaryButton
                align={{
                    main: "space-between"
                }}
                padding={1}
                onClick={() => {}}
            >
                <Text>Primary</Text>
                <icons.actions.continue />
            </PrimaryButton>
        </ThemeProvider>
    ))
;