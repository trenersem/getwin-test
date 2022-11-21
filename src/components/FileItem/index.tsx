import React from 'react';
import { MdDelete } from 'react-icons/md';
import styles from './index.module.scss';

interface Props {
  file: File;
  deleteFile: (name: string) => void;
}

const FileItem = ({ file, deleteFile }: Props) => {
  return (
    <>
      <li className={styles.item} key={file.name}>
        <p>{file.name}</p>
        <MdDelete onClick={() => deleteFile(file.name)}/>
      </li>
    </>
  );
};

export default FileItem;
