import React, { useState } from 'react';
import styles from './Phone.module.css';
import Card from '../../../../components/shared/Card/Card';
import Button from '../../../../components/shared/Button/Button';
import TextInput from '../../../../components/shared/TextInput/TextInput';
import { sendOtp } from '../../../../http/index';

const Phone = ({ onNext }) => {
    const [phoneNumber, setphoneNumber] = useState('');


    async function submit(){

        //server request

        const res = await sendOtp({phone:phoneNumber});

       // console.log("naman",process.env.REACT_APP_API_URL);

        console.log(res);

        
       
        //onNext();
    }
    return (
        <Card title="Enter your phone number" icon="phone" >
            <TextInput value={phoneNumber} placeholder="+918690645166" onChange={(e) => setphoneNumber(e.target.value)} />
            <div>
                <div className={styles.actionButtonWrap}>
                    <Button text="Next" onClick={submit} />
                </div>
                <p className={styles.bottomParagraph}>
                    By entering your number, you’re agreeing to our Terms of
                    Service and Privacy Policy. Thanks!
                </p>
            </div>
        </Card>
    )
}

export default Phone