// import logo from './logo.svg';
import './App.css';
import Button from './Component/button';
import List from './Component/List'

function App() {
  return (
    <div className="App App-header">
      <Button title="A" type="success"/>
      <Button title="B" type="warning"/>
      <Button title="C" type="error"/>
      <Button title="C" type="error" disabled={true} title="E"/>
      <img src="logo192.png"/>
      <List />
    </div>
  );
}

export default App;
