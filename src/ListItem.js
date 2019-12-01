import React from "react";
import PropTypes from "prop-types";
import {Container as ContainerSpec} from "@yosmy/primitive-ui-spec";
import {Text, SecondaryText} from "./Text";
import Container from "./Container";

const ListItem = ({
    margin, padding, border, background,
    start, title, subtitle, end,
    disabled, onClick, ...props
}) => {
    if (typeof start === "function") {
        start = start();
    }

    if (typeof title === "string") {
        title = <Text wrap>
            {title}
        </Text>;
    } else if (typeof title === "function") {
        title = title();
    }

    if (typeof subtitle === "string") {
        subtitle = <SecondaryText wrap>
            {subtitle}
        </SecondaryText>;
    } else if (typeof subtitle === "function") {
        subtitle = subtitle();
    }

    if (typeof end === "function") {
        end = end();
    }

    return <Container
        flow="row"
        align={{
            main: "flex-start",
            cross: "center"
        }}
        margin={margin}
        padding={padding}
        border={border}
        background={background}
        {...props}
    >
        <Container
            flow="row"
            flex
            align={{
                main: "flex-start",
                cross: "center"
            }}
            onClick={!disabled ? onClick : undefined}
        >
            {start}
            <Container
                margin={{
                    left: start && 1
                }}
            >
                {title}
                {subtitle}
            </Container>
        </Container>
        {end}
    </Container>
};

ListItem.propTypes = {
    margin: ContainerSpec.MarginProp,
    padding: ContainerSpec.PaddingProp,
    border: ContainerSpec.BorderProp,
    background: ContainerSpec.BackgroundProp,
    start: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]),
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.func,
    ]),
    subtitle: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.func,
    ]),
    end: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default ListItem;