import error from "@assets/lotti/error.json"
import empty from "@assets/lotti/empty.json"
import loading from "@assets/lotti/loading.json"
import notfound from "@assets/lotti/notfound.json"
import Lottie from "lottie-react"

interface LottieHandlerProps {
  type: keyof typeof lottieMap;
  message: string;
  className?: string;
}

const lottieMap = {
  error,
  empty,
  loading,
  notfound
}

const LottieHandler = ({type, message, className} : LottieHandlerProps )  => {
  const lottieType = lottieMap[type]
  return (
    <div className={`flex flex-col gap-y-2 items-center justify-center text-center ${className}`}>
      <Lottie animationData={lottieType} />
      <h2>{message}</h2>
    </div>
  )
}

export default LottieHandler