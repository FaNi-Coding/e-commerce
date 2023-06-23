export const maxWidthContainerStyles = (reverse: boolean | undefined) => {
  return `container flex flex-wrap justify-between  ${
    reverse && 'flex-row-reverse'
  }  mx-auto my-8 md:my-24 md:p-0 lg:my-40 xl:max-w-7xl`;
};
