import React, {memo, useState, useEffect} from "react";
import PropTypes from "prop-types";

const LoaderList = memo(({
    ui, criteria, onCollect
}) => {
    // Store items, until onEnrich is finished
    const [tmp, setTmp] = useState(null);

    const [items, setItems] = useState(null);

    const [skip, setSkip] = useState(0);

    const [execution, setExecution] = useState({
        progress: false,
        done: false
    });

    useEffect(() => {
        setTmp(null);

        setItems(null);

        setSkip(0);
    }, [criteria]);

    useEffect(() => {
        setTmp(null);

        setExecution((prev) => {
            return {
                ...prev,
                progress: false
            };
        });
    }, [items])

    useEffect(() => {
        setExecution((prev) => {
            return {
                ...prev,
                progress: true,
            }
        });

        onCollect(
            criteria.query,
            skip,
            criteria.limit
        )
            .then(({items, onEnrich}) => {
                setTmp(items);

                if (items.length === 0) {
                    setItems((prev) => {
                        if (prev === null) {
                            return items;
                        }

                        return prev.concat(items);
                    });

                    setExecution((prev) => {
                        return {
                            ...prev,
                            done: true
                        };
                    });

                    return;
                }

                if (!onEnrich) {
                    onEnrich = async (items) => {
                        return items;
                    }
                }

                onEnrich(items)
                    .then((items) => {
                        setItems((prev) => {
                            if (prev === null) {
                                return items;
                            }

                            return prev.concat(items);
                        });
                    })
                    .catch(console.error)
            })
    }, [skip, criteria]);

    if (tmp === null && items === null) {
        return <ui.layout>
            <ui.loading />
        </ui.layout>;
    }

    if (
        (tmp && tmp.length || 0) + (items && items.length || 0) === 0
    ) {
        return <ui.layout>
            <ui.empty />
        </ui.layout>;
    }

    return <ui.layout>
        {items && <ShowItems
            ui={{
                item: ui.item
            }}
            items={items}
        />}
        {tmp && <ShowItems
            ui={{
                item: ui.item
            }}
            items={tmp}
        />}

        {execution.progress === true
            ? <ui.loading />
            : (
                execution.done === false
                    ? <ui.more
                        onClick={() => {
                            setSkip((prev) => {
                                return prev + criteria.limit
                            });
                        }}
                    />
                    : null
            )
        }
    </ui.layout>;
}, (prev, next) => {
    return JSON.stringify(prev.criteria) === JSON.stringify(next.criteria);
});

LoaderList.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired,
        empty: PropTypes.func.isRequired,
        loading: PropTypes.oneOfType([
            PropTypes.func.isRequired,
            PropTypes.object.isRequired,
        ]),
        more: PropTypes.oneOfType([
            PropTypes.func.isRequired,
            PropTypes.object.isRequired,
        ]),
        item: PropTypes.func.isRequired,
    }).isRequired,
    criteria: PropTypes.shape({
        query: PropTypes.object,
        limit: PropTypes.number.isRequired,
    }).isRequired,
    onCollect: PropTypes.func.isRequired, // (query, skip, limit) => (items, onEnrich)
};

const ShowItems = memo(({ui, items}) => {
    return items.map((item, i) => {
        return <ui.item
            key={i}
            {...item}
            map={{
                i: i,
                length: items.length
            }}
        />
    })
}, (prev, next) => {
    return JSON.stringify(prev.items) === JSON.stringify(next.items);
});

export default LoaderList;