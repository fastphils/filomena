export default ({ action, data, onClick }: BadgedButtonProps) => (
  <button className="btn btn-block" onClick={onClick}>
    {action}
    {/* <div className="badge badge-neutral">{Number(data)} TFIL</div> */}
  </button>
)

export type BadgedButtonProps = {
  data: number,
  action: string,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}