const App = () => {
    const buttonText = "Click Me"
    return (
        <div>
            <label className="label" htmlFor="name">Enter Name </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white'}} >
                {buttonText}
            </button>
        </div>
    );
};

export default App;