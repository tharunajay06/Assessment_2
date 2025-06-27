function ChildComponent(props) {
    return <h2>{props.message}</h2>;
}

function ParentComponent() {
    return (
        <div>
            <ChildComponent message="Good morning" />
        </div>
    );
}

export default ParentComponent;