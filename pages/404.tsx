import React from 'react';
import Link from "next/link";

const NotFound = () => {
    return (
        <>
           <h1>Erreur, page introuvable :/</h1>
            <Link href={"/"}>Accueil</Link>
            <a
                href="/api/auth/login"
                className="btn btn-primary btn-block"
                tabIndex={0}>
                Log in
            </a>
        </>
    );
};

export default NotFound;