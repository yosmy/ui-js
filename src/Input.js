import React, {memo} from "react";
import PropTypes from "prop-types";
import {withTheme} from "@yosmy/style";
import {Container as ContainerSpec, Input as InputSpec} from "@yosmy/primitive-ui-spec";
import {Input as BaseInput} from "@yosmy/primitive-ui";
import Container from "./Container";
import Error from "./Error";
import {SecondaryText} from "./Text";

const Input = memo(({
    theme, margin, padding, width, flex,
    id, value, placeholder, focus, keyboard, length, multi, secure, capitalize, onChange,
    start, end, help, error,
    ...props
}) => {
    return <Container
        flow="column"
        align={{
            main: "flex-start",
            cross: "flex-start"
        }}
        margin={margin}
        padding={padding}
        width={width}
        flex={flex}
        {...props} // key
    >
        <Container
            flow="row"
            align={{
                main: "flex-start",
                cross: "center"
            }}
            border={{
                color: theme.input.border.color,
                bottom: {
                    width: theme.input.border.width,
                }
            }}
        >
            {start}
            <BaseInput
                id={id}
                flex={1}
                margin={{
                    left: start && theme.spacing(2),
                    right: end && theme.spacing(2)
                }}
                value={value}
                placeholder={placeholder}
                focus={focus}
                keyboard={keyboard}
                length={length}
                multi={multi}
                secure={secure}
                capitalize={capitalize}
                height={theme.spacing(4)}
                onChange={onChange}
            />
            {end}
        </Container>
        {help && <SecondaryText
            margin={{
                top: 0.5
            }}
        >
            {help}
        </SecondaryText>}
        {error && <Error
            align={{
                main: "flex-start"
            }}
            margin={{
                top: 0.5
            }}
            padding={{
                top: 0.5,
                bottom: 0.5,
                right: 0.5,
            }}
        >
            {error}
        </Error>}
    </Container>
}, (prev, next) => {
    return (
        prev.value === next.value
        && prev.start === next.start
        && prev.end === next.end
    );
});

Input.propTypes = {
    margin: ContainerSpec.MarginProp,
    width: ContainerSpec.WidthProp,
    help: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
    ]),
    start: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
    ]),
    end: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
    ]),
    ...InputSpec.Props
};

// const renderHelp = (help) => {
//     return help && (!Array.isArray(help)
//         ? <Text>
//             {help}
//         </Text>
//         : help.map((line, i) => {
//             return <Text
//                 key={i}
//             >
//                 {line}
//             </Text>
//         })
//     )
// }

export default withTheme(Input);