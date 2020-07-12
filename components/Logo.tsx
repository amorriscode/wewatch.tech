type Props = {
  small?: boolean;
}

function Logo({ small }: Props) {
  const textSize = small ? 'text-3xl md:text-5xl' : 'text-6xl md:text-8xl'
  const padding = small ? 'px-2' : 'px-4'

  return (
    <div style={{ width: 'fit-content' }} className={`${textSize} text-right font-bold tracking-tighter leading-tight`}>
      <div className={`${padding} whitespace-no-wrap`}>
        we watch
      </div>
      <div className={`rounded-b-lg ${padding} bg-black text-white`}>
        <span className="text-wwt-yellow">.</span>
        tech
      </div>
    </div>
  )
}

export default Logo