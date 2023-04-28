import React from 'react';
import './App.css';

function App() {
  const [datas, setDatas] = React.useState([]);
  React.useEffect(() => {
    fetch("http://172.30.1.12/dev/data", {
      method: "GET",
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        setDatas(res.result);
      });
  }, []);




  return (
    <div className="App">
      {datas.map((data) => {
        return <div key={data.id}>{data.value}</div>
      })}
    </div>
  );
}

export default App;
