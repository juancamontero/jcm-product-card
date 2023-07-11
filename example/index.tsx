import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../src/components/ProductCard';
import { ProductButtons, ProductImage, ProductTitle } from '../src/components/';

const product = {
  id: 'CFG-MGU',
  title: 'Coffee Mug - Code card',
};

const App = () => {
  return (
    <div>
      <h1>Shopping Page Sample</h1>
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
            count: 1,
            maxCount: 20,
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

ReactDOM.render(<App />, document.getElementById('root'));
