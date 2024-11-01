export default ({ action, data }: BadgedButtonProps) => (
  <button className="btn">
    {action}
    <div className="badge badge-neutral">{Number(data)} TFIL</div>
  </button>
)

export type BadgedButtonProps = {
  data: number,
  action: string,
}