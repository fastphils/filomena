import { IconSend2 } from '@tabler/icons-react'

export default ({ action, data, onClick }: BadgedButtonProps) => (
  <button className="btn btn-block" onClick={onClick}>
    {action}
    <IconSend2 size={24} color="gray" stroke={1} strokeLinejoin="miter" />
    {/* <div className="badge badge-neutral">{Number(data)} TFIL</div> */}
  </button>
)

export type BadgedButtonProps = {
  data: number,
  action: string,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}