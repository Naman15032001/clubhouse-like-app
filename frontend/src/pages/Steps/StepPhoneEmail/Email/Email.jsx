import React from 'react'
import styles from './Email.module.css';
import Button from '../../../../components/shared/Button/Button';
import Card from '../../../../components/shared/Card/Card';

export const Email = () => {
    return (
        <Card title="Enter your  email" icon="email-emoji" >
            <div>
                <Button  text="Next" />
            </div>
        </Card>
    )
}
