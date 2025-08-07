import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductShimmer = () => {
  return (
    <div className="border p-4 rounded">
    <Skeleton height={180} />
    <Skeleton count={2} />
    <Skeleton width={80} />
  </div>
  )
}

export default ProductShimmer