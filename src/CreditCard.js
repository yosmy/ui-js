import React from "react";
import {Text} from "./Text";

const CreditCard = ({
    last4, ...props
}) => {
    return <Text
        {...props}
    >
        {last4 && `**** **** **** ${last4}`}
    </Text>
};

export default CreditCard;