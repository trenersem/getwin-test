import React from 'react';
import { useAppDispatch } from '../../strore/hooks';
import { removeUser } from '../../strore/slice/userSlice';
import { Button } from '../common/Button';
import Form from '../Form';
import styles from './index.module.scss';
import * as Toaster from '../Toaster';

const Letter = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(removeUser());
    Toaster.showSuccessToast('You are successfully log out');
  };

  return (
    <div className={styles.container}>
      <h1 className="title">Write a letter</h1>
      <Form />
      <Button
        type="button"
        text="Log out"
				onClick={handleLogout}
        style={{
          position: 'absolute',
          top: '10px',
          right: '15px',
          background:'transparent',
          width: '65px',
					color: 'white',
					border: '1px solid #CB3D40',
        }}
      />
    </div>
  );
};

export default Letter;
