import { IconPlus } from '@tabler/icons-react'

export default ({ onClick }: any) => (
  <button className="btn btn-block" onClick={onClick}>
  New address
  <IconPlus size={24} color="gray" stroke={1} strokeLinejoin="miter" />
</button>
)