import { IconProps } from '@/interfaces/components'

const Hide = (props: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={props?.className} onClick={props?.onClick}>
      <path d="M16.9 9.19995L16.1 9.99995C17.8 10.9 18.6 12.3 18.9 13C18.2 13.9 16.1 16.1 11.9 16.1C11.2 16.1 10.7 16 10.1 15.9L9.29999 16.7C10.1 17 11 17.1 11.9 17.1C17.6 17.1 20 13.1 20 13.1C20 13.1 19.4 10.7 16.9 9.19995Z" fill={props?.fill || "#1C2E45"} fillOpacity="0.6"/>
      <path d="M16 11.1C16 10.8 16 10.5 15.9 10.3L11.1 15C11.4 15 11.7 15.1 12 15.1C14.2 15.1 16 13.3 16 11.1Z" fill={props?.fill || "#1C2E45"} fillOpacity="0.6"/>
      <path d="M19.3 4L14.9 8.4C14.1 8.2 13.1 8 12 8C5.3 8 4 13.1 4 13.1C4 13.1 5 14.9 7.3 16.1L4 19.3V20H4.7L20 4.7V4H19.3V4ZM8 15.3C6.4 14.6 5.5 13.5 5.1 13C5.4 12.3 6.2 10.8 8.2 9.8C8.1 10.2 8 10.6 8 11.1C8 12.2 8.5 13.3 9.3 14L8 15.3ZM10.2 11.9L9.2 12.1C9.2 12.1 8.9 11.6 8.9 10.9C8.9 10.1 9.3 9.4 9.3 9.4C9.8 9.1 10.6 9.1 10.6 9.1C10.6 9.1 10.1 10 10.1 10.8C10 11.5 10.2 11.9 10.2 11.9Z" fill={props?.fill || "#1C2E45"} fillOpacity="0.6"/>
    </svg>
  )
}

export default Hide



