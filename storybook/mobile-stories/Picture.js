import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ThemeProvider} from "@yosmy/style";
import square from './square.png';
import theme from '../theme';
import {Picture} from '../src';

storiesOf('Picture', module)
    .add('default', () => (
        <ThemeProvider theme={theme}>
            <Picture
                source={square}
                onClick={() => {
                    console.log('onClick');
                }}
            />
        </ThemeProvider>
    ))
    .add('loading', () => (
        <ThemeProvider theme={theme}>
            <Picture
                source={null}
            />
        </ThemeProvider>
    ))
    .add('with different sizes', () => (
        <ThemeProvider theme={theme}>
            <Picture
                source={square}
                size="sm"
            />
            <Picture
                source={square}
                size="md"
            />
            <Picture
                source={square}
                size="lg"
            />
            <Picture
                source={square}
                size="xl"
            />
        </ThemeProvider>
    ))
;
