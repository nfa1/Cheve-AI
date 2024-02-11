import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleLogin } from 'react-google-login';
import './index.css';

function App() {
  const onSuccess = (response) => console.log('Login Success:', response.profileObj);
  const onFailure = (response) => console.log('Login Failed:', response);

  return (
    <div>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
      <div>
        <button>Bitcoin Lightning - Coming Soon!</button>
      </div>
      <div>
        <h2>Decentralized angel investor community for the people coming soon! Enter your email here to get on the waitlist!</h2>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Join Waitlist</button>
        </form>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

