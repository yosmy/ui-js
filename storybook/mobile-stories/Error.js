import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ThemeProvider} from "@yosmy/style";
import theme from '../theme';
import {Error} from "../src";
import Container from "../src/Container";

storiesOf('Error', module)
    .add('default', () => (
        <ThemeProvider theme={theme}>
            <Error>
                This is an error
            </Error>
        </ThemeProvider>
    ))
    .add('long text', () => (
        <ThemeProvider theme={theme}>
            <Error>
                This is a long error message, that should have many lines and centered
            </Error>
        </ThemeProvider>
    ))
    .add('auto width', () => (
        <ThemeProvider theme={theme}>
            <Container
                flow="row"
                align={{
                    main: 'center'
                }}
            >
                <Error>
                    This is an error
                </Error>
            </Container>
        </ThemeProvider>
    ))
    .add('with two lines', () => (
        <ThemeProvider theme={theme}>
            <Error>
                {"This is line 1\nThis is line 2"}
            </Error>
        </ThemeProvider>
    ))
;