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
                    <span className="company-name">AMail</span>
                </div>
                <div className="e-mail-searchbar-container">
                    <div className="e-mail-searchbar">
                        <img className="search-lupe" src="img/search.svg" alt=""/>
                        <input className="search-textfield" type="text"/>
                        <img className="advanced-search" src="img/caret-down-fill.svg" alt=""/>
                    </div>
                    
                </div>
                <div className="right-menu">
                    <div className="get-help topbar-icon">
                        <img src="img/question-circle.svg" alt=""/>
                    </div>
                    <div className="general-settings topbar-icon">
                        <img src="img/settings.png" alt=""/>
                    </div>
                    <div className="account-settings topbar-icon">
                        <img src="img/logo.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}
