import React from 'react';
// @ts-ignore
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './index.scss';

interface Props {
  template: string;
  setTemplate: (editor: any) => void;
}

const Editor = ({ template, setTemplate }: Props) => {
  const handlerEdit = (e: Event, editor: any) => {
    const data = editor.getData();
    setTemplate(data);
  };

  return <CKEditor editor={ClassicEditor} data={template} onChange={handlerEdit} />;
};

export default Editor;
