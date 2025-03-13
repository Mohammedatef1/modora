import LottieHandler from "@feedback/LottieHandler";

interface listCartProps<T> {
  records: T[];
  renderedItemFunction: (record: T) => React.ReactNode
}

const ListCartItems = <T,>({records , renderedItemFunction} : listCartProps<T>) => {
  return (
    <div>
      {records.length > 0 ? records.map(el => (
        renderedItemFunction(el)
      )) : (<LottieHandler className="max-w-md m-auto" type="empty" message="No products found"/>)}
    </div>
  )
}

export default ListCartItems