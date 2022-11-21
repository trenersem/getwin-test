import { useEffect, useState } from 'react';
import Input from '../common/Input';
import Editor from '../Editor';
import FileUpload from '../FileUpload';
import styles from './index.module.scss';
import * as Toaster from '../Toaster';
import { useSendLetterMutation } from '../../strore/services/letterApi';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiSend } from 'react-icons/fi';
import FileItem from '../FileItem';
import Tooltip from '../common/Tooltip';
import { useUser } from '../hooks/use-user';
import { regEmail } from '../../utils';

const Form = () => {
  const [email, setEmail] = useState('');
  const [errEmail, setErrEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [template, setTemplate] = useState('');
  const [files, setFiles] = useState<any>([]);
  const [needEditor, setNeedEditor] = useState(false);

  const [sendLetterApi] = useSendLetterMutation();
  const { email: myEmail, name } = useUser();

  useEffect(() => {
    if (regEmail.test(String(email).toLowerCase()) || email.length < 1) {
      setErrEmail('');
    } else setErrEmail('Please enter valid email');
  }, [email]);

  const deleteFileHandler = (_name: any) => {
    setFiles(files.filter((file: File) => file.name !== _name));
  };

  const clearForm = () => {
    setFiles('');
    setTemplate('');
    setEmail('');
    setSubject('');
    setNeedEditor(false);
  };

  const sendLetter = async () => {
    const form = new FormData();

    form.append('fromname', name);
    form.append('fromaddr', myEmail);
    form.append('to', email);
    form.append('subject', subject);
    form.append('template', template);
    form.append('files', files);

    await sendLetterApi(form)
      .unwrap()
      .then(() => {
        Toaster.showSuccessToast('Success');
        clearForm();
      })
      .catch((err: any) => {
        Toaster.showErrorToast(err.data.message);
      });
  };

  return (
    <div className={styles.form}>
      <div className={styles.inputs}>
        <Input placeholder="Email" value={email} onChange={setEmail} type="email" err={errEmail} />
        <Input placeholder="Subject" value={subject} onChange={setSubject} type="text" />
      </div>
      <div className={styles.utils}>
        <Tooltip text="Upload files or images">
          <FileUpload files={files} setFiles={setFiles} />
        </Tooltip>
        <Tooltip text="Open Editor">
          <GrEdit className="icon" onClick={() => setNeedEditor(!needEditor)} />
        </Tooltip>
      </div>

      {needEditor && <Editor template={template} setTemplate={setTemplate} />}
      {files && (
        <ul className={styles.list}>
          {files.map((file: File) => (
            <FileItem key={file.name} file={file} deleteFile={deleteFileHandler} />
          ))}
        </ul>
      )}

      <div className={styles.buttons}>
        <Tooltip text="Send your letter">
          <FiSend className={`icon`} onClick={() => sendLetter()} />
        </Tooltip>
        <Tooltip text="Clear form">
          <RiDeleteBin6Line className={`icon`} onClick={clearForm} />
        </Tooltip>
      </div>
    </div>
  );
};

export default Form;
