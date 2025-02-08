export default function Blur() {
  return (
    <div
      aria-hidden="true"
      className="
        select-none 
        pointer-events-none 
        fixed
        w-screen
        h-24
        z-1
        backdrop-blur-[5px]
        opacity-95
        [mask-image:linear-gradient(to_bottom,#000_25%,transparent)]
        after:absolute
        after:inset-0
        after:bg-[linear-gradient(to_bottom,#fff,transparent)]
      " 
    />
  )
}
