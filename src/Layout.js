import React from "react";
import {withTheme} from "@yosmy/style";
import {Layout} from "@yosmy/primitive-ui";
import {compileMargin, compilePadding} from "./Container";
import {Layout as LayoutSpec} from "@yosmy/primitive-ui-spec";

const Content = ({
    theme, margin, padding,
    ...props
}) => {
    return <Layout.Content
        margin={compileMargin(
            (amount) => {
                // Needs to be raw amount, because of the decimal insets
                return amount;
            },
            margin
        )}
        padding={compilePadding(theme.spacing, padding)}
        {...props}
    />
};

Content.propTypes = LayoutSpec.Content.Props;

const ContentWithTheme = withTheme(Content);

export default {
    Header: Layout.Header,
    Content: ContentWithTheme,
};