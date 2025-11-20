import React, { useState } from 'react'
import { login } from '../authApi';

function useHandleLoginSubmit() {
    const [loading, setLoading] = useState(false)

    const submitLogin = async (email, password) => {
        setLoading(true);

        try {
            await login({ email, password });
        } catch (error) {
            console.error("Login Error:", error)
        } finally {
            setLoading(false)
        }

    }



    return { submitLogin, loading }
}

export default useHandleLoginSubmit