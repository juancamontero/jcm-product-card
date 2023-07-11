import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductImage Tests', () => {
  test('should shows the component with a custom image', () => {
    const wrapper = renderer.create(<ProductImage img="https://hola.com" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('should shows the component with the product image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductImage />}</ProductCard>
    );
    console.log(wrapper.toJSON());
    // expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
