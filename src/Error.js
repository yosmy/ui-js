import React from "react";
import {Container as ContainerSpec} from "@yosmy/primitive-ui-spec";
import {withTheme} from "@yosmy/style";
import {Text} from "./Text";

const Error = ({
    theme, align, margin, children, ...props
}) => {
    return <Text
        align={{
            self: "center",
            ...align
        }}
        margin={margin}
        padding={theme.error.padding}
        border={theme.error.border}
        background={theme.error.background}
        color={theme.error.color}
        {...props} // key prop
    >
        {children}
    </Text>
};

Error.propTypes = {
    margin: ContainerSpec.MarginProp,
};

export default withTheme(Error);