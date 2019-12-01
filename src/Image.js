import React from "react";
import {withTheme} from "@yosmy/style";
import {Image as Spec} from "@yosmy/primitive-ui-spec";
import {Image as BaseImage} from "@yosmy/primitive-ui";
import {compileMargin} from "./Container";

const Image = ({
    theme, margin,
    ...props
}) => {
    return <BaseImage
        margin={compileMargin(theme.spacing, margin)}
        {...props}
    />
};

Image.propTypes = Spec.Props;

export default withTheme(Image);