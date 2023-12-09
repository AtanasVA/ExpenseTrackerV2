import { useDropzone } from "react-dropzone";
import {
  AllowedFileFormats,
  DEFAULT_MAX_FILE_SIZE,
  type FileUploadType,
} from "./Dropzone.constants";
// import { enqueueSnackbar } from "notistack";
import dropzoneUploadIcon from "../../../assets/icons/upload-icon.svg";
// import { SCustomImgIcon } from "../SingleSidebarElement/singleSidebarElement.styles";

type DropzoneProps = {
  acceptedFileFormats: FileUploadType;
  helperText?: string;
  handleFileDrop: (file: File) => void;
};

const Dropzone: React.FC<DropzoneProps> = ({
  acceptedFileFormats,
  helperText,
  handleFileDrop,
}) => {
  //   const { t } = useTranslation();

  const onDrop = (acceptedFiles: File[], rejectedFiles) => {
    if (rejectedFiles.length) {
      console.log(
        "Rejected files.. The allowed formats are:",
        Object.values(AllowedFileFormats[acceptedFileFormats]),
      );
      //   enqueueSnackbar(
      //     t("dropzone.fileTypeError", {
      //       formats: Object.values(AllowedFileFormats[acceptedFileFormats]),
      //     }),
      //     {
      //       variant: "error",
      //     },
      //   );
    }

    acceptedFiles.forEach((currentFile) => {
      if (currentFile.size >= DEFAULT_MAX_FILE_SIZE) {
        // enqueueSnackbar(t("dropzone.fileSizeError", { size: "10" }), {
        //   variant: "error",
        // });
        console.log("File is too large m8");
        return;
      }

      return handleFileDrop(currentFile);
    });
  };

  const { open, getRootProps } = useDropzone({
    accept: AllowedFileFormats[acceptedFileFormats],
    onDrop,
    multiple: false,
  });

  return (
    // <SDropzoneContainer {...getRootProps({ className: "dropzone" })}>
    <div
      className=".dropzone-container"
      {...getRootProps((className = "dropzone"))}
    ></div>
    // </SDropzoneContainer>
  );
};

export default Dropzone;
