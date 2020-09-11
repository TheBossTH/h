import React from "react";
type CardProps = {
  image: string;
  namestory: string;
  link: string;
};

export default function Card({ image, namestory, link }: CardProps) {
  return (
    <div className="col-span-3">
      <a href={link}>
        <img src={image} alt={namestory} className="rounded-lg" />
      </a>
    </div>
  );
}
