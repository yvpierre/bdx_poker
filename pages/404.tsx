import React from 'react';
import Link from "next/link";

const NotFound = () => {
    return (
        <div>
           <h1>Erreur, page introuvable :/</h1>
            <Link href={"/"}>Accueil</Link>
        </div>
    );
};

export default NotFound;