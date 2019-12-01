import React from "react";
import {withTheme} from "@yosmy/style";
import {CirclePlaceholder as Spec} from "@yosmy/primitive-ui-spec";
import {CirclePlaceholder as BaseCirclePlaceholder} from "@yosmy/primitive-ui";
import {compileMargin} from "./Container";

const CirclePlaceholder = ({
    theme, margin,
    ...props
}) => {
    return <BaseCirclePlaceholder
        margin={compileMargin(theme.spacing, margin)}
        {...props}
    />
};

CirclePlaceholder.propTypes = Spec.Props;

export default withTheme(CirclePlaceholder);