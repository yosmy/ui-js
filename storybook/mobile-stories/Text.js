import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ThemeProvider} from "@yosmy/style";
import theme from '../theme';
// import {Text, Container, TitleText, SecondaryText} from '../src';
import {Text} from '../src';

storiesOf('Text', module)
    .add('all', () => (
        <ThemeProvider theme={theme}>
            <Text>Text</Text>

            {/* Lazy text */}
            <Text />

            <Container background="#CDCDCD"><Text contrast>Contrast Text</Text></Container>

            <TitleText>Title text</TitleText>

            <Container background="#CDCDCD"><TitleText contrast>Contrast Title text</TitleText></Container>

            <SecondaryText>Secondary text</SecondaryText>
        </ThemeProvider>
    ))
;
