import React, {useEffect, useState} from 'react';
import {CustomersService} from "../services";

const Home = () => {
  const [result, setResult] = useState("");
  useEffect(() => {
    CustomersService.test().then((resp) => {
      setResult(resp.data.message);
    });
  }, []);

  return (
    <div>
      <h1>Hello World!</h1>
      <h3>{result}</h3>
    </div>
  )
};

export default Home;