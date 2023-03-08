import axios from 'axios';

import { useState, useEffect } from 'react';

const baseURL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
function Currencies() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  let eur = post[31].rate;
  let usd = post[24].rate;

  return (
    <div className="currencies">
      <div className="currencies__wrapper">
        <span>&euro;{eur}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp; ${usd}</span>
      </div>
    </div>
  );
}

export default Currencies;
