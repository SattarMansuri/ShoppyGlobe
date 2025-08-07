import { useForm } from 'react-hook-form'
import { MoonLoader } from "react-spinners"
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
       const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
      } = useForm();
        const submitForm = (data) =>{
       console.log('Submitted Data:', data)
       reset()
       toast.success('Detail submitted Successfully')
  }
  return (
    <section className='section-padding'>
        <Toaster />
     <h3 className='lg:text-3xl md:text-2xl text-xl font-semibold font-Inter italic text-center xl:mb-10 lg:mb-8 md:mb-6 mb-5 dark:text-gray-100'>
      Got a Question?
     </h3>
     <div className='flex lg:justify-between lg:h-[500px] lg:flex-row flex-col-reverse justify-center items-center lg:gap-2 gap-10'>
      <div className='lg:w-[48%] md:w-4/5 w-full rounded-xl overflow-hidden shadow-md border-2 border-gray-200 dark:border-gray-600 lg:h-full h-[400px]'>
        <iframe className='h-full w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.775569808571!2d77.6065858592196!3d12.982320909201892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1689d24ec16d%3A0xb95d15d2169a107d!2sCommercial%20Street%2C%20Tasker%20Town%2C%20Shivaji%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560001!5e0!3m2!1sen!2sin!4v1753859000278!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
      </div>
      <form onSubmit={handleSubmit(submitForm)} className='flex flex-col justify-between border-2 border-gray-200 rounded-xl shadow-md lg:w-[48%] md:w-4/5 w-full lg:h-full h-[500px] px-5 py-8 dark:border-gray-600'>
       <div className="relative">
  <div
    className={`relative border h-12 rounded-sm flex items-center transition-colors duration-300 
      ${errors.name ? 'border-red-600' : 'border-gray-400 dark:border-gray-600'}`}
  >
    <input
      type="text"
      id="name"
      name="name"
      placeholder=" "
      {...register("name", {
        required: { value: true, message: "Name is required" },
        minLength: {
          value: 4,
          message: "Minimum length should be at least 4 characters",
        },
        pattern: {
          value: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
          message: "First Name must start with a Capital letter",
        },
      })}
      className="peer w-full h-10 placeholder-transparent bg-transparent outline-none pl-3 
        text-black dark:text-gray-100"
    />
    <label
      htmlFor="name"
      className="absolute left-3 z-0 px-1 top-2 text-lg text-gray-400 
        bg-white dark:bg-gray-900 transition-all duration-300 peer-focus:-top-3 peer-focus:text-sm peer-focus:left-1 peer-focus:z-10 peer-focus:text-black dark:peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:left-1 peer-[&:not(:placeholder-shown)]:z-10 peer-[&:not(:placeholder-shown)]:text-black dark:peer-[&:not(:placeholder-shown)]:text-white"
    >
      Name
    </label>
  </div>
  {errors.name && (
    <p className="text-sm mt-1 text-red-600">{errors.name.message}</p>
  )}
</div>
     <div className='relative'>
           <div className={`relative border-[1px] h-12 rounded-sm flex items-center ${errors.phone ? 'border-red-600' : 'border-gray-400 dark:border-gray-600'}`}>
          <input
            type="tel"
            id="phone"
            name='phone'
            placeholder=" "
             {...register('phone', 
            {
              required: {value: true, message: "Phone number is required"},
              minLength: {value: 10, message: "Minimum length should be at least 6  characters"},
              pattern: {value:/^[6-9]\d{9}$/, message: 'Please enter a valid phone number'}
            }
          )}
            className="peer xl:w-[496px] lg:w-[432px] md:w-[368px] w-full h-10 placeholder-transparent bg-transparent outline-none pl-3"
          />
          <label
            htmlFor="phone"
            className="absolute left-3 z-0 px-1 top-2 text-lg text-gray-400 
        bg-white dark:bg-gray-900 transition-all duration-300 peer-focus:-top-3 peer-focus:text-sm peer-focus:left-1 peer-focus:z-10 peer-focus:text-black dark:peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:left-1 peer-[&:not(:placeholder-shown)]:z-10 peer-[&:not(:placeholder-shown)]:text-black dark:peer-[&:not(:placeholder-shown)]:text-white">
            Phone
          </label>
        </div>
       {errors.phone && <p className='absolute mt-0.5 text-sm text-red-600'>{errors.phone.message}</p>}
        </div>
        <div className='relative'>
           <div className={`relative border-[1px] h-12 rounded-sm flex items-center ${errors.message ? 'border-red-600' : 'border-gray-400 dark:border-gray-600'}`}>
          <input
            type="text"
            id="email"
            name='email'
            placeholder=" "
             {...register('email', 
            {
              required: {value: true, message: "Email address is required"},
              minLength: {value: 6, message: "Minimum length should be at least 6  characters"},
              pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Enter a valid email (someone@example.com)"}
            }
          )}
            className="peer w-full h-10 placeholder-transparent bg-transparent outline-none pl-3"
          />
          <label
            htmlFor="email"
            className="absolute left-3 z-0 px-1 top-2 text-lg text-gray-400 
        bg-white dark:bg-gray-900 transition-all duration-300 peer-focus:-top-3 peer-focus:text-sm peer-focus:left-1 peer-focus:z-10 peer-focus:text-black dark:peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:left-1 peer-[&:not(:placeholder-shown)]:z-10 peer-[&:not(:placeholder-shown)]:text-black dark:peer-[&:not(:placeholder-shown)]:text-white">
            Email
          </label>
        </div>
       {errors.email && <p className='absolute mt-0.5 text-sm text-red-600'>{errors.email.message}</p>}
        </div>
        <div className='relative'>
           <div className={`relative border-[1px] h-22 rounded-sm flex items-center ${errors.email ? 'border-red-600' : 'border-gray-400 dark:border-gray-600'}`}>
          <textarea
            id="message"
            name='message'
            placeholder=" "
             {...register('message', 
            {
              required: {value: true, message: "Message is required"},
              minLength: {value: 10, message: "Minimum length should be at least 10  characters"}
            }
          )}
            className="peer w-full h-20 placeholder-transparent bg-transparent outline-none px-3 resize-none"
          />
          <label
            htmlFor="message"
            className="absolute left-3 z-0 px-1 top-2 text-lg text-gray-400 
        bg-white dark:bg-gray-900 transition-all duration-300 peer-focus:-top-3 peer-focus:text-sm peer-focus:left-1 peer-focus:z-10 peer-focus:text-black dark:peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:left-1 peer-[&:not(:placeholder-shown)]:z-10 peer-[&:not(:placeholder-shown)]:text-black dark:peer-[&:not(:placeholder-shown)]:text-white">
            Your Message Here
          </label>
        </div>
       {errors.message && <p className='absolute mt-0.5 text-sm text-red-600'>{errors.message.message}</p>}
        </div>
          <button disabled={isSubmitting} className={` ${isSubmitting ? 'bg-gray-300' : 'bg-blue-200'} w-full font-semibold text-lg text-yellow-600 h-12 lg:rounded-4xl rounded-3xl cursor-pointer hover:bg-blue-100 hover:text-yellow-400 flex justify-center items-center`}>
          { 
          isSubmitting ?  <MoonLoader size={30} color='#10B981' /> : 'Submit'
          }
        </button>
      </form>
     </div>
    </section>
  )
}

export default ContactForm