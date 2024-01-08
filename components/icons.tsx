type IconProps = {
  className?: string
}

export const IconLinkedIn = ({ ...props }: IconProps) => {
  return (
    /* prettier-ignore */
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
    </svg>
  )
}

export const IconReadCv = ({ ...props }: IconProps) => {
  return (
    /* prettier-ignore */
    <svg viewBox="0 0 24 24" {...props}>
      <rect x="4.2913" y="2.9985" width="15.2752" height="18.0029" rx="2.1822" ry="2.1822" transform="translate(3.5117 -2.6782) rotate(14.9978)" fill="none" stroke="currentColor" strokeWidth="1.6366"/><line x1="9.2473" y1="6.1985" x2="17.1517" y2="8.3162" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6366"/><line x1="8.3297" y1="9.6238" x2="16.2341" y2="11.7414" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6366"/><line x1="7.412" y1="13.049" x2="12.6816" y2="14.4608" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6366"/>
    </svg>
  )
}
