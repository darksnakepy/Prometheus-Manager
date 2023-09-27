export default function Spinner() {
  return (
    <div className='w-5 h-5 relative flex items-center justify-center'>
      <i className="PrimaryBar w-full h-full absolute border-[3px] rounded-full"></i>
      <i className="SecondaryBar w-full h-full absolute border-[3px] rounded-full"></i>
    </div>
  )
}