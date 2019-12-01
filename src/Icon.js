import React from "react";
import {withTheme} from "@yosmy/style";

const Icon = ({
    theme, data, size, color, contrast, big, ...props
}) => {
    const Icon = data;

    if (contrast) {
        theme.icon.color = theme.icon.contrast.color;
    }

    if (big) {
        theme.icon.size = theme.icon.big.size;
    }

    return <Icon
        size={size || theme.icon.size}
        color={color || theme.icon.color}
        {...props}
    />
};

const IconWithTheme = withTheme(Icon);

const FormIcon = ({
    theme, ...props
}) => {
    theme = {
        ...theme,
        icon: {
            ...theme.icon,
            ...theme.form_icon,
        },
    };

    return <Icon
        theme={theme}
        {...props}
    />
};

const FormIconWithTheme = withTheme(FormIcon);

export {
    IconWithTheme as Icon,
    FormIconWithTheme as FormIcon,
};