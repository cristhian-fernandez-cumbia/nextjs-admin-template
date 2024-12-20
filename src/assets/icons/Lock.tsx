import { IconProps } from '@/interfaces/components'

const Lock = (props: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={props?.className}>
      <path d="M16 11V7.9C16 5.7 14.4 4 12.2 4H11.9C9.8 4 8 5.7 8 7.9V11H7L7.1 16C7.1 16 7 19 12 19C17 19 17 16 17 16V11H16ZM13 17H12V15C11.4 15 11 14.6 11 14C11 13.4 11.4 13 12 13C12.6 13 13 13.4 13 14V17ZM14 11H10V7.9C10 6.8 10.9 6 11.9 6H12.2C13.2 6 14 6.8 14 7.9V11Z" fill={props?.fill || '#1C2E45'} fillOpacity="0.6"/>
    </svg>
  )
}

export default Lock