import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ThemeProvider} from "@yosmy/style";
import theme from '../theme';
import {Flag} from '../src';

storiesOf('Flag', module)
    .add('default', () => (
        <ThemeProvider theme={theme}>
            <Flag
                country="CU"
            />
        </ThemeProvider>
    ))
    .add('with margin', () => (
        <ThemeProvider theme={theme}>
            <Flag
                country="CU"
                margin={{
                    left: 1
                }}
            />
        </ThemeProvider>
    ))
;