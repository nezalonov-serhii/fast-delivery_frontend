import {
   HistoryProductsItem,
   HistoryProductsListStyled,
   ProductsDescrWrap,
} from "./HistoryListProducts.styled";

const HistoryListProducts = ({ productsOrder }) => {
   return (
      <HistoryProductsListStyled>
         {productsOrder.map((product) => {
            const priceDiscount = product.price * (1 - product.discount);
            return (
               <HistoryProductsItem key={product._id}>
                  <img src={product.imageUrl} alt={product.name} />
                  <ProductsDescrWrap>
                     <h2>{product.name}</h2>
                     <p>Per item: {product.price.toFixed(2)}₴</p>
                     {product.discount && (
                        <>
                           <p>Discount: {product.discount * 100}%</p>
                           <p>With discount: {priceDiscount.toFixed(2)}₴</p>
                        </>
                     )}
                     <p>Count: {product.count}</p>
                     <p>
                        Total price:
                        {(priceDiscount
                           ? product.count * priceDiscount
                           : product.count * product.price
                        ).toFixed(2)}
                        ₴
                     </p>
                  </ProductsDescrWrap>
               </HistoryProductsItem>
            );
         })}
      </HistoryProductsListStyled>
   );
};

export default HistoryListProducts;
