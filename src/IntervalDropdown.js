import React from "react";
import PropTypes from "prop-types";
import {Dropdown} from "@yosmy/primitive-ui";
import {
    startOfWeek, startOfMonth, startOfYear,
    subWeeks, subMonths, subYears,
    addWeeks, addMonths, addYears,
    getTime
} from "@yosmy/date";
import {Container as ContainerSpec} from "@yosmy/primitive-ui-spec";

const resolveInterval = (key, timezone) => {
    let from, to, group;

    const now = Date.now();
    
    switch (key) {
        case "last_year":
            // Beginning of last year
            from = subYears(
                startOfYear(now),
                1
            );
            from = getTime(from);

            // Beginning of current year
            to = addYears(from, 1);
            to = getTime(to);

            from = from / 1000;
            to = to / 1000;

            group = "by-month";

            break;
        case "last_month":
            // Beginning of last month
            from = subMonths(
                startOfMonth(now),
                1
            );
            from = getTime(from);

            // Beginning of current month
            to = addMonths(from, 1);
            to = getTime(to);

            from = from / 1000;
            to = to / 1000;

            group = "by-day";

            break;
        case "last_week":
            // Beginning of last week
            from = subWeeks(
                startOfWeek(now),
                1
            );
            from = getTime(from);

            // Beginning of current week
            to = addWeeks(from, 1);
            to = getTime(to);

            from = from / 1000;
            to = to / 1000;

            group = "by-day";

            break;
        case "current_year":
            from = startOfYear(
                now
            );
            from = getTime(from);

            // Beginning of next year
            to = addYears(
                from,
                1
            );
            to = getTime(to);

            from = from / 1000;
            to = to / 1000;

            group = "by-month";

            break;
        case "current_month":
            // Beginning of current month
            from = startOfMonth(
                now
            );
            from = getTime(from);

            // Beginning of next month
            to = startOfMonth(
                now
            );
            to = addMonths(
                to,
                1
            );
            to = getTime(to);

            from = from / 1000;
            to = to / 1000;

            group = "by-day";

            break;
        case "current_week":
            // Beginning of current week
            from = startOfWeek(
                now
            );
            from = getTime(from);

            // Beginning of next week
            to = startOfWeek(
                now
            );
            to = addWeeks(
                to,
                1
            );
            to = getTime(to);

            from = from / 1000;
            to = to / 1000;

            group = "by-day";

            break;
        default:
            throw "Interval not supported";
    }

    return {
        key: key,
        from: from,
        to: to,
        timezone: timezone,
        group: group
    };
};

const IntervalDropdown = ({
    margin, value, timezone, onChange
}) => {
    return <Dropdown
        margin={margin}
        label="Intervalo"
        value={value}
        data={[
            {label: "Año pasado", value: "last_year"},
            {label: "Mes pasado", value: "last_month"},
            {label: "Semana pasada", value: "last_week"},
            {label: "Año actual", value: "current_year"},
            {label: "Mes actual", value: "current_month"},
            {label: "Semana actual", value: "current_week"},
        ]}
        onChange={(interval) => {
            onChange(
                resolveInterval(
                    interval,
                    timezone
                )
            );
        }}
    />;
};

const IntervalProps = PropTypes.shape({
    margin: ContainerSpec.MarginProp,
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
    timezone: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
});

export {resolveInterval, IntervalDropdown, IntervalProps};