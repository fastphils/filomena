import { IconFunction } from '@tabler/icons-react'

export default ({ data, onChange }: FilInputProps) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <input
        type="text"
        className="grow"
        placeholder=""
        value={Number(data)}
        onChange={onChange}
      />
      <p>TFIL</p>
      <IconFunction
        size={24}
        color="gray"
        stroke={1}
        strokeLinejoin="miter"
      />
    </label>
  )
}

type FilInputProps = {
  data: number,
  onChange: (e: any) => void,
}