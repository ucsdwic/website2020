import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import { Row, Col, Container } from "react-grid-system";

class Events extends React.Component {
  render() {
    return (
		<Container id="events-container">
			<Row id="events-title">
				<Col>
                    <h1>Events</h1>
                </Col>
			</Row>
			<Row>
				<Col>
				<FullCalendar
					plugins={[ dayGridPlugin, googleCalendarPlugin ]}
					googleCalendarApiKey= 'AIzaSyBP_Qc9_Csvfqt2p3gwDnSbMJw-zNlw5fU'
					events= {{
						googleCalendarId: 'wic.ucsd@gmail.com',
						className: 'wic-calendar'
					}}
					eventColor= "#ffffff"/>
				</Col>
			</Row>
		</Container>
    )
  }
}

export default Events