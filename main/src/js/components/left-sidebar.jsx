'use strict';

class EmailTag extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "show": true, "active": false }
    }

    toggleactive(ev){;
        if(ev.target.tagName != "SPAN"){
            document.getElementById(this.props.tagname).children[0].src = 
            (this.state.active ? "img/starborderblack.png" : "img/staryellow.png");
            this.state.active = (this.state.active ? false : true);
        }
    }

    rename(){

    }

    render() { 
        return ( 
            <div className="tag" id={this.props.tagname} onClick={(ev) => this.toggleactive(ev)}>
                <img className="tag-icon" src={this.props.icon} alt=""/>
                <span onClick={(ev) => {this.rename(ev)}}>{this.props.tagname}</span>
            </div>
        );
    }
}
 

class LeftSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "show": true, "tags": true };
    }

    toggletags(){
        if(this.state.tags){
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
                <div className="e-mail-section">
                    <div className="write-email"><span>Write</span></div>
                    <div className="e-mail-menu">
                        <div className="tags">
                            <div className="tag-menu" onClick={(ev) => {this.toggletags()}}>
                                <img className="tag-icon" src="img/blackfilledstar.png" alt=""/>
                                <span>Tags</span>
                            </div>
                            <div className="tags-list">
                                <EmailTag tagname="Marked" icon="img/starborderblack.png"/>
                                <EmailTag tagname="Important" icon="img/starborderblack.png"/>
                                <EmailTag tagname="Nice" icon="img/starborderblack.png"/>
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
                <hr className="meet-seperator"/>
                <div className="meet">
                    <p className="meet-headline">Meet</p>
                    <p>New Conference</p>
                    <p>Join Conference</p>
                </div>
            </div>
        );
    }
}