import React from "react";
import {withTheme} from "@yosmy/style";
// import {Chart as Spec} from "@yosmy/primitive-ui-spec";
import {Chart as BaseChart} from "@yosmy/primitive-ui";
import {compileMargin} from "./Container";

const Chart = ({
    theme, margin,
    ...props
}) => {
    return <BaseChart
        margin={compileMargin(theme.spacing, margin)}
        {...props}
    />
};

// Chart.propTypes = Spec.Props;

export default withTheme(Chart);