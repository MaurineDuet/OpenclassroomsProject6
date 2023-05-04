import { useState, useEffect } from 'react'

export function useFetch(json) {
      const [data, setData] = useState({})
      const [error, setError] = useState(false)

      useEffect(() => {
            async function fetchData() {
                  try {
                        const data = await fetch(json)
                        setData(data)
                  } catch (err) {
                        console.log(err)
                        setError(true)
                  }
                  fetchData()
            }
      })

      return { data, error }
}
