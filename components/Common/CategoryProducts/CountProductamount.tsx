"use client";
import React, { MouseEvent, useState } from "react";
import { _useSelector, _useDispatch } from "@/app/hooks";
import { decrement, increment } from "@/redux/features/counter/counterSlice";
type Props = {};

const CountProductAmount = (props: Props) => {
  const count = _useSelector((state) => state.CounterReducer.value);
  const dispatch = _useDispatch();

  return (
    <div className="flex justify-between items-center p-[.15rem] gap-[.8rem] w-full bg-tertiary">
      <button
        className="w-full h-full border-none hoverTertiary disabled:cursor-not-allowed"
        onClick={() => dispatch(decrement())}
        id="minus-button"
        disabled={count <= 0}
      >
        -
      </button>
      <p className="body">{count}</p>
      <button
        className="w-full h-full border-none hoverTertiary"
        onClick={() => dispatch(increment())}
        id="plus-button"
      >
        +
      </button>
    </div>
  );
};

export default CountProductAmount;
