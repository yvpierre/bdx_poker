import React, {useState} from 'react';
import Link from 'next/link';
import styles from '../../styles/Members.module.css'

const Index = () => {

    const [nomUser, setNomUser] = useState('');

    function checkIpt(){
        let ipt = document.querySelector(".ipt")
        // @ts-ignore
        if(!ipt.value){
            alert("Faut rentrer un nom frérot")
            window.location.reload();
        }

    }

    return (
        <div className={styles.body}>
            <h1 >Le blaze du chat ?</h1>
            <input
                name={"iptNom"}
                className={"ipt"}
                type={"text"}
                value={nomUser}
                onChange={e => {setNomUser(e.currentTarget.value)}}
            />
            <Link
                  href={{
                pathname: "/members/[user]",
                query: {
                    nom: nomUser
                }
            }} as = {`/members/${nomUser}`} onClick={checkIpt}
              className={styles.btnSuiv}
            >Valider</Link>
        </div>
    );
};

export default Index;