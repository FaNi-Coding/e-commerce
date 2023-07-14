"use client";
import React, { MouseEvent, useState } from "react";

type Props = {};

const CountProductAmount = (props: Props) => {
  const [count, setCount] = useState(0);

  const handleCount = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault;
    const target = e.target as HTMLButtonElement;
    if (target) {
      setCount((prev) => (target.id === "minus-button" ? prev - 1 : prev + 1));
    }
  };
  return (
    <div className="flex justify-between items-center p-[.15rem] gap-[.8rem] w-full bg-tertiary">
      <button
        className="w-full h-full border-none hoverTertiary disabled:cursor-not-allowed"
        onClick={handleCount}
        id="minus-button"
        disabled={count <= 0}
      >
        -
      </button>
      <p className="body">{count}</p>
      <button
        className="w-full h-full border-none hoverTertiary"
        onClick={handleCount}
        id="plus-button"
      >
        +
      </button>
    </div>
  );
};

export default CountProductAmount;
