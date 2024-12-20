import { IconProps } from '@/interfaces/components'

const Show = (props: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={props?.className} onClick={props?.onClick}>
      <path d="M12 7C5.3 7 4 12.1 4 12.1C4 12.1 6.2 16.2 11.9 16.2C17.6 16.2 20 12.2 20 12.2C20 12.2 18.7 7 12 7ZM9.3 8.5C9.8 8.2 10.6 8.2 10.6 8.2C10.6 8.2 10.1 9.1 10.1 9.8C10.1 10.5 10.3 10.9 10.3 10.9L9.2 11.1C9.2 11.1 8.9 10.6 8.9 9.9C8.9 9.1 9.3 8.5 9.3 8.5ZM11.9 15.2C7.8 15.2 5.7 12.9 5.1 12C5.4 11.3 6.2 9.8 8.2 8.8C8.1 9.2 8 9.6 8 10.1C8 12.3 9.8 14.1 12 14.1C14.2 14.1 16 12.3 16 10.1C16 9.6 15.9 9.2 15.8 8.8C17.8 9.7 18.6 11.3 18.9 12C18.2 12.9 16.1 15.2 11.9 15.2Z" fill={props?.fill || "#1C2E45"} fillOpacity="0.6"/>
    </svg>
  )
}

export default Show



