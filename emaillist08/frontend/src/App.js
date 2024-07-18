import React, { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import '../assets/scss/App.scss';

function App() {
    const [emails, setEmails] = useState(null);

    const addEmail = async (email) => {
        console.log("insert: ", email);

        try{
            const response = await fetch('api', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(email)
            });
            
            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }

            
            setEmails([json.data, ...emails]); // 새 배열로 세팅~

        } catch(err) {
            console.error(err);
        }

    };


    const deleteEmail = async (no) => {
        console.log("delete: ", no);

        try{
            const response = await fetch(`api/${no}`, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            
            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }

            
            // 이메일 목록에서 삭제된 이메일을 제거
            setEmails(emails.filter(email => email.no !== no));
            

        } catch(err) {
            console.error(err);
        }

       };

    const fetchEmails = async (keyword) => {
        try{
            const response = await fetch(`/api?kw=${keyword ? keyword : ''}`, {  // 검색(keyword) & 불러오기 
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

    };

    useEffect(() =>{
        fetchEmails();
    },[]);

    return (
        <div id={'App'}>
            <RegisterForm addEmail={addEmail}/>
            <SearchBar fetchEmails={fetchEmails}/>
            <Emaillist emails={emails} deleteEmail={deleteEmail}/>
        </div>
    );
}

export default App;