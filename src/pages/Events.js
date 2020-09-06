import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import { Row, Col, Container } from "react-grid-system";
import Button from "../components/Button";
import "../styles/Events.scss";

class Events extends React.Component {
  render() {
    return (
		<Container id="events-page">
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
			<Row justify="center" align="center">
				<Col>
					<Button
						type="primary"
						text="Add it to your Calendar"
						toLink="https://calendar.google.com/calendar/u/3?cid=d2ljLnVjc2RAZ21haWwuY29t"
					/>
				</Col>
          </Row>
		</Container>
    )
  }
}

export default Events