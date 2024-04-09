import React from 'react';

function GoogleLogin() {
    const handleGoogleLogin = () => {
        window.location.href = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com';
    };

    return (
        <div>
            <button onClick={handleGoogleLogin}>Google Login</button>
        </div>
    );
}

export default GoogleLogin;
