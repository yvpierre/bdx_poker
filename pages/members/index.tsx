import React, {useState} from 'react';
import Link from 'next/link';

const Index = () => {

    const [nomUser, setNomUser] = useState('');

    return (
        <div>
            <h1>Ton nom ?</h1>
            <input
                className={"btn"}
                type={"text"}
                value={nomUser}
                onChange={e => {setNomUser(e.currentTarget.value)}}
            />
            <Link href={{
                pathname: "/members/[user]",
                query: {
                    nom: nomUser
                }
            }} as = {`/members/${nomUser}`}
            >Valider</Link>
        </div>
    );
};

export default Index;