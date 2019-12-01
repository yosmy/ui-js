import React from "react";
import {withTheme} from "@yosmy/style";
import {Json as Spec} from "@yosmy/primitive-ui-spec";
import {Json as BaseJson} from "@yosmy/primitive-ui";
import {compileMargin} from "./Container";

const Json = ({
    theme, margin,
    ...props
}) => {
    return <BaseJson
        margin={compileMargin(theme.spacing, margin)}
        {...props}
    />
};

Json.propTypes = Spec.Props;

export default withTheme(Json);