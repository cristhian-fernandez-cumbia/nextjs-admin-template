import { IconProps } from '@/interfaces/components'

const User = (props: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={props?.className}>
      <path d="M11.9 4C6.3 4 9 11.3 9 11.3C9.6 12.3 10.4 12.1 10.4 12.8C10.4 13.4 9.7 13.6 9 13.7C7.9 13.7 6.9 13.5 5.9 15.3C5.3 16.4 5 20 5 20H18.7C18.7 20 18.4 16.4 17.9 15.3C16.9 13.4 15.9 13.7 14.8 13.6C14.1 13.5 13.4 13.3 13.4 12.7C13.4 12.1 14.2 12.3 14.8 11.2C14.8 11.3 17.5 4 11.9 4V4Z" fill={props?.fill || '#1C2E45'} fillOpacity="0.6"/>
    </svg>
  )
}

export default User