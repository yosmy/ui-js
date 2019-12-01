import React from "react";
import {Container as ContainerSpec} from "@yosmy/primitive-ui-spec";
import {withTheme} from "@yosmy/style";
import {Text} from "./Text";

const Warning = ({
    theme, align, margin, children, ...props
}) => {
    return <Text
        align={{
            self: "center",
            ...align
        }}
        margin={margin}
        padding={theme.warning.padding}
        border={theme.warning.border}
        background={theme.warning.background}
        color={theme.warning.color}
        {...props} // key prop
    >
        {children}
    </Text>
};

Warning.propTypes = {
    margin: ContainerSpec.MarginProp,
};

export default withTheme(Warning);