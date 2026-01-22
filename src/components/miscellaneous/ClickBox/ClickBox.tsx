import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import React from "react";
import "./ClickBox.scss";

interface ClickBoxProps {
  imageSrc: string;
  title: string;
  boxbackgroundColor: any;
  BoxHeadingColor: any;
}

const ClickBox: React.FC<ClickBoxProps> = ({
  imageSrc,
  title,
  boxbackgroundColor,
  BoxHeadingColor,
}) => {
  return (
    <div
      className="clickBox text-center"
      style={{
        backgroundColor: boxbackgroundColor || undefined,
      }}
    >
      <div className="clickImg">
        <Image
          src={getImagePath("clickup.webp", imageSrc)}
          alt={title}
          width={600} // Adjust dimensions as needed
          height={600}
          className="img-contain"
          loading="lazy"
        />
      </div>
      <div className="title">
        <h4
          style={{
            color: BoxHeadingColor || undefined,
          }}
        >
          {title}
        </h4>
      </div>
    </div>
  );
};

export default ClickBox;
