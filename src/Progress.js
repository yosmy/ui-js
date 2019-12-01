import React from "react";
import {withTheme} from "@yosmy/style";
import {Progress as Spec} from "@yosmy/primitive-ui-spec";
import {Progress as BaseProgress} from "@yosmy/primitive-ui";
import {compileMargin} from "./Container";

const Progress = ({
    theme, align, margin,
    ...props
}) => {
    return <BaseProgress
        align={align}
        margin={compileMargin(theme.spacing, margin)}
        {...props}
    />
};

Progress.propTypes = Spec.Props;

export default withTheme(Progress);