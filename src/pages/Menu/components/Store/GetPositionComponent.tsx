import { useEffect, useState } from 'react'

const GetPositionComponent = () => {
  const [_latitude, setLatitude] = useState<number | null>(null)
  const [_longitude, setLongitude] = useState<number | null>(null)
  const [locationObtained, setLocationObtained] = useState<boolean>(false)

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
          setLocationObtained(true)
        },
        (error) => {
          console.error('Error getting geolocation:', error)
          setLocationObtained(false)
        }
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
      setLocationObtained(false)
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return locationObtained
}

export default GetPositionComponent
