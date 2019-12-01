import React from "react";
import PropTypes from "prop-types";
import Platform from "@yosmy/platform";
import {Container as ContainerSpec, Image as ImageSpec} from "@yosmy/primitive-ui-spec"
import CirclePlaceholder from "./CirclePlaceholder";
import Image from "./Image";

const Picture = ({
    margin, source, size, resize, rounded,
    onClick
}) => {
    size = buildSize(size);

    if (source === null) {
        return <CirclePlaceholder
            margin={margin}
            size={size}
        />;
    }

    return <Image
        margin={margin}
        border={{
            radius: rounded
                ? Platform.select({
                    "ios": size / 2,
                    "android": size
                })
                : undefined,
        }}
        source={source}
        resize={resize}
        width={size}
        height={size}
        onClick={onClick}
    />;
}

const Props = {
    margin: ContainerSpec.MarginProp,
    source: ImageSpec.SourceProp,
    resize: ImageSpec.ResizeProp,
    rounded: PropTypes.bool,
    size: PropTypes.oneOf([
        "sm", "md", "lg", "xl"
    ]),
    onClick: PropTypes.func,
};

Picture.propTypes = Props;

Picture.defaultProps = {
    rounded: true,
    resize: "cover"
}

const buildSize = (size) => {
    // https://github.com/react-native-elements/react-native-elements/blob/next/src/avatar/Avatar.js#L21

    switch (size) {
        case "sm":
            size = 34;

            break;
        case "md":
            size = 50;

            break;
        case "lg":
            size = 75;

            break;
        case "xl":
        case undefined:
            size = 150;

            break;
        default:
            throw new Error(`Invalid size "${size}"`)
    }

    return size;
};

export {
    Picture,
    Props as PictureProps
};