import { SlPaperClip } from 'react-icons/sl';


interface Props {
  files: File[];
  setFiles: any;
}
const FileUpload = ({ files, setFiles }: Props) => {
  const handleUploadFiles = (items: File[]) => {
    const uploaded = [...files];
    items.some((item) => {
      if (uploaded.findIndex((f) => f.name === item.name) === -1) {
        uploaded.push(item);
      }
    });
    setFiles(uploaded);
  };
  const handlerFindEvent = ({ target }: HTMLInputElement | any) => {
    const selectedFiles = Array.prototype.slice.call(target.files);
    handleUploadFiles(selectedFiles);
  };

  return (
    <label htmlFor="file-input">
      <input
        id="file-input"
        type="file"
        multiple
        onChange={handlerFindEvent}
        style={{ display: 'none' }}
      />
      <SlPaperClip className='icon' />
    </label>
  );
};

export default FileUpload;
