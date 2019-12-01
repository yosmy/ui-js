import React from "react";
import PropTypes from "prop-types";
import {Container as ContainerSpec} from "@yosmy/primitive-ui-spec"
import {Button as BaseButton, Progress} from "@yosmy/primitive-ui";
import {withTheme} from "@yosmy/style";
import {compileMargin, compilePadding} from "./Container";

const Button = ({
    theme, margin, padding, border,
    contrast, progress, onClick, children, ...props
}) => {
    margin = compileMargin(theme.spacing, {
        ...theme.button.margin,
        ...ContainerSpec.normalizeMargin(margin)
    });

    padding = compilePadding(theme.spacing, {
        ...theme.button.padding,
        ...ContainerSpec.normalizePadding(padding)
    });

    border = border || theme.button.border;

    if (progress) {
        children = putProgress(theme, children);
    }

    if (contrast) {
        theme.button.color = theme.button.contrast.color;
    }

    children = addColor(children, theme.button.color);

    children = addMargin(children, theme);

    return <BaseButton
        margin={margin}
        padding={padding}
        border={border}
        background={theme.button.background}
        onClick={() => {
            // It is still an onClick function but do nothing

            if (progress) {
                return;
            }

            onClick();
        }}
        {...props}
    >
        {children}
    </BaseButton>
};

Button.propTypes = {
    contrast: PropTypes.bool,
    margin: ContainerSpec.MarginProp,
    padding: ContainerSpec.PaddingProp,
    progress: PropTypes.bool,
    onClick: ContainerSpec.OnClickProp.isRequired,
};

const isIcon = (elem) => {
    return !elem.props.children;
};

const putProgress = (theme, children) => {
    const progress = <Progress
        size={10}
    />;

    const count = React.Children.count(children);

    switch (count) {
        case 1:
            if (isIcon(children)) {
                children = progress;
            } else {
                children = [
                    children,
                    <Progress
                        color={theme.button.color}
                        style={{
                            position: "absolute",
                            top: theme.spacing(theme.button.padding.top) + theme.button.progress.top,
                            right: theme.spacing(2),
                        }}
                    />
                ]
            }

            break;
        case 2:
            children = React.Children.map(children, (child) => {
                if (isIcon(child)) {
                    return progress;
                }

                return child;
            })

            break;
        default:
            throw new Error("Too many components inside a button");
    }

    return children;
};

const addColor = (children, color) => {
    return React.Children.map(children, (child, i) => {
        return <child.type
            key={i}
            color={color}
            {...child.props}
        />
    });
}

const addMargin = (children) => {
    const count = React.Children.count(children);

    if (count !== 2) {
        return children;
    }

    return React.Children.map(children, (child, i) => {
        if (isIcon(child)) {
            return child;
        }

        return <child.type
            key={i}
            margin={{
                left: i === 1 ? 1 : 0,
                right: i === 0 ? 1 : 0,
            }}
            {...child.props}
        />
    });
}

const PrimaryButton = ({
    theme, ...props
}) => {
    theme = {
        ...theme,
        button: {
            ...theme.button,
            ...theme.primary_button,
            border: {
                ...theme.button.border,
                ...theme.primary_button.border,
            }
        },
    };

    return <Button
        theme={theme}
        {...props}
    />
};

const PrimaryButtonWithTheme = withTheme(PrimaryButton);

const SecondaryButton = ({
    theme, ...props
}) => {
    theme = {
        ...theme,
        button: {
            ...theme.button,
            ...theme.secondary_button,
            border: {
                ...theme.button.border,
                ...theme.secondary_button.border,
            }
        },
    };

    return <Button
        theme={theme}
        {...props}
    />
};

const SecondaryButtonWithTheme = withTheme(SecondaryButton);

const TertiaryButton = ({
    theme, ...props
}) => {
    theme = {
        ...theme,
        button: {
            ...theme.button,
            ...theme.tertiary_button,
            border: {
                ...theme.button.border,
                ...theme.tertiary_button.border,
            }
        },
    };

    return <Button
        theme={theme}
        {...props}
    />
};

const TertiaryButtonWithTheme = withTheme(TertiaryButton);

const WarningButton = ({
    theme, ...props
}) => {
    theme = {
        ...theme,
        button: {
            ...theme.button,
            ...theme.warning_button,
            border: {
                ...theme.button.border,
                ...theme.warning_button.border,
            }
        },
    };

    return <Button
        theme={theme}
        {...props}
    />
};

const WarningButtonWithTheme = withTheme(WarningButton);

const DangerButton = ({
    theme, ...props
}) => {
    theme = {
        ...theme,
        button: {
            ...theme.button,
            ...theme.danger_button,
            border: {
                ...theme.button.border,
                ...theme.danger_button.border,
            }
        },
    };

    return <Button
        theme={theme}
        {...props}
    />
};

const DangerButtonWithTheme = withTheme(DangerButton);

const TabButton = ({
    theme, first, last, ...props
}) => {
    theme = {
        ...theme,
        button: {
            ...theme.button,
            ...theme.tab_button,
            border: {
                ...theme.button.border,
                ...theme.tab_button.border,
                left: !first ? {
                    width: 1,
                    color: theme.tab_button.border.color,
                } : undefined,
            },
            padding: {
                left: !first ? theme.tab_button.padding.left : undefined,
                right: !last ? theme.tab_button.padding.right : undefined,
            }
        },
    };

    return <Button
        theme={theme}
        align={{
            main: "flex-start"
        }}
        {...props}
    />
};

const TabButtonWithTheme = withTheme(TabButton);

export {
    Button as ThemedButton,
    PrimaryButtonWithTheme as PrimaryButton,
    SecondaryButtonWithTheme as SecondaryButton,
    TertiaryButtonWithTheme as TertiaryButton,
    DangerButtonWithTheme as DangerButton,
    WarningButtonWithTheme as WarningButton,
    TabButtonWithTheme as TabButton,
};