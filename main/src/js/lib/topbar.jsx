'use strict';
 
class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "show": true };  
    }
    render() { 
        return (  
            <div className="topbar">
                <div className="left-menu">
                    <img className="logo" src="" alt=""/>
                    <span className="company-name"></span>
                </div>
                <div className="e-mail-searchbar">
                    <img className="search-lupe" src="img/search.svg" alt=""/>
                    <input type="text"/>
                    <img className="advanced-search" src="" alt=""/>
                </div>
                <div className="right-menu">
                    <div className="get-help">

                    </div>
                    <div className="general-settings">

                    </div>
                    <div className="account-settings">

                    </div>
                </div>
            </div>
        );
    }
}
