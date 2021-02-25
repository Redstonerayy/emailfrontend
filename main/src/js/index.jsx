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
                <LeftSideBar />
            </React.Fragment>
         );
    }
}

/* main */
ReactDOM.render(
    <Main />,
    document.querySelector(".container")
);
