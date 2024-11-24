import { IconProps } from '@/interfaces/components'

const Logout = (props: IconProps) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" className={props?.className}>
      <path d="M10.7071 0V14.4577H14.2929V0H10.7071ZM3.66058 3.66058C1.39852 5.92265 0 9.04821 0 12.5C0 19.4036 5.59644 25 12.5 25C19.4036 25 25 19.4036 25 12.5C25 9.04821 23.6015 5.92265 21.3394 3.66058L18.8217 6.17829C20.4396 7.79617 21.4401 10.0315 21.4401 12.5C21.4401 17.4371 17.4371 21.4401 12.5 21.4401C7.5629 21.4401 3.55988 17.4371 3.55988 12.5C3.55988 10.0315 4.5604 7.79617 6.17829 6.17829L3.66058 3.66058Z" fill={props?.fill || "black"}/>
    </svg>
  )
}

export default Logout




