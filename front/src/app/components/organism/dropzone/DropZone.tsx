import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

import styles from "./DropZone.module.scss";

function DropZone() {
  const [files, setFiles] = useState<Array<{ preview: string; name: string }>>(
    []
  );
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles: any) => {
      setFiles(
        acceptedFiles.map((file: { preview: string }) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div className={styles.thumb} key={file.name}>
      <div className={styles.thumbInner}>
        <img src={file.preview} className={styles.img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className={styles.container}>
      <div {...getRootProps({ className: styles.dropZone })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside className={styles.thumbsContainer}>{thumbs}</aside>
    </section>
  );
}

export default DropZone;
