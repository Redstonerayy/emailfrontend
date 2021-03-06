'use strict';

class EMail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "show": true }
    }
    render() { 
        return ( 
            <div className="e-mail" id={this.props.id}>
                <div className="checkbox-container">
                    <input type="checkbox" className="checkbox-checkbox" id={this.props.id + "checkbox"}></input>
                    <label className="checkbox-label" htmlFor={this.props.id + "checkbox"}></label>
                </div>
                <span className="sender">Sender</span>
                <span className="subject">Betreff</span>
            </div>
         );
    }
}


class EMailView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "show": true }
    }
    render() { 
        return ( 
            <div className="e-mail-view">
                <div className="e-mails">
                    <EMail id="1"/>
                    <EMail id="2"/>
                </div>
            </div>
         );
    }
}
