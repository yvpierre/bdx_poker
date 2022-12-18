import React from 'react';
import Link from "next/link";

const NotFound = () => {
    return (
        <>
           <h1>Erreur, page introuvable :/</h1>
            <Link href={"/"}>Accueil</Link>
        </>
    );
};

export default NotFound;