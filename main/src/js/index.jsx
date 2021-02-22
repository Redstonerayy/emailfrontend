'use strict';

/* imports */

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "show": true }
    }
    render() { 
        return (
            <TopBar />
         );
    }
}

/* main */
ReactDOM.render(
    <Main />,
    document.querySelector(".container")
);
