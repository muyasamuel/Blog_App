import Link from 'next/link';
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

function StudioNavbar(props : any) {
  return (
    <div>
    <div className='flex items-center justify-between p-4'>
        <Link href='/' className='text-[#F7AB0A] flex items-center'> 
        <ArrowUturnLeftIcon className='w-5 h-5 mr-2'  />
         Go to website</Link>
    </div>
   <> {props.renderDefault(props)}</>

   
    </div>
   
  )
}

export default StudioNavbar