import clsx from 'clsx'

type Props = {
    src:string,
    href: string,
    className?: string
}

function Logo({ src, href, className }: Props) {
  return (
      <a className='w-fit h-fit overflow-hidden inline-block' href={href}> 
        <img src={src} className={clsx("w-[6.75rem] h-8 sm:w-[7.9375rem] object-cover", className)} />
      </a>
  )
}

export default Logo;