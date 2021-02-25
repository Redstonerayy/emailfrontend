'use strict';

class EMail extends Component {
    constructor(props) {
        super(props);
        this.state = { "show": true }
    }
    render() { 
        return ( 
            <div className="e-mail" id={this.props.id}>
                <input type="checkbox" name="is-selected" id=""/>
                <input type="checkbox" name="is-favourite" id=""/>
                
            </div>
         );
    }
}
 
export default EMail;

class EMailView extends Component {
    constructor(props) {
        super(props);
        this.state = { "show": true }
    }
    render() { 
        return ( 
            <div className="e-mail-view">
                <div className="e-mails">

                </div>
            </div>
         );
    }
}
