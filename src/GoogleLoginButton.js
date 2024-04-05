import React from 'react';

const GoogleLoginButton = () => {
  return (
    <div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div style={{ width: '156.77px', height: '24px', margin: '0 auto', background: 'url(Logo11.png)' }}></div>
      <a href="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com" style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none' }}>Sign Up with Google</a>
    </div>
  );
};

export default GoogleLoginButton;
