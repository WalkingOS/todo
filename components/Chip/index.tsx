export const Chip = ({
  className = '',
  onClick,
  onDelete,
  disabled,
  children,
}: {
  className?: string
  onClick: () => void
  onDelete: () => void
  children: JSX.Element
  disabled?: boolean
}) => {
  return (
    <div
      className={`${className} relative flex justify-between bg-gray-100 rounded-full mb-2 overflow-hidden transition-all duration-300 ${
        disabled ? 'bg-green-500 text-white' : 'hover:scale-105 active:scale-95'
      }`}
    >
      <button
        onClick={onClick}
        disabled={disabled}
        className={`relative w-full text-left ml-3 p-5 rounded line-clamp-2`}
      >
        {children}
      </button>
      <button
        onClick={onDelete}
        className="rounded-full hover:bg-red-500 hover:text-white self-center mx-4 p-1 px-2.5"
      >
        x
      </button>
    </div>
  )
}
