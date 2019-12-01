import React from "react";
import {withTheme} from "@yosmy/style";
import {LinePlaceholder as Spec} from "@yosmy/primitive-ui-spec";
import {LinePlaceholder as BaseLinePlaceholder} from "@yosmy/primitive-ui";
import {compileMargin} from "./Container";

const LinePlaceholder = ({
    theme, margin,
    ...props
}) => {
    return <BaseLinePlaceholder
        margin={compileMargin(theme.spacing, margin)}
        {...props}
    />
};

LinePlaceholder.propTypes = Spec.Props;

export default withTheme(LinePlaceholder);