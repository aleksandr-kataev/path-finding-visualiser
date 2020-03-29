import React from 'react';
import axios from 'axios';

export function App(props) {
  const onClick = () => {
    axios({
      method: 'post',
      url: '/bubbleSort',
      headers: {'Content-Type': 'application/json'},
      data: {
        start: 'start',
        end: 'end',
      },
    }).then((res) => {
      alert(res.data.args1);
      alert(res.data.args2);
    });
  };

  return <button onClick={onClick}>click</button>;
}

export default App;
