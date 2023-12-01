import React from "react";
import CollapseWrapper from "../common/collapse";
import SomeComponent from "../examples/children/propgress-bar/statusbar";
const ChildrenExercise = () => {
    return (
        <>
            <SomeComponent />

            <CollapseWrapper title="Упражнение">
                <p className="mt-3">
                    У вас есть компоненты Списка. Вам необходимо к каждому из
                    них добавить порядковый номер, относительно того, как они
                    располагаются на странице. Вы можете использовать как{" "}
                    <code>React.Children.map</code> так и{" "}
                    <code>React.Children.toArray</code>
                </p>
                <ComponentList>
                    <Component />
                    <Component />
                    <Component />
                </ComponentList>
            </CollapseWrapper>
        </>
    );
};
const ComponentList = ({ children }) => {
    const arrayOfChildren = React.Children.toArray(children);
    return React.Children.map(arrayOfChildren, (child) => {
        console.log(child);
        return React.cloneElement(child, {
            ...child.props,
            num: +child.key.replace(".", "") + 1
        });
    });
};

const Component = ({ num }) => {
    return <div>{num} Компонент списка</div>;
};

export default ChildrenExercise;
