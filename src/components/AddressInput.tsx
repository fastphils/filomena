import { IconWallet } from '@tabler/icons-react'

export default () => (
  <label className="input input-bordered flex items-center gap-2">
    <input type="text" className="grow" placeholder="Address" />
    <IconWallet
      size={24}
      color="gray"
      stroke={1}
      strokeLinejoin="miter"
    />
  </label>
)