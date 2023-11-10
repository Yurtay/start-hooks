import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");

    const tooggleOtherState = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };

    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>render count: {prevState.current}</p>
            <p>current count: {otherState}</p>
            <button className="btn btn-primary" onClick={tooggleOtherState}>
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
