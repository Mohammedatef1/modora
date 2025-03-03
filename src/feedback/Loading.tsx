import { TLoading } from "src/customTypes/shared"

interface LoadingProps {
  loading: TLoading;
  error: null | string;
  children: React.ReactNode
}
const Loading = ({error, loading, children}: LoadingProps) => {
  
  if (loading === 'pending'){
    return(
      <p>Loading...</p>
    )
  }
  
  if (loading === 'rejected'){
    console.log(error)
    return(
      <p>{error}</p>
    )
  }

  return (
    <>{children}</>
  )
}

export default Loading