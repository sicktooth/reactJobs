// eslint-disable-next-line react/prop-types
const Card = ({ children, bg= "bg-gray-100" }) => {
  return (
    <div className={`${bg} shadow-md rounded-lg p-6`}>
        {children}
    </div>
  )
}

export default Card