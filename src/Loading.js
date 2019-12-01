import React from "react";
import {Loading as Spec} from "@yosmy/primitive-ui-spec";
import {Loading as BaseLoading} from "@yosmy/primitive-ui";

const Loading = ({
    ...props
}) => {
    return <BaseLoading
        {...props}
    />
};

Loading.propTypes = Spec.Props;

export default Loading;