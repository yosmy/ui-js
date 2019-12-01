import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ThemeProvider} from "@yosmy/style";
import theme from '../theme';
import {Card, Container, WarningCard, Text} from "../src";

storiesOf('Card', module)
    .add('without padding', () => (
        <ThemeProvider theme={theme}>
            <Card
                align={{
                    cross: "center"
                }}
                margin={1}
                padding={0}
            >
                <Text>Content</Text>
            </Card>
        </ThemeProvider>
    ))
    .add('with title', () => (
        <ThemeProvider theme={theme}>
            <Card
                title="This is the title"
                margin={1}
            >
                <Text>This is the content</Text>
            </Card>
        </ThemeProvider>
    ))
    .add('with center children', () => (
        <ThemeProvider theme={theme}>
            <Card
                flow="column"
                align={{
                    main: 'flex-start',
                    cross: 'center'
                }}
            >
                <Text>This is the content</Text>
            </Card>
        </ThemeProvider>
    ))
    .add('with progress', () => (
        <ThemeProvider theme={theme}>
            <Card
                title="This is the title"
                margin={1}
                progress
            >
                <Text>This is the content</Text>
            </Card>
        </ThemeProvider>
    ))
    .add('warning card', () => (
        <ThemeProvider theme={theme}>
            <WarningCard
                title="This is the title"
                margin={1}
            >
                <Text>This is the content</Text>
            </WarningCard>
        </ThemeProvider>
    ))
;