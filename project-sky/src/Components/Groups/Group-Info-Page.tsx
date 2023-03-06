import { useState, useLayoutEffect, useEffect, useContext } from "react"
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Stack } from 'react-bootstrap'
import Groups from './groupsInterface'
import WeeklySchedule from "./weeklyscheduleInterface";
import IdleUser from "../../shared/IdleUser/IdleUser";
import SmallerMap from "../../shared/Map/SmallerMap";
import { DateContext } from "../../shared/DateContext";
import { fetchGroupInfo, fetchWeekAndDay, fetchWeeklyGroupSchedule } from "../../shared/Fetch/GroupFetches";
import { LoadingSpinner } from "../../shared/Spinner/LoadingSpinner";

const GroupInfoPage = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [group, setGroup] = useState<Groups>();
    const [weeklySchedule, setweeklySchedule] = useState([]);
    const [currentWeek, setcurrentWeek] = useState<Week>();
    const location = useLocation();
    var groupId: string = location.state.group.id

    const [roomName, setRoomName] = useState<string>();
    
    interface Week {
      week: number
      day:string
    }

    var {currentDate} = useContext(DateContext)

    IdleUser(); //Sets Idle Timer

    useEffect(() => {
      var roomName = group?.bookedRoom?.name.toLowerCase();
              setRoomName(roomName)      
    })
    
    async function getGroupInfo(currentDate: string, groupId: string) {
      setIsLoading(true);
      const response: any = await fetchGroupInfo(currentDate, groupId)
      setGroup(response);
      setTimeout(() => {
        setIsLoading(false);
      }, 500)
    }

    useEffect(() => {
      getGroupInfo(currentDate, groupId)
    }, [currentDate])

    async function getWeeklyRoomSchedule(currentDate: string, groupId: string) {
      const response: any = await fetchWeeklyGroupSchedule(currentDate, groupId)
      setweeklySchedule(response)
    }

    useEffect(() => {
      getWeeklyRoomSchedule(currentDate, groupId)
    }, [currentDate])

    
    async function getWeekAndDay(currentDate: string) {
      const response: any = await fetchWeekAndDay(currentDate)
      setcurrentWeek(response)
    }
    
    useEffect(() => {
      getWeekAndDay(currentDate)
    }, [currentDate])
    
   
    const name = roomName!;
        return (

          <Container>
            {isLoading ? (
            <LoadingSpinner isLoading={isLoading} message="Please wait. . ."/>
            ) : (
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
            )}
          </Container>
        )
    }


export default GroupInfoPage;