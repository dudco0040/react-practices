import React from 'react';
import {SiteLayout} from "../../layout";

import * as styles from '../../assets/scss/component/About.scss';

export default function About() {
    return (
        <SiteLayout>
            <div className={styles.About}>
                <h2>kickscar 입니다.</h2>
            </div>
        </SiteLayout>
    );
}