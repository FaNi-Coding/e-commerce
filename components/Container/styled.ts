export const maxWidthContainerStyles = (
  rowReverse: boolean | undefined,
  colReverse: boolean | undefined
) => {
  return `container flex flex-col justify-between ${
    colReverse && 'flex-col-reverse'
  } md:flex-row ${
    rowReverse && 'md:flex-row-reverse'
  }  mx-auto py-8 md:py-24 md:p-0  lg:py-40 xl:max-w-7xl`;
};
