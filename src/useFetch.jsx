import  { useEffect } from 'react';
import { useState } from 'react';
import utils from './utils';

const url = "https://api.github.com/users?per_page=100";


 const useFetch = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
  
    const getProducts = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setData(utils(data))
      setLoading(false)
    }
  
    useEffect(() => {
      getProducts()
    }, [])
    return { loading, data }
  }

  export default useFetch;