import Article from "@/components/UI/Article/Article";
import Section from "@/components/UI/Section/Section";
import { CategoryProductProps } from "@/constants/types/categoryProductTypes";
import React, { FC } from "react";

type Props = {
  categoryProducts: CategoryProductProps;
};

const InTheBox: FC<Props> = ({ categoryProducts }) => {
  console.log("categoryProducts", categoryProducts);

  return (
    <Section dynamicStyles="max-width-container grid grid-cols-1 md:grid-cols-2 gap-[12.5rem]">
      <Article dynamicStyles="lg:w-full">
        <h3>Features</h3>
        <p className="body">{categoryProducts[0].features}</p>
      </Article>
      <Article dynamicStyles="lg:w-full md:justify-start">
        <h3>in the box</h3>
        <ul className=" flex flex-col gap-[4rem] h-full">
          {categoryProducts[0].includes.map((include) => (
            <li key={include.item} className={`body flex gap-[2.4rem]`}>
              <p className="text-primary">{include.quantity + "x"}</p>
              <p>{include.item}</p>
            </li>
          ))}
        </ul>
      </Article>
    </Section>
  );
};

export default InTheBox;
