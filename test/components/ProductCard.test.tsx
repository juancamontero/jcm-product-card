import * as React from 'react';
import renderer, { act } from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductCard Tests', () => {
  test('should shows the component correctly', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <h1>Product Card</h1>}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should the counter increment', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {({ count, onIncreaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => onIncreaseBy(1)}>+1</button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();

    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
