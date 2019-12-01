import React from "react";
import {withTheme} from "@yosmy/style";
import {Container as ContainerSpec} from "@yosmy/primitive-ui-spec";
import Container from "./Container";
import {TitleText} from "./Text";
import Progress from "./Progress";

const Props = {
    flow: ContainerSpec.FlowProp,
    align: ContainerSpec.AlignProp,
    margin: ContainerSpec.MarginProp,
    padding: ContainerSpec.PaddingProp,
};

const Card = ({
    theme, flow, align, margin, padding, title, actions, progress, children, ...props
}) => {
    margin = {
        ...theme.card.margin,
        ...ContainerSpec.normalizeMargin(margin)
    };

    padding = {
        ...theme.card.padding,
        ...ContainerSpec.normalizePadding(padding)
    };

    actions = renderActions(theme, actions);

    return <Container
        margin={margin}
        background={theme.card.background}
        shadow={theme.card.shadow}
        // gradient={theme.card.gradient}
        border={theme.card.border}
        {...props} // key
    >
        {title && renderTitle(theme, padding, title, progress)}
        <Container
            flow={flow}
            align={align}
            padding={padding}
        >
            {children}
        </Container>
        {actions && <Container
            flow="row"
            align={{
                main: "flex-start",
                cross: "flex-start"
            }}
        >
            {actions}
        </Container>}
    </Container>
};

Card.propTypes = Props;

const renderTitle = (theme, padding, title, progress) => {
    const p = padding && padding.top
        ? padding.top
        : 0;

    const color = theme.card.title && theme.card.title.color
        ? theme.card.title.color
        : undefined;

    const background = theme.card.title && theme.card.title.background
        ? theme.card.title.background
        : undefined;

    return <Container
        flow="row"
        align={{
            main: "center",
            cross: "center"
        }}
        padding={{
            top: p,
            bottom: p,
            left: p,
            right: p
        }}
        background={background}
    >
        <TitleText color={color}>
            {title}
        </TitleText>
        {progress && <Progress
            style={{
                position: "absolute",
                top: theme.spacing(2) + 5,
                right: theme.spacing(2) + 5,
            }}
        />}
    </Container>
}

const renderActions = (theme, actions) => {
    if (!actions) {
        return actions;
    }

    actions = actions.map((action, i) => {
        // Margin in all but the first
        const margin = i !== 0
            ? {
                left: 1
            } : undefined;

        return <action.type
            key={i}
            margin={margin}
            {...action.props}
        />
    });

    actions = <Container
        flow="row"
        align={{
            main: "flex-start",
            cross: "center"
        }}
        margin={{
            top: 2
        }}
    >
        {actions}
    </Container>;

    return actions;
};

const CardWithTheme = withTheme(Card);

const WarningCard = ({theme, ...props}) => {
    theme = {
        ...theme,
        card: {
            ...theme.card,
            ...theme.warning_card,
            border: {
                ...theme.card.border,
                ...theme.warning_card.border,
            },
            title: {
                ...theme.card.title,
                ...theme.warning_card.title,
            }
        },
    };

    return <Card
        theme={theme}
        {...props}
    />
};

WarningCard.propTypes = Props;

const WarningCardWithTheme = withTheme(WarningCard);

export {
    CardWithTheme as Card,
    WarningCardWithTheme as WarningCard
};