import { ClockLoader } from "react-spinners"

const Fallback = () => {
  return (
<section className="h-screen flex items-center justify-center dark:bg-gray-900">
   <ClockLoader />
  </section>
  )
}

export default Fallback