import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Input from "../../UI Kit/Input/Input";

import { Button } from "../../UI Kit";

import {
  changeDescription,
  changeTitle,
  closeModal,
  setDescriptionError,
  setModalSuccess,
  setSubmitDisable,
  setTitleError,
} from "../../redux/actions/modalWindowActions";

import { createFeedback } from "../../redux/actions/feedbackActions";

import { validateTitle, validateDescription } from "../../helpers/validator";

import {
  plusIcon,
  closeButton,
  errorIcon,
  fileIcon,
} from "../../public/images";

import classes from "./modalWindow.module.css";

import { UploadFile, UploadNotification } from "../index";
import { clearFile } from "../../redux/actions/uploadFileActions";

const ModalWindow = ({
  active,
  title,
  titleLabel,
  titlePlaceHolder,
  descriptionLabel,
  descriptionPlaceHolder,
  buttonTitle,
  modalClose,
  modal,
  type,
  notification,
}) => {
  const dispatch = useDispatch();

  const uploadFile = useSelector((state) => state.uploadFile);

  useEffect(() => {
    const validateInputTitle = validateTitle(modal.modal.title);
    const validateDescriptionInput = validateDescription(
      modal.modal.description
    );
    const fileLink = uploadFile.fileLink;

    if (
      validateInputTitle === "" &&
      validateDescriptionInput === "" &&
      uploadFile.fileLink !== ""
    ) {
      dispatch(setSubmitDisable(false));
    }

    if (validateInputTitle === "") {
      dispatch(setTitleError(false, ""));
    }

    if (validateInputTitle !== "") {
      dispatch(setTitleError(true, validateInputTitle));
    }

    if (validateDescriptionInput === "") {
      dispatch(setDescriptionError(false, ""));
    }

    if (validateDescriptionInput !== "") {
      dispatch(setDescriptionError(true, validateDescriptionInput));
    }
  }, [modal.modal.title, modal.modal.description, uploadFile.fileLink]);

  const modalWindow = {
    active: active, //Модальное окно активно
    title: title, //Заголовок модалки и остальное
    titleLabel: titleLabel,
    titlePlaceHolder: titlePlaceHolder,
    descriptionPlaceHolder: descriptionPlaceHolder,
    descriptionLabel: descriptionLabel,
    buttonTitle: buttonTitle,
    modalClose: modalClose,
    modal: modal,
    startIcon: <img src={plusIcon} />,
    closeIcon: <img src={closeButton} />,
    fileIcon: <img src={fileIcon} />,
    type: type,
  };
  const onChangeTitleHandler = (e) => {
    dispatch(changeTitle(e.target.value));
  };

  const onChangeDescriptionHandler = (e) => {
    dispatch(changeDescription(e.target.value));
  };

  const submitFeedback = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const currentDate = new Date();

    const dateToSumbit =
      currentDate.getDate() +
      "." +
      currentDate.getMonth() +
      "." +
      currentDate.getFullYear();
    dispatch(
      createFeedback({
        title: modal.modal.title,
        description: modal.modal.description,
        dateOfCreation: dateToSumbit.toString(),
        photo: uploadFile.fileLink,
      })
    );
    dispatch(closeModal(false, { title: "", description: "" }));
    dispatch(clearFile());
    dispatch(setSubmitDisable(true));
    dispatch(setModalSuccess(true));
    notification(true);
  };

  return (
    <div
      className={
        modalWindow.active
          ? `${classes.modalWindow} ${classes.active}`
          : classes.modalWindow
      }
      onClick={modalWindow.modalClose}
    >
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.modalHeader}>
          <h4 className={classes.modalTitle}>{modalWindow.title}</h4>
          <Button
            buttonClassName={"buttonDefault"}
            style={{ background: "none", padding: 0 }}
            isChanged={true}
            icon={modalWindow.closeIcon}
            onClick={modalWindow.modalClose}
          />
        </div>
        <form
          className={classes.formContainer}
          onSubmit={(e) => e.preventDefault()}
        >
          <label className={classes.label}>{modalWindow.titleLabel}</label>
          <div className={`${classes.inputBlock} ${classes.flexInput}`}>
            <Input
              inputType={"line"}
              errorMessage={modal.titleError.message}
              labelIcon={errorIcon}
              error={modal.titleError.error}
              type={"text"}
              value={modal.modal.title}
              onChange={onChangeTitleHandler}
              placeholder={modalWindow.titlePlaceHolder}
            />
            <UploadFile
              loadingFile={uploadFile}
              buttonTitle={"Загрузить файл"}
              startIcon={modalWindow.startIcon}
              allowed_extensions={["jpg", "jpeg", "png", "gif"]}
            />
          </div>

          <UploadNotification
            loadingFile={uploadFile}
            icon={modalWindow.fileIcon}
          />
          <label className={classes.label}>
            {modalWindow.descriptionLabel}
          </label>
          <div className={classes.inputBlock}>
            <Input
              inputType={"multiLine"}
              errorMessage={modal.descriptionError.message}
              labelIcon={errorIcon}
              error={modal.descriptionError.error}
              type={"submit"}
              onChange={onChangeDescriptionHandler}
              value={modal.modal.description}
              placeholder={modalWindow.descriptionPlaceHolder}
            />
          </div>
          <div className={classes.submitBlock}>
            <Button
              isDisabled={modal.disabled}
              onClick={submitFeedback}
              type={"submit"}
              buttonClassName={"buttonDefault"}
              title={modalWindow.buttonTitle}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWindow;
