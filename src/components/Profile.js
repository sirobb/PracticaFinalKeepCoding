import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
    const { user, isAuthenticated, isLoading} = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>
    }

    return(
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>Bienvenido a WallaFront ! </h2>
                <p>Usuario: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>
        )

    )   
    
}