import React from "react";
import {EmptyLayout as Spec} from "@yosmy/primitive-ui-spec";
import {EmptyLayout as BaseEmptyLayout} from "@yosmy/primitive-ui";

const EmptyLayout = ({
    ...props
}) => {
    return <BaseEmptyLayout
        {...props}
    />
};

EmptyLayout.propTypes = Spec.Props;

export default EmptyLayout;