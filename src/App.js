import { useEffect, useState } from 'react';
import './App.css';
import useFetch from './useFetch';
import User from './User';

function App() {
  const {loading, data} = useFetch();
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (loading) return ;
    setUsers(data[page])
  }, [page, loading] )

const handleNext = () =>{
  let newPage = page +1;
  if(newPage > data.length - 1){
    newPage = 0;
  }
  setPage(newPage);
}
const handlePrev = () =>{
  let newPage = page -1;
  if(newPage < 0){
    newPage = data.length - 1;
  }
  setPage(newPage);
}
  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'Loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {users.map((user) => {
            return <User key={user.id} {...user} />
          })}
        </div>
        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={handlePrev}>prev</button>
            {data.map((item, index) => {
            return   <button className={`${index === page ? 'page-btn active-btn': 'page-btn'}`} onClick={() => setPage(index)}>{index +1}</button>
            })}
            <button className='next-btn' onClick={handleNext} >next</button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
