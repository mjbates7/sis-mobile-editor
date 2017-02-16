import React, { Component } from 'react';

class MeetingPage extends Component {

    constructor() {
        super();

        this.state = {
            meetings: []
        }
    }

    componentDidMount() {
        this.setState({ meetings: [{"id":"1","startDate":1487280166,"venue":"venue 1","category":"category 1","name":"name 1","status":"status 1","country":"country 1"},{"id":"2","startDate":1487280106,"venue":"venue 2","category":"category 2","name":"name 2","status":"status 2","country":"country 2"},{"id":"3","startDate":1487280046,"venue":"venue 3","category":"category 3","name":"name 3","status":"status 3","country":"country 3"},{"id":"4","startDate":1487279986,"venue":"venue 4","category":"category 4","name":"name 4","status":"status 4","country":"country 4"},{"id":"5","startDate":1487279926,"venue":"venue 5","category":"category 5","name":"name 5","status":"status 5","country":"country 5"},{"id":"6","startDate":1487279866,"venue":"venue 6","category":"category 6","name":"name 6","status":"status 6","country":"country 6"},{"id":"7","startDate":1487279806,"venue":"venue 7","category":"category 7","name":"name 7","status":"status 7","country":"country 7"},{"id":"8","startDate":1487279746,"venue":"venue 8","category":"category 8","name":"name 8","status":"status 8","country":"country 8"},{"id":"9","startDate":1487279686,"venue":"venue 9","category":"category 9","name":"name 9","status":"status 9","country":"country 9"},{"id":"10","startDate":1487279626,"venue":"venue 10","category":"category 10","name":"name 10","status":"status 10","country":"country 10"},{"id":"11","startDate":1487279566,"venue":"venue 11","category":"category 11","name":"name 11","status":"status 11","country":"country 11"},{"id":"12","startDate":1487279506,"venue":"venue 12","category":"category 12","name":"name 12","status":"status 12","country":"country 12"},{"id":"13","startDate":1487279446,"venue":"venue 13","category":"category 13","name":"name 13","status":"status 13","country":"country 13"},{"id":"14","startDate":1487279386,"venue":"venue 14","category":"category 14","name":"name 14","status":"status 14","country":"country 14"},{"id":"15","startDate":1487279326,"venue":"venue 15","category":"category 15","name":"name 15","status":"status 15","country":"country 15"},{"id":"16","startDate":1487279266,"venue":"venue 16","category":"category 16","name":"name 16","status":"status 16","country":"country 16"},{"id":"17","startDate":1487279206,"venue":"venue 17","category":"category 17","name":"name 17","status":"status 17","country":"country 17"},{"id":"18","startDate":1487279146,"venue":"venue 18","category":"category 18","name":"name 18","status":"status 18","country":"country 18"},{"id":"19","startDate":1487279086,"venue":"venue 19","category":"category 19","name":"name 19","status":"status 19","country":"country 19"},{"id":"20","startDate":1487279026,"venue":"venue 20","category":"category 20","name":"name 20","status":"status 20","country":"country 20"}]});
    }

    render() {
        return (
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
            </table>
        );
    }
}

export default MeetingPage;