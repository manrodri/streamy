import React, {Component} from  'react'

// const clientId = '342415811707-musg0boqus3v2rtc3n9fokm43jlg04mg.apps.googleusercontent.com'

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', ()=> {
            window.gapi.client.init({
                clientId: '342415811707-musg0boqus3v2rtc3n9fokm43jlg04mg.apps.googleusercontent.com',
                scope: 'email'
            })
        });

    }

    render() {
        return (
            <div>
                Google Auth
            </div>
        )
    }

}

export default GoogleAuth;