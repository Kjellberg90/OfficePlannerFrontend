import axios from "axios"

export const fetchRooms = (currentDate: string) => {
  var result = axios.get(`https://localhost:7054/api/Room/get-rooms-info?date=${currentDate}`)
    .then((response) => {
      return response.data
    })
    .catch(err => console.log(err))
  
  return result
}

export const fetchSingleBookings = (currentDate: string, roomId: number) => {
  var result = axios.get(`https://localhost:7054/api/Booking/GetSingleBookings?date=${currentDate}&roomId=${roomId}`)
    .then((response) => {
      return response.data
    })
    .catch(err => console.log(err))
  
  return result
}

export const fetchDeleteSingleBookings = (data: any) => {
  const userData = data
  var result = axios.delete(`https://localhost:7054/api/Booking/DeleteSingleBooking`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    data: userData
  })
    .catch(err => console.log(err))
  
    return result
}

export const fetchPostSingleBookings = (data: any) => {
  const userData = data
  var result = axios.post(`https://localhost:7054/api/Booking/SingleBooking`, userData, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  )  
    return result
}