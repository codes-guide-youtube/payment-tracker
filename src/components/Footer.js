import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaYoutube} from 'react-icons/fa';

const Footer = () => {
  return (
    <div><footer className="self-end bottom-0 fixed text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col block">
      <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">Codes Guide </span>
      </Link>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Codes Guide —
        <Link href="https://twitter.com/SridharHisaria" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@SridharHisaria</Link>
      </p>
      <div className='min-w-screen'>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ml-auto min-w-screen">
    <Link href="https://www.youtube.com/@CodesGuideOriginal" className='ml-10 ' ><FaYoutube className='ml-10 ' /> </Link>    </span>
      </div>
    </div>
  </footer></div>
  )
}

export default Footer