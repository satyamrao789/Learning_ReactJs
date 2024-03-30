import './App.css';

function App() {
    let date = 31;
    let month = "March";
    return (
        <div>
            <h1 className='main'>Today is {date}  {month}</h1>
            <h1 style={{backgroundColor:"aqua",border: "2px solid yellow"}}>Hello I am App component</h1>
            <p>Hello I am a paragraph</p>
        </div>
    )
}

export default App;