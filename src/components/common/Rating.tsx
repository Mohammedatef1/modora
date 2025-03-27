import Star from "@assets/svg/Star.svg?react"

interface RatingProps {
  rating: 0 | 1 | 2 | 3 | 4 | 5;
}



const Rating = ({rating} : RatingProps) => {
  
  return (
    <div className="flex items-center gap-x-1.5">
      {Array.from({length: 5}).fill(0).map((_, index) => (
        <Star className={`${(index + 1) > rating ? 'opacity-50' : ''}`} />
      ))}
    </div>
  )
}

export default Rating