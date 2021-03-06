'use strict';

/* imports */

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "show": true }
    }
    render() { 
        return (
            <React.Fragment>
                <TopBar />
                <div className="mid-content">
                    <LeftSideBar />
                    <EMailView />
                </div>
            </React.Fragment>
         );
    }
}

/* main */
ReactDOM.render(
    <Main />,
    document.querySelector(".container")
);
