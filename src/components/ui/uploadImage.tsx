"use client";
import Uppy from "@uppy/core";
import Webcam from "@uppy/webcam";
import { Dashboard } from "@uppy/react";
//@ts-ignore
import ptBR from "@uppy/locales/lib/pt_BR";

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import "@uppy/webcam/dist/style.min.css";
import { fetchData } from "@/data/fetchData";
import { useSession } from "next-auth/react";
import { useRef } from "react";
const optionsUppy = {
  locale: ptBR,
  autoClose: true,
  autoProceed: true,
  restrictions: {
    maxNumberOfFiles: 1,
  },
};

const uppy = new Uppy(optionsUppy).use(Webcam);

interface UploadImageProps {
  onCallback: (obj: object) => void;
}

const UploadImage = ({ onCallback }: UploadImageProps) => {
  const { data: session } = useSession() as any;

  const ref = useRef();
  uppy.on("complete", (result) => {
    if (result) {
      saveImage(result);
    }
  });

  const saveImage = async (result: any) => {
    const successFull = result.successful[0].data;
    if (successFull.name !== ref.current && session?.token) {
      ref.current = successFull.name;
      const data = new FormData();
      data.append("file", successFull);
      const resp = await fetchData({
        token: session.token,
        path: "images/upload",
        data,
      });
      onCallback(resp);
    }
  };

  return (
    <Dashboard
      className=" max-sm:w-[85vw]"
      uppy={uppy}
      plugins={["Webcam"]}
      proudlyDisplayPoweredByUppy={false}
    />
  );
};
export default UploadImage;
