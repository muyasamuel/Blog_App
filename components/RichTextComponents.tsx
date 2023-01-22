import urlFor from "../lib/urlFor";
import Image from "next/image";
import Link from "next/link";



export  const RichTextComponents = ()  =>{
    types: {
        image: ({value}: any) => {
            return (
              <div className="relative w-full h-96 m-10 mx-auto">
                <Image
                className="object-contain" 
                src={urlFor(value).url()}
                alt="Blog Image"
                fill
                />
            
              </div>
            )
        };

        list: {
          
            bullet: ({children}: any) => (
                <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
            ),
            number: ({children}: any) => (
             <ol className="mt-lg list-decimal">{children}</ol>,
            )
          },
        

          block: {
           s
            h1: ({children}) => <h1 className="text-2xl">{children}</h1>,
            blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
        
            customHeading: ({children}) => (
              <h2 className="text-lg text-primary text-purple-700">{children}</h2>
            ),
          },
    
      marks: {
        link: ({children, value}) => {
          const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
          return (
            <a href={value.href} rel={rel}>
              {children}
            </a>
          )
        },
      },
    }

}