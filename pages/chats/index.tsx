import React, {useState} from 'react';
import Link from 'next/link';
import styles from '../../styles/Members.module.css'

const Index = () => {

    const [nomChat, setNomChat] = useState('');

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
                value={nomChat}
                onChange={e => {setNomChat(e.currentTarget.value)}}
            />
            <Link
                  href={{
                pathname: "/chats/[nomChat]",
                query: {
                    nom: nomChat
                }
            }} as = {`/chats/${nomChat}`} onClick={checkIpt}
              className={styles.btnSuiv}
            >Valider</Link>
        </div>
    );
};

export default Index;