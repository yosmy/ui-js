import React from "react";
import {withTheme} from "@yosmy/style";
import {Container as Spec} from "@yosmy/primitive-ui-spec";
import {Container as BaseContainer} from "@yosmy/primitive-ui";

const Container = ({
    theme, margin, padding, children, ...props
}) => {
    margin = compileMargin(
        theme.spacing,
        Spec.normalizeMargin(margin)
    );

    padding = compilePadding(
        theme.spacing,
        Spec.normalizePadding(padding)
    );

    return <BaseContainer
        margin={margin}
        padding={padding}
        {...props}
    >
        {children}
    </BaseContainer>
};

const compileMargin = (spacing, margin) => {
    margin = Spec.normalizeMargin(margin);

    if (typeof margin === "undefined") {
        return margin;
    }

    if (margin.raw) {
        return margin;
    }

    if (margin.top) {
        margin = {
            ...margin,
            top: spacing(margin.top)
        };
    }

    if (margin.bottom) {
        margin = {
            ...margin,
            bottom: spacing(margin.bottom)
        };
    }

    if (margin.left) {
        margin = {
            ...margin,
            left: spacing(margin.left)
        };
    }

    if (margin.right) {
        margin = {
            ...margin,
            right: spacing(margin.right)
        };
    }

    return margin;
};

const compilePadding = (spacing, padding) => {
    if (typeof padding === "undefined") {
        return padding;
    }

    if (typeof padding === "number") {
        padding = {
            top: padding,
            bottom: padding,
            left: padding,
            right: padding,
        };
    }

    if (padding.raw) {
        return padding;
    }

    if (padding.top) {
        padding = {
            ...padding,
            top: spacing(padding.top)
        };
    }

    if (padding.bottom) {
        padding = {
            ...padding,
            bottom: spacing(padding.bottom)
        };
    }

    if (padding.left) {
        padding = {
            ...padding,
            left: spacing(padding.left)
        };
    }

    if (padding.right) {
        padding = {
            ...padding,
            right: spacing(padding.right)
        };
    }

    return padding;
};

Container.propTypes = Spec.Props;

export default withTheme(Container);

export {
    compileMargin,
    compilePadding
};