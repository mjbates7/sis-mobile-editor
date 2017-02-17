import React, { Component } from 'react';

class MeetingPage extends Component {

    constructor() {
        super();

        this.state = {
            meetings: []
        }
    }

    componentDidMount() {
        this.setState({ meetings: [{"id":"1","meetingDate":"17-02-2017","venue":"Crayford","category":"DG","status":"On","country":"UK","authority":"BA","going":"Good to firm","serviceType":"Full","numerOfRaces":11,"firstEventTime":"14:08","lastEventTime":"18:11","eventTimes":["14:08","14:27","14:47","15:07","15:28","15:48","16:08","16:27","16:47","17:07","17:22","17:38","17:56","18:11"]}]});
    }

    render() {

        var abc = this.state.meetings.length;

        return (
            <div>
                <p>found : { abc } meetings</p>
                <div className="uk-card uk-card-default uk-card-small uk-card-body">
                    <div className="uk-card-title">title</div>
                </div>
                <div className="uk-card uk-card-default uk-card-small uk-card-body">
                    <div className="uk-card-title">title</div>
                </div>
            </div>
        );
    }
}

export default MeetingPage;

/*
<table className="uk-table">
                <caption>Dog Meetings - {this.state.meetings.length}</caption>
                <thead>
                    <tr>
                        <th>Venue</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {this.state.meetings.map(meeting => {
                    return (
                        <tr>
                            <td>{meeting.venue}</td>
                        </tr>)
                    })}
                </tbody>
            </table>*/