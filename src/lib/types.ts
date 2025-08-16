export type Menu = {
    title : string,
    path : string
}

export type ShopifyMenuOperation = {
  data: {
    menu?: {
      items: {
        title: string;
        url: string;
      }[];
    };
  };
  variables: {
    handle: string;
  };
};

export type Product = Omit<ShopifyProduct, "variants" | "images"> & {}