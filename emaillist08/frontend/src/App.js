import React, { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import '../assets/scss/App.scss';

function App() {
    const [emails, setEmails] = useState(null);

    const addEmail = async (email) => {
        console.log(email);

        // try{
        //     const response = await fetch('api', {
        //         method: 'get',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(email)
        //     });
            
        //     if(!response.ok) {
        //         throw new Error(`${response.status} ${response.statusText}`);
        //     }

        //     const json = await response.json();

        //     if(json.result !== 'success') {
        //         throw new Error(json.message);
        //     }

            
        //     setEmails([json.data, ...emails]); // 새 배열로 세팅~

        // } catch(err) {
        //     console.error(err);
        // }

    };

    const fetchEmails = async (keyword) => {
        try{
            const response = await fetch(`/api?kw=${keyword ? keyword : ''}`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: null
            });
            
            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }


            console.log(response);
            console.log(json.data);

            setEmails(json.data);
        } catch(err) {
            console.error(err);
        }

    }
    useEffect(() =>{
        fetchEmails();
    },[]);

    return (
        <div id={'App'}>
            <RegisterForm addEmail={addEmail}/>
            <SearchBar fetchEmails={fetchEmails}/>
            <Emaillist emails={emails} />
        </div>
    );
}

export default App;