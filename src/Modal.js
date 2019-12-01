import React from "react";
import {withTheme} from "@yosmy/style";
import {Modal as Spec} from "@yosmy/primitive-ui-spec";
import {Modal as BaseModal} from "@yosmy/primitive-ui";
import {compileMargin, compilePadding} from "./Container";

const Modal = ({
    theme, margin, padding, children, ...props
}) => {
    margin = compileMargin(theme.spacing, margin);
    padding = compilePadding(theme.spacing, padding)

    return <BaseModal
        margin={margin}
        padding={padding}
        {...props}
    >
        {children}
    </BaseModal>
};

Modal.propTypes = Spec.Props;

export default withTheme(Modal);