import React, {useState, useEffect} from 'react';
import {storiesOf} from '@storybook/react-native';
import {ThemeProvider} from "@yosmy/style";
import theme from '../theme';
import EmptyLayout from "../src/EmptyLayout";
import LoaderListMore from "../src/LoaderListMore";
import LoaderListLoading from "../src/LoaderListLoading";
import LoaderList from "../src/LoaderList";
import {PrimaryButton} from "../src/Button";
import {Text} from "../src/Text";

const common = {
    ui: {
        layout: EmptyLayout,
        empty: () => {
            return <Text>No hay elementos aún</Text>;
        },
        loading: LoaderListLoading,
        more: LoaderListMore,
        item: ({column1, column2}) => {
            console.log(1);

            return <Text>{column1} - {column2}</Text>
        }
    },
    criteria: {
        query: {},
        limit: 2
    }
};

const Environment = () => {
    const [query, setQuery] = useState({
        column1: "1"
    });

    return <EmptyLayout>
        <PrimaryButton
            margin={{
                top: 10
            }}
            onClick={() => {
                setQuery({
                    column1: "2"
                });
            }}
        >
            <Text>Change query</Text>
        </PrimaryButton>
        <LoaderList
            {...common}
            criteria={{
                ...common.criteria,
                query: query
            }}
            onCollect={async (query, skip, limit) => {
                const items = [
                    {
                        "column1": "1",
                        "column2": "2",
                    },
                    {
                        "column1": "1",
                        "column2": "3",
                    },
                    {
                        "column1": "2",
                        "column2": "3",
                    },
                    {
                        "column1": "1",
                        "column2": "4",
                    }
                ];

                return {
                    items: items
                        .filter(({column1, column2}) => {
                            return (
                                (!query.column1 || query.column1 === column1)
                                && (!query.column2 || query.column2 === column2)
                            )
                        })
                        .slice(skip, skip + limit)
                };
            }}
        />
    </EmptyLayout>
};

storiesOf('LoaderList', module)
    .add('loading', () => (
        <ThemeProvider theme={theme}>
            <LoaderList
                {...common}
                onCollect={() => {
                    return new Promise(() => {});
                }}
            />
        </ThemeProvider>
    ))
    .add('empty', () => (
        <ThemeProvider theme={theme}>
            <LoaderList
                {...common}
                onCollect={async () => {
                    return {
                        items: []
                    };
                }}
            />
        </ThemeProvider>
    ))
    .add('default', () => (
        <ThemeProvider theme={theme}>
            <Environment />
        </ThemeProvider>
    ))
;