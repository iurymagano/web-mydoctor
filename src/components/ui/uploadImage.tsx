"use client";

import Uppy from "@uppy/core";
import Webcam from "@uppy/webcam";
import { Dashboard } from "@uppy/react";

// Don't forget the CSS: core and the UI components + plugins you are using.
import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import "@uppy/webcam/dist/style.min.css";
import { fetchData } from "@/data/fetchData";

// Don’t forget to keep the Uppy instance outside of your component.
const uppy = new Uppy().use(Webcam);

const UploadImage = () => {
  uppy.on("complete", (result) => {
    if (result) {
      saveImage(result);
    }
  });

  const saveImage = async (result) => {
    console.log(result.successful[0]);
    const successFull = result.successful[0].data;
    const data = new FormData();
    data.append("file", successFull);
    console.log(data);

    const resp = await fetchData({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiSXVyeSBNYWdhbm8iLCJlbWFpbCI6Iml1cnlAdGVzdGUuY29tIiwiaWF0IjoxNzAxMDM2MzMwLCJleHAiOjE3MDM2MjgzMzAsInN1YiI6IjI0In0.KGzVdbB2Yp_kH-EHb4z4sSjutvaOADhf8Ll-MqZn5AU",
      path: "images/upload",
      data,
      uploadImage: true,
    });

    console.log(resp);
  };

  return <Dashboard uppy={uppy} plugins={["Webcam"]} />;
};
export default UploadImage;
