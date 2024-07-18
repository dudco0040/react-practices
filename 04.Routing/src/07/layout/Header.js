import React from 'react';
import '../assets/scss/layout/Header.scss';
import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>
                <NavLink to={'/'}>Header</NavLink>
            </h1>
            <ul>
                <li>
                    <NavLink to={'/user/login'}>로그인</NavLink>
                </li>
                <li>
                    <NavLink to={'/user/join'}>회원가입</NavLink>
                </li>
                <li>
                    <NavLink to={'/user/settings'}>정보관리</NavLink>
                </li>
            </ul>
        </header>
    );
}