function Child({ message }) {
    return <div>Ajay said : {message}</div>;
}

function Parent({ message }) {
    return <Child message={message} />;
}

function GrandParent() {
    const message = "Hello from GrandParent";
    return <Parent message={message} />;
}

export default GrandParent;