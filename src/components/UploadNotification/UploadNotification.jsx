import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../UI Kit";

import { clearFile } from "../../redux/actions/uploadFileActions";

import { setSubmitDisable } from "../../redux/actions/modalWindowActions";

import { deleteIcon, fileIcon, loadIcon } from "../../public/images";

import classes from "./uploadNotification.module.css";

//progress bar реализован без привязки к прогрессу запроса
//среднее время загрузки - 2 секунды
//с учётом этого времени была выставлена длительность анимации
//loader же привязан к запросу и крутится во время его выполнения

const UploadNotification = ({ loadingFile }) => {
  const dispatch = useDispatch();

  const handleCloseFile = () => {
    dispatch(clearFile());
    dispatch(setSubmitDisable(true));
  };

  return (
    <div
      className={
        loadingFile.isLoading || loadingFile.isLoaded
          ? `${classes.uploadProgressBlock} ${classes.active}`
          : classes.uploadProgressBlock
      }
    >
      <img src={fileIcon} />
      <div className={classes.fileNameBlock}>
        <span
          className={
            loadingFile.uploadError.error
              ? `${classes.fileName} ${classes.error}`
              : classes.fileName
          }
        >
          {loadingFile.uploadError.error
            ? loadingFile.uploadError.message
            : loadingFile.fileName}
        </span>
        <div className={classes.progressBar}>
          <span className={classes.bar}>
            <span
              className={
                loadingFile.isLoaded
                  ? `${classes.progress} ${classes.completed}`
                  : classes.progress
              }
            />
          </span>
        </div>
      </div>
      <div className={classes.iconBlock}>
        {loadingFile.isLoading ? (
          <img className={classes.loadIcon} src={loadIcon} />
        ) : (
          <Button
            onClick={handleCloseFile}
            buttonClassName={"buttonDefault"}
            style={{ background: "none", padding: 0 }}
            isChanged={true}
            icon={<img src={deleteIcon} />}
          />
        )}
      </div>
    </div>
  );
};

export default UploadNotification;
