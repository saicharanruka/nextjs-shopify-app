export interface ShopifyErrorLike {
    status : number;
    message : Error;
    cause : Error;
}

// export function isShopifyError(error : unknown) : error is ShopifyErrorLike {

// }