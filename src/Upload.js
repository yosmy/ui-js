import React from "react";
import {withTheme} from "@yosmy/style";
import {Upload as BaseUpload} from "@yosmy/primitive-ui";
import {compileMargin} from "./Container";

const Upload = ({
    theme, margin,
    ...props
}) => {
    return <BaseUpload
        margin={compileMargin(theme.spacing, margin)}
        {...props}
    />
};

// Upload.propTypes = Spec.Props;

export default withTheme(Upload);