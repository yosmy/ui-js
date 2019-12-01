import React from "react";
import {withTheme} from "@yosmy/style";
import Container from "./Container";
import LinePlaceholder from "./LinePlaceholder";

const LoaderListLoading = () => {
    return <Container
        margin={{
            top: 2
        }}
    >
        <Container>
            <LinePlaceholder />
        </Container>
        <Container
            margin={{
                top: 1
            }}
        >
            <LinePlaceholder />
        </Container>
        <Container
            margin={{
                top: 1
            }}
        >
            <LinePlaceholder />
        </Container>
    </Container>
};

export default withTheme(LoaderListLoading);