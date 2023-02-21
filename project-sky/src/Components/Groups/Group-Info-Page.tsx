import { useState, useLayoutEffect} from "react"
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Stack } from 'react-bootstrap'
import { useOutletContext } from 'react-router-dom';
import Groups from './groupsInterface'
import WeeklySchedule from "./weeklyscheduleInterface";
import IdleUser from "../../shared/IdleUser/IdleUser";

const GroupInfoPage = () => {

    const [group, setGroup] = useState<Groups>();
    const [weeklySchedule, setweeklySchedule] = useState([]);
    const [currentWeek, setcurrentWeek] = useState<Week>();
    const currentDate: Date = useOutletContext();
    const location = useLocation();
    var groupId: string = location.state.group.id

    const [loading, setLoading] = useState<boolean>(true);
    const [error ,setError] = useState([]);
    
    interface Week {
      week: number
    }

    IdleUser(); //Sets Idle Timer

    useLayoutEffect(() => {
        fetch(`https://localhost:7054/api/Group/GroupInfo/${currentDate}&${groupId}`)
            .then(response => response.json())
            .then(res => {
                setGroup(res)
                setLoading(false)
            })
            .catch(err => setError(err))
    }, [currentDate, groupId])

    useLayoutEffect(() => {
      fetch(`https://localhost:7054/api/Group/GetWeeklyGroupSchedule?date=${currentDate}&groupId=${groupId}`)
            .then(response => response.json())
            .then(res => {
                setweeklySchedule(res)
                setLoading(false)
            })
            .catch(err => setError(err))
    }, [currentDate, groupId])

    useLayoutEffect(() => {
      fetch(`https://localhost:7054/api/Group/GetCurrentWeek?date=${currentDate}`)
            .then(response => response.json())
            .then(res => {
                setcurrentWeek(res)
            })
            .catch(err => setError(err))
    }, [currentDate])

        return (
          <Container>
              <Stack gap={5}>
                <Row className="d-flex align-items-center justify-content-center" >
                    {
                      <>
                            {loading ?
                                <h1>Loading</h1> :
                                <Col className="room-info-col text-center pt-2 pb-2" md={6} key={groupId} >
                                    <h2><i>{group?.name}</i></h2>
                                    {
                                            (() => {
                                              if (group?.bookedRoom === null){
                                                return (
                                                  <h4>Unbooked</h4>
                                                )
                                              } else {
                                                return(
                                                  <h4>{group?.bookedRoom?.name}</h4>
                                                )
                                              }
                                              })()}
                                </Col>
                            }
                        </>
                    }
                </Row>
                <Row className="d-flex align-items-center justify-content-center">
                    {
                        <>
                            {loading ?
                                <h1>Loading</h1> :
                                <Col className="room-info-col text-center pt-3 pb-3" md={6}>
                                  <h2>Week {currentWeek?.week}</h2>
                                    {
                                      weeklySchedule.map((day: WeeklySchedule) => {
                                        return(
                                          <div className="d-flex justify-content-between align-items-center singleBookingUserDiv" key={day.date} >
                                            <h4 className="singleBookingUserList">{day.date} </h4> <h4>{day.room}</h4>
                                          </div>
                                          
                                        );
                                      })
                                    }
                                </Col>
                            }
                        </>
                    }
                </Row>
              </Stack>
          </Container>
        )
    }


export default GroupInfoPage;