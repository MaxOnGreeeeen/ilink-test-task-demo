import React, { useRef } from "react";

import classes from "./uploadFile.module.css";

import { useDispatch } from "react-redux";

import { uploadFile } from "../../redux/actions/uploadFileActions";

//Здесь есть недостаток: при откреплении ранее загруженного файла
//загрузить снова его не получится, однако при выборе другого файла
//загрузка пройдёт успешно

const UploadFile = ({ startIcon, buttonTitle, loadingFile }) => {
  const dispatch = useDispatch();

  const inputElement = useRef(null);

  const onUpload = (e) => {
    e.preventDefault();
    dispatch(uploadFile(inputElement.current.files[0]));
  };

  return (
    <form className={classes.uploadFileBlock}>
      <input
        onChange={onUpload}
        id="inputFile"
        ref={inputElement}
        className={classes.inputFile}
        name="file"
        type="file"
      />
      <label htmlFor={"inputFile"} className={classes.inputFileButton}>
        {startIcon}
        <span className={classes.inputInner}>{buttonTitle}</span>{" "}
      </label>
    </form>
  );
};

export default UploadFile;
