import Article from "@/components/UI/Article/Article";
import Section from "@/components/UI/Section/Section";
import { CategoryProductProps } from "@/constants/types/categoryProductTypes";
import React, { FC } from "react";

type Props = {
  categoryProducts: CategoryProductProps;
};

const InTheBox: FC<Props> = ({ categoryProducts }) => {
  const { features, includes } = categoryProducts[0];
  return (
    <Section dynamicStyles="max-width-container grid grid-cols-1 lg:grid-cols-2 gap-[12.5rem]">
      <Article dynamicStyles="lg:w-full">
        <h3>Features</h3>
        <p className="body">{features}</p>
      </Article>
      <article className="flex flex-col md:flex-row justify-between gap-[3.2rem] lg:flex-col w-full lg:justify-start lg:items-center">
        <h3>in the box</h3>
        <ul className=" flex flex-col gap-[.8rem] h-full">
          {includes.map((include) => (
            <li key={include.item} className={`body flex gap-[2.4rem]`}>
              <p className="text-primary">{include.quantity + "x"}</p>
              <p>{include.item}</p>
            </li>
          ))}
        </ul>
      </article>
    </Section>
  );
};

export default InTheBox;
