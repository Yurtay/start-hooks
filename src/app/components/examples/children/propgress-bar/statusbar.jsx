import React, { useState } from "react";
import SatutusItem from "./status-item";
import "./styles.css";

const Statusbar = ({ children, value, onChange }) => {
    const countChildren = React.Children.count(children);

    if (!countChildren) {
        return <div>Нет элементов</div>;
    }

    return (
        <div>
            <div className="wrapper">
                <ul className="step-progress">
                    {React.Children.map(children, (child) => {
                        if (child.type === SatutusItem) {
                            return React.cloneElement(child, {
                                isDone: child.props.value <= value,
                                onClick: onChange
                            });
                        }
                        return null;
                    })}
                </ul>
            </div>
        </div>
    );
};

const SomeComponent = () => {
    const [value, setValue] = useState(1);

    const handleChangeValue = (nextValue) => {
        setValue(nextValue);
    };

    return (
        <Statusbar value={value} onChange={handleChangeValue}>
            <SatutusItem value={1}>Шаг 1</SatutusItem>
            <SatutusItem value={2}>Шаг 2</SatutusItem>
            <SatutusItem value={3}>Шаг 3</SatutusItem>
            <SatutusItem value={4}>Шаг 4</SatutusItem>
            <SatutusItem value={5}>Шаг 5</SatutusItem>
        </Statusbar>
    );
};

export default SomeComponent;
