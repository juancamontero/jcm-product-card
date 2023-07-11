import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle Tests', () => {
  test('should render the component correctly', () => {
    const wrapper = renderer.create(<ProductTitle title="custom title" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should shows the component with the PRODUCT title', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
