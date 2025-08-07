import { FAQ_QUESTIONS } from '../utils'

const FAQSection = () => {
  return (
    <section className='section-padding flex flex-col xl:gap-10 lg:gap-8 md:gap-5'>
     {
        FAQ_QUESTIONS.map(({id, question, answer})=>(
            <dl key={id} className='flex flex-col md:gap-3 gap-2'>
        <dt className='lg:text-3xl md:text-2xl text-xl font-semibold font-Inter italic flex gap-2 dark:text-gray-100'>
           <span>{id}.</span> {question}
        </dt>
        <dd className='lg:text-xl md:text-lg text-base font-Inter font-medium dark:text-gray-100'>
            {answer}
        </dd>
     </dl>
        ))
     }
    </section>
  )
}

export default FAQSection