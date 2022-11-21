import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../strore/hooks';
import { setUser } from '../../strore/slice/userSlice';
import { Button } from '../common/Button';
import Input from '../common/Input';
import styles from './index.module.scss';
import * as Toaster from '../Toaster';
import { regEmail } from '../../utils';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (name.length > 1 && regEmail.test(String(email).toLowerCase())) {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [name, email]);

  const handleLogin = () => {
    dispatch(setUser({ email: email, name: name }));
    Toaster.showSuccessToast('You are successfully login');
  };

  return (
    <div className="section">
      <div className={styles.login}>
        <h2>Do you want to send new letter?</h2>
        <p>Just Login</p>
        <Input placeholder="Your name" value={name} onChange={setName} type="text" />
        <Input placeholder="Email" value={email} onChange={setEmail} type="email" />
        <p style={{ fontSize: 10 }}>Don't forget to enter a valid email!</p>
        <Button type="button" text="Next" onClick={handleLogin} disabled={isDisabled} />
      </div>
    </div>
  );
};

export default Login;
