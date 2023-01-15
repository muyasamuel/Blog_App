import Image from "next/image";


function logo(props : any) {

  return (
    <div className="flex items-center space-x-2">
     <Image
     className="rounded-full object-cover"
     height={25}
     width={25}
     src="https://images.pexels.com/photos/3767673/pexels-photo-3767673.jpeg?auto=compress&cs=tinysrgb&w=1600"
     alt="logo" />

    <>{props.renderDefault(props)}</>
    </div>
  )
}

export default logo