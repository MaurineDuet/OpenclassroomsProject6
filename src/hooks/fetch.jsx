import { useState, useEffect } from 'react'

/* Mise en place d'une fonction fetch générique */

export function useFetch(url) {
      const [data, setData] = useState(null)
      const [error, setError] = useState(false)

      useEffect(() => {
            async function fetchData() {
                  try {
                    const response = await fetch(url);
                    const data = await response.json();
                    setData(data);
                  } catch (err) {
                    console.error(err);
                    setError(true);
                  }
                }
            
                fetchData();
              }, [url]);

      return { data, error }
}
