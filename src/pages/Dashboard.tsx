/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, Dispatch, FC, ReactElement, useEffect } from 'react'
import ProductList from './products';
import FilterMobile from '../components/filter/FilterMobile';
import TopSort from '../components/filter/topSort';
import { useDispatch, useSelector } from "react-redux";
import { getProductCategories, fetchProductByCategory, fetchProduct } from "../redux/action/product";
import { useParams } from 'react-router-dom';

const Dashboard: FC = (): ReactElement => {
  const dispatch: Dispatch<any> = useDispatch();
  const { categories, products } = useSelector((state: any) => state.product);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const { category } = useParams();

  useEffect(() => {
    dispatch(getProductCategories());
    if(category) {
      dispatch(fetchProductByCategory(category));
    } else {
      dispatch(fetchProduct());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white" >
      <div>
        {/* Mobile filter dialog */}
        <FilterMobile mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen} />

        <main className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-6">
          <TopSort setMobileFiltersOpen={setMobileFiltersOpen} />

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only"> Products</h2>
            <div className="grid grid-cols-2 gap-x- gap-y-10 lg:grid-cols-6">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900 text-left ">
                  {categories && categories.map((category: string) => (
                    <li key={category} >
                      <a href={`/products/${category}`}>{category}</a>
                    </li>
                  ))}
                </ul>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-5">
                <ProductList products={products} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div >
  )
}
export default Dashboard




