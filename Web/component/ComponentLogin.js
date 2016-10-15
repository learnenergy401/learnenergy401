import React, { Component } from 'react'
import { Textfield,Grid,Cell,Card,CardText, CardActions, Button } from 'react-mdl';
import FirebaseTools from './Firebase.js'

var componentStyle = {
    margin: 'auto',
}

var formStyle = {
    marginTop: '5%'
}

class ComponentLogin extends Component {

    loginSubmit() {
        var email = document.getElementById("email").value;
        var pw = document.getElementById("pw").value;

        FirebaseTools.loginUser({email, pw});
    }

    render() {
        return (
                <div className="android-content mdl-layout__content">
                    <a name="top" />
                    <div style={{width: '80%', margin: 'auto'}}>
                        <form style={formStyle} onSubmit={this.loginSubmit}>
                            <CardText style={componentStyle}>
                                <Textfield label="email" className="form-control" ref="email" placeholder="Email" id="email"/>
                            </CardText>
                            <CardText style={componentStyle}>        
                                <Textfield label="password" ref="pw" type="password" className="form-control" placeholder="Password" id="pw"/>
                            </CardText>
                            {/*errors*/}
                            <CardActions style={componentStyle}>
                                <Button accent ripple type="submit" className="mdl-color-text--indigo btn btn-primary">Login</Button>
                            </CardActions>
                        </form>
                    </div>
                </div>
        );
    }

};

export default ComponentLogin