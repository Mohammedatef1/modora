interface listCartProps<T> {
  records: T[];
  renderedItemFunction: (record: T) => React.ReactNode
}

const ListCartItems = <T,>({records , renderedItemFunction} : listCartProps<T>) => {
  return (
    <div>
      {records.length > 0 ? records.map(el => (
        renderedItemFunction(el)
      )) : 'No items found!'}
    </div>
  )
}

export default ListCartItems