import React from "react";
import {withTheme} from "@yosmy/style";
import Container from "./Container";
import {PrimaryButton} from "./Button";
import {Text} from "./Text";

const LoaderListMore = ({
    onClick,
}) => {
    return <Container
        flow="row"
        align={{
            main: "center"
        }}
    >
        <PrimaryButton
            margin={{
                top: 2
            }}
            onClick={onClick}
        >
            <Text>Mostrar más</Text>
        </PrimaryButton>
    </Container>
};

export default withTheme(LoaderListMore);