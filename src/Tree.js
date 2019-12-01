import React from "react";
import Container from "./Container";
import {Text} from "./Text";

const Tree = ({margin, data, ...props}) => {
    if (!data) {
        return <React.Fragment />;
    }

    if (typeof data !== "string") {
        let items = [];

        for (let [key, value] of Object.entries(data)) {
            items.push(<Container
                key={key}
                flow="row"
            >
                <Text>{key}:</Text>
                <Tree
                    data={value}
                />
            </Container>);
        }

        return <Container
            margin={{
                left: (margin && margin.left
                    ? margin.left
                    : 0)
                    + 1
            }}
            {...props} // key
        >
            {items}
        </Container>
    }

    return <Text
        margin={margin}
        {...props} // key
    >
        {data}
    </Text>
};

export default Tree;
