import React from "react";
import PropTypes from "prop-types";
import {Container as ContainerSpec} from "@yosmy/primitive-ui-spec";
import {flags, unknown, world} from "./flags";
import Image from "./Image";

const Flag = ({
    country, size,
    margin, ...props
}) => {
    const flag = country === "world"
        ? world
        : (
            flags[country.toLowerCase()]
            || unknown
        );

    const {width, height} = buildWidthAndHeight(size);

    return <Image
        source={flag}
        margin={margin}
        width={width}
        height={height}
        {...props} // key
    />;
};

const buildWidthAndHeight = (size) => {
    let width, height;

    switch (size) {
        case "xs":
            width = 7;
            height = 7 * 3/4;

            break;
        case "sm":
        case undefined:
            width = 14;
            height = 14 * 3/4;

            break;
        case "md":
            width = 28;
            height = 28 * 3/4;

            break;
        case "lg":
            width = 56;
            height = 56 * 3/4;

            break;
        default:
            throw new Error(`invalid size ${size}`);
    }

    return {
        width: width,
        height: height
    }
};

Flag.propTypes = {
    country: PropTypes.string.isRequired, // iso
    name: PropTypes.string,
    size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
    margin: ContainerSpec.MarginProp,
};

export default Flag;