import React, { Component } from 'react';

class MeetingPage extends Component {

    constructor() {
        super();

        this.state = {
            meetings: []
        }

        this.buildCard = this.buildCard.bind(this);
    }

    componentDidMount() {
        this.setState({ 
            meetings: [{"id":"1","meetingDate":"17-02-2017","venue":"Peterborough","category":"DG","status":"On","country":"UK","authority":"BA","going":"Good to firm","serviceType":"Full","numerOfRaces":11,"event":{"progress":{"name":"Going In Traps","code":"E"},"firstEventTime":"14:08","lastEventTime":"18:11","eventTimes":["14:08","14:27","14:47","15:07","15:28","15:48","16:08","16:27","16:47","17:07","17:22","17:38","17:56","18:11"]}}]
        });
    }

    buildCard(meeting) {
        return (
            <div key={meeting.id} className="uk-card uk-card-default uk-card-small uk-card-body">
                <div className="uk-card-badge uk-label">{meeting.event.progress.name}</div>
                <div className="uk-card-title">{meeting.venue}</div>
                <p>
                    body
                </p>
                <div className="uk-card-footer">
                    
                </div>
            </div>
        );
    }

    render() {

        var abc = this.state.meetings.length;

        return (
            <div>
                <p>found : { abc } meetings</p>
                {this.state.meetings.map(meeting => this.buildCard(meeting))}
            </div>
        );
    }
}

export default MeetingPage;

/*
{meeting.event.eventTimes.map(eventTime => <span key={eventTime} className="uk-label uk-margin-small-right">{eventTime}</span>)}
*/