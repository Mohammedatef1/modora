interface GridListProps<T> {
  records: T[];
  renderedElementFunction : (record: T) => React.ReactNode
}

const GridList = <T,>({records, renderedElementFunction}: GridListProps<T>) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12 p-6 md:p-12">
       {records.length > 0 ? records.map(record => (
        renderedElementFunction(record)
       )) : "No categories found"}
    </div>
  )
}

export default GridList