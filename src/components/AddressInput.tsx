import { IconWallet } from '@tabler/icons-react'

export default ({ data, onChange }: AddressInputProps) => (
  <label className="input input-bordered flex items-center gap-2">
    <input
      type="text"
      className="grow"
      placeholder="Address"
      value={data}
      onChange={onChange}
    />
    <IconWallet
      size={24}
      color="gray"
      stroke={1}
      strokeLinejoin="miter"
    />
  </label>
)

type AddressInputProps = { 
  data: string,
  onChange: (e: any) => void,
}