import { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
function App() {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const getData = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=100');
    const data = await res.json();
    if (data && data.products) {
      setData(data.products);
    }
  };

  const handlePage = (i) => {
    setPage(i);
  };
  useEffect(() => {
    getData();
  }, [data]);
  return (
    <div>
      <div class='flex flex-row flex-wrap justify-between mx-5'>
        {/* <div class='md:basis-1/6 h-screen'>
        <Sidebar />
      </div>
      <div class='md:basis-10/12 '></div>
      <div class='md:basis-1/6 '></div> */}
      </div>
      <div class='text-center'>
        <div class='flex items-center justify-center space-x-2'>
          <a href='#' class='px-3 py-1 rounded-lg text-2xl text-white'>
            ⬅️
          </a>

          {data && data.length > 0
            ? [...Array(data.length / 10)].map((_, i) => {
                return (
                  <a
                    onClick={() => handlePage(i + 1)}
                    href='#'
                    class='px-3 py-1 rounded-lg bg-[#0F64A2] text-white'>
                    <span>{i + 1}</span>{' '}
                  </a>
                );
              })
            : ''}

          <a href='#' class='px-3 py-1 rounded-lg  text-2xl text-white'>
            ➡️
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
