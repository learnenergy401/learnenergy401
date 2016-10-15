import React, { Component } from 'react'
import { Textfield,Grid,Cell,Card,CardText, CardActions, Button } from 'react-mdl';

var componentStyle = {
    margin: 'auto',
}

var formStyle = {
    marginTop: '5%'
}

class ComponentLogin extends Component {

    loginSubmit() {
        var email = this.refs.email.value;
        var pw    = this.refs.pw.value;
        var self  = this;

        firebase.auth().signInWithEmailAndPassword(email, pw).then(function(result) {
            var location = self.props.location
            if (location.state && location.state.nextPathname) {
                self.context.router.replace(location.state.nextPathname)
            } else {
                self.context.router.replace('/home')
            }
            // User signed in!
            console.log('User signed in!');
            // var uid = result.user.uid;
        });
    }

    render() {
        return (
                <div className="android-content mdl-layout__content">
                    <a name="top" />
                    <div style={{width: '80%', margin: 'auto'}}>
                        <form style={formStyle} onSubmit={this.loginSubmit}>
                            <CardText style={componentStyle}>
                                <Textfield className="form-control" ref="email" placeholder="Email" id="email"/>
                            </CardText>
                            <CardText style={componentStyle}>        
                                <Textfield ref="pw" type="password" className="form-control" placeholder="Password" id="password"/>
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