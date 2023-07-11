# REACT + TS // Product Card

## React - TS Project to test NPM components package deployment

### Example


```
import { ProductCard } from '../src/components/ProductCard';
import { ProductButtons, ProductImage, ProductTitle } from '../src/components/';

onst App = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ProductCard
          product={product}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({ reset, count, isMaxReached, onIncreaseBy, maxCount }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
```