import axios from 'axios'
import { useEffect, useState } from 'react'

import './App.css'
import Container from './components/Container'
import Error from './components/Error'
import Loader from './components/Loader'
import {
  PositionCoordsType,
  StatusType,
  SuccessType,
  WeatherDataType
} from './types/Types.type'

function App() {
  const [posCoords, setPosCoords] = useState<PositionCoordsType | null>(null)
  const [status, setStatus] = useState<StatusType>('loading')
  const [err, setErr] = useState<string>('')
  const [weatherData, setWeatherData] = useState<WeatherDataType>(
    {} as WeatherDataType
  )

  function success({ coords }: SuccessType) {
    setPosCoords({ lat: coords.latitude, lng: coords.longitude })
  }

  function error(err: { code: number; message: string }) {
    setErr(err.message)
    setStatus('error')
  }

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true
    })
  }, [])

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const fetchWeatherData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${posCoords?.lat},${posCoords?.lng}&aqi=yes`
        )
        setWeatherData(data)
        setStatus('success')
      } catch (error) {
        console.error(error)
        setErr('Problem fetching data! Try again later')
        setStatus('error')
      }
    }

    if (posCoords) fetchWeatherData()
  }, [posCoords])

  if (status !== 'success') document.body.style.padding = '0'
  else document.body.style.padding = ''

  return (
    <>
      {status === 'loading' && <Loader />}
      {status === 'success' && <Container weatherData={weatherData} />}
      {status === 'error' && <Error err={err} />}
    </>
  )
}

export default App
