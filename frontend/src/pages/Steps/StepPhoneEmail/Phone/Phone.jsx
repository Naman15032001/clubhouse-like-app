import React from 'react';
import styles from './Phone.module.css';
import Card from '../../../../components/shared/Card/Card';
import Button from '../../../../components/shared/Button/Button';

const Phone = () => {
    return (
        <Card title="Enter your phone number" icon="phone" >
            <div>
                <Button  text="Next" />
            </div>
        </Card>
    )
}

export default Phone