import ck from '../../public/svgs/CK.svg'
import essence from '../../public/svgs/essence-full.svg'
import gucci from '../../public/svgs/gucci.svg'
import prada from '../../public/svgs/prada.svg'
import versace from '../../public/svgs/versace.svg'
import zara from '../../public/svgs/zara.svg'

const Brands = () => {
    const brands = [
        {id: 1, brand: ck},
        {id: 2, brand: essence},
        {id: 3, brand: gucci},
        {id: 4, brand: prada},
        {id: 5, brand: versace},
        {id: 6, brand: zara},
    ]
  return (
    <section className='py-5 lg:-mx-10 md:-mx-8 sm:-mx-6 -mx-4 lg:px-10 md:px-8 sm:px-6 px-4 flex flex-wrap justify-between bg-black lg:gap-x-20 gap-x-5 items-center'>
      {
        brands.map(({id, brand})=>(
            <img key={id} src={brand} alt="" className='lg:w-32 w-20' />
        ))
      }
    </section>
  )
}

export default Brands