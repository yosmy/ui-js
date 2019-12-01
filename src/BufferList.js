import React from "react";
import {withTheme} from "@yosmy/style";
import {BufferList as Spec} from "@yosmy/primitive-ui-spec";
import {BufferList as BaseBufferList} from "@yosmy/primitive-ui";
import {compileMargin} from "./Container";

const BufferList = ({
    theme, margin, ...props
}) => {
    return <BaseBufferList
        margin={compileMargin(theme.spacing, margin)}
        {...props}
    />
};

BufferList.propTypes = Spec.Props;

export default withTheme(BufferList);