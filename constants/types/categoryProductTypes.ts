type ImageTypes = {
    desktop: string;
    mobile: string;
    tablet: string;
  };

type GalleryTypes = {
    first: {
      desktop: string;
      mobile: string;
      tablet: string;
    };
    second: {
      desktop: string;
      mobile: string;
      tablet: string;
    };
    third: {
      desktop: string;
      mobile: string;
      tablet: string;
    };
  };

  type IncludeTypes = { quantity: number; item: string }[]
 
  type OthersTypes = {
        image: ImageTypes
        name: string;
        slug: string;
      }[];
  
export type CategoryProductProps = {
    category: string;
    categoryImage: ImageTypes
    description: string;
    features: string;
    gallery: GalleryTypes
    id: string;
    amount: number,
    image: ImageTypes
    includes: IncludeTypes;
    name: string;
    newest: boolean;
    others: OthersTypes
    price: number;
    slug: string;
  }[];

  export type ProductType = {
    name: string;
    newest: boolean;
    description: string;
    price: number | undefined;
    id: string
    amount: number
    image: {
      mobile: string;
      desktop: string;
    };
  };

  export type CategoryProductType = {
    name: string;
    newest: boolean;
    description: string;
    slug: string;
    image: {
      mobile: string
      desktop: string;
    };
  };