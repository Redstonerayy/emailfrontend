'use strict';

class EmailTag extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "show": true }
    }
    render() { 
        return ( 
            <div className="tag" id={this.props.tagname}>
                <img className="tag-icon" src={this.props.icon} alt=""/>
                <span>{this.props.tagname}</span>
            </div>
        );
    }
}
 

class LeftSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "show": true, "tags": true };
        console.log(this.state.tags);
        //binds
        this.toggletags = this.toggletags.bind(this);  
    }

    toggletags(){
        if(this.state.tags){
            console.log(this.state.tags);
            document.querySelector(".tags-list").style.display = "none";
            this.state.tags = false;
        } else {
            document.querySelector(".tags-list").style.display = "block";
            this.state.tags = true;
        }
    }

    render() { 
        return (  
            <div className="left-sidebar">
                <div className="e-mail">
                    <div className="write-email"><span>Write</span></div>
                    <hr className="seperator-email-menu"/>
                    <div className="e-mail-menu">
                        <div className="tags">
                            <div className="tag-menu" onClick={this.toggletags}>
                                <img className="tag-icon" src="img/blackfilledstar.png" alt=""/>
                                <span>Tags</span>
                            </div>
                            <div className="tags-list">
                                <EmailTag tagname="Marked" icon="img/blackfilledstar.png"/>
                                <EmailTag tagname="Marked" icon="img/blackfilledstar.png"/>
                                <EmailTag tagname="Marked" icon="img/blackfilledstar.png"/>
                            </div> 
                        </div>
                        <div className="send menu-point">
                            <img src="img/send.png" alt=""/>
                            <span>Send</span>
                        </div>
                        <div className="drafts menu-point">
                            <img src="img/file.png" alt=""/>
                            <span>Drafts</span>
                        </div>
                        <div className="planned menu-point">
                            <img src="img/clock.png" alt=""/>
                            <span>Planned</span>
                        </div>
                        <div className="spam menu-point">
                            <img src="img/spam.png" alt=""/>
                            <span>Spam</span>
                        </div>
                    </div>
                </div>
                <div className="meet">

                </div>
            </div>
        );
    }
}