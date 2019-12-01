import React, {useState} from 'react';
import {storiesOf} from '@storybook/react-native';
import {ThemeProvider} from "@yosmy/style";
import {Input} from "@yosmy/primitive-ui";
import theme from '../theme';
import {PrimaryButton, Modal, Text} from '../src';

const Launcher = () => {
    const [modal, setModal] = useState(false);

    return <React.Fragment>
        <PrimaryButton
            onClick={() => {
                setModal(true);
            }}
        >
            <Text>Open</Text>
        </PrimaryButton>
        {modal && <Modal
            background="red"
            onClose={() => {
                setModal(false);
            }}
        >
            <Input placeholder="Placeholder" />
        </Modal>}
    </React.Fragment>
}

storiesOf('Modal', module)
    .add('default', () => (
        <ThemeProvider theme={theme}>
            <Launcher />
        </ThemeProvider>
    ))
;