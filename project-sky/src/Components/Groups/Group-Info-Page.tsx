import { useState, useLayoutEffect, useEffect, useContext } from "react"
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Stack } from 'react-bootstrap'
import { useOutletContext } from 'react-router-dom';
import Groups from './groupsInterface'
import WeeklySchedule from "./weeklyscheduleInterface";
import IdleUser from "../../shared/IdleUser/IdleUser";
import SmallerMap from "../../shared/Map/SmallerMap";
import { DateContext } from "../../shared/DateContext";

const GroupInfoPage = () => {

    const [group, setGroup] = useState<Groups>();
    const [weeklySchedule, setweeklySchedule] = useState([]);
    const [currentWeek, setcurrentWeek] = useState<Week>();
    const location = useLocation();
    var groupId: string = location.state.group.id

    const [error ,setError] = useState([]);
    const [roomName, setRoomName] = useState<string>();
    
    interface Week {
      week: number
      day:string
    }

    var {currentDate} = useContext(DateContext)

    IdleUser(); //Sets Idle Timer

    useLayoutEffect(() => {
      if(currentDate === "") {
        currentDate = new Date().toDateString();
      }
        fetch(`https://localhost:7054/api/Group/GroupInfo/${currentDate}&${groupId}`)
            .then(response => response.json())
            .then(res => {
                setGroup(res)
            })
            .catch(err => setError(err))
    }, [currentDate, groupId])


    useLayoutEffect(() => {
      if(currentDate === "") {
        currentDate =new Date().toDateString();
      }
      fetch(`https://localhost:7054/api/Group/GetWeeklyGroupSchedule?date=${currentDate}&groupId=${groupId}`)
            .then(response => response.json())
            .then(res => {
                setweeklySchedule(res)
            })
            .catch(err => setError(err))
    }, [currentDate, groupId])

    useEffect(() => {
        var roomName = group?.bookedRoom?.name.toLowerCase();
                setRoomName(roomName)
        }
      )

    const name = roomName!;



    useLayoutEffect(() => {
      if(currentDate === "") {
        currentDate =new Date().toDateString();
      }
      fetch(`https://localhost:7054/api/Group/GetCurrentWeekAndDay?date=${currentDate}`)
            .then(response => response.json())
            .then(res => {
                setcurrentWeek(res)
            })
            .catch(err => setError(err))
    }, [currentDate])

        return (
          <Container>
              <Stack gap={5}>
                <Row className="d-flex align-items-center justify-content-center">
                  <Col className="groupInfoCard text-center p-3" key={groupId} md={6}>
                        <h2>{group?.name}</h2>
                        {
                            (() => {
                              if (group?.bookedRoom === null){
                                return (
                                  <h5 className="UnbookedText"><i>Unbooked</i></h5>
                                )
                              } else {
                                return(
                                  <h5 className="BookedText">{group?.bookedRoom?.name}</h5>
                                )
                              }
                            })()}
                        <h5>{currentWeek?.day}</h5>
                    <SmallerMap name={name}/>
                  </Col>
                </Row>
                <Row className="d-flex align-items-center justify-content-center">
                        <Col className="room-info-col text-center pt-3 pb-3" md={6}>
                          <h2>Week {currentWeek?.week}</h2>
                            {
                              weeklySchedule.map((day: WeeklySchedule) => {
                                return(
                                  <div className="singleBookingUserDiv" key={day.date} >
                                    {
                            (() => {
                              if (day.room === "Unbooked"){
                                return (
                                  <span className="d-flex justify-content-between align-items-center"><h4 className="singleBookingUserList">{day.date} </h4><h4 className="UnbookedText" >{day.room}</h4></span>
                                )
                              } else {
                                return(
                                  <span className="d-flex justify-content-between align-items-center"><h4 className="singleBookingUserList">{day.date} </h4><h4 className="BookedText" >{day.room}</h4></span>
                                )
                              }
                            })()}
                                  </div>
                                );
                              })
                            }
                        </Col>
                        </Row>
              </Stack>
          </Container>
        )
    }


export default GroupInfoPage;