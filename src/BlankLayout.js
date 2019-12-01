import React from "react";
import {withTheme} from "@yosmy/style";
import {BlankLayout as Spec} from "@yosmy/primitive-ui-spec";
import {BlankLayout as BaseBlankLayout} from "@yosmy/primitive-ui";
import {compileMargin} from "./Container";

const BlankLayout = ({
    theme, margin,
    ...props
}) => {
    return <BaseBlankLayout
        margin={compileMargin(theme.spacing, margin)}
        {...props}
    />
};

BlankLayout.propTypes = Spec.Props;

export default withTheme(BlankLayout);