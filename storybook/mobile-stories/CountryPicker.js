import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ThemeProvider} from "@yosmy/style";
import icons from '../icons';
import theme from '../theme';
import {CountryPicker, Input} from "../src";

const props = {
    ui: {
        icons: {
            actions: {
                down: icons.actions.down
            }
        }
    },
    messages: {
        select: "Selecciona tu país"
    },
    width: 200,
    favorites: ['DE', 'BR', 'CA', 'CU', 'EC', 'ES', 'US', 'MX'],
    onSelect: (country) => {}
};

storiesOf('CountryPicker', module)
    .add('default', () => (
        <ThemeProvider theme={theme}>
            <CountryPicker
                {...props}
            />
            <Input
                width={200}
                placeholder="Telefono"
            />
        </ThemeProvider>
    ))
    .add('more', () => (
        <ThemeProvider theme={theme}>
            <CountryPicker
                {...props}
                more={true}
            />
            <Input
                width={200}
                placeholder="Telefono"
            />
        </ThemeProvider>
    ))
;