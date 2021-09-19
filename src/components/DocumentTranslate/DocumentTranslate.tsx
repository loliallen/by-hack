import {
  Image,
  InsertDriveFileOutlined,
  PictureAsPdf,
} from "@material-ui/icons";
import React, { useRef, useState } from "react";
import { Langs } from "../TextAutocomplete/helpers";
import { MainContainer } from "../../containers/MainContainer";
import { translate } from "./helpers";
import { useStyles } from "./styles";

export const DocumentTranslate = () => {
  const classes = useStyles();
  const inputRef = useRef<HTMLInputElement>(null);
  const [inFile, setInFile] = useState<File | null>(null);
  const [lang, setLang] = useState<Langs>("ru");

  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files || [];
    const file = files[0];
    if (file.type === "application/pdf" || file.type.includes("image/")){
        setInFile(file);
        translateFile();
    }
  };

  const translateFile = () => inFile && translate(lang, inFile);

  return (
    <MainContainer>
      <div className={classes.container}>
        <div className={classes.input}>
          <div className={classes.transfer_area}>
            <div className={classes.transfer_area_icon}>
              {!inFile ? (
                <>
                  <div className={classes.transfer_area_icon_icons}>
                    <PictureAsPdf fontSize="large" /> или{" "}
                    <Image fontSize="large" />
                  </div>
                  Перетащите или{" "}
                  <span
                    className={classes.transfer_area_upload}
                    onClick={() => inputRef.current?.click()}
                  >
                    загрузите
                  </span>{" "}
                  документ
                </>
              ) : (
                inFile.name
              )}
            </div>
          </div>
          <input
            type="file"
            hidden
            ref={inputRef}
            onChange={handleUploadFile}
          />
        </div>
        <div className={classes.output}></div>
      </div>
    </MainContainer>
  );
};
