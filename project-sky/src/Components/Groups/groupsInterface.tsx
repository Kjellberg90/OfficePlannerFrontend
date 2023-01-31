interface BookedRoom {
  id: number,
  name: string,
  room: number,
  bookedBy: number
}

interface Groups {
  id: number,
  name: string,
  members: number,
  bookedRoom?: BookedRoom;
}
export default Groups;
