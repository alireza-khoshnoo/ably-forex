import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function News() {
  return (
    <div className="my-5 text-darktext dark:text-lighttext">
      <h3 className="text-4xl font-bold text-center mb-5">
        <span className="glow ">News</span> Page
      </h3>
      <p className="section-text">
        sorry! this page is under construction yet. it will be available soon
      </p>
      <div className="flex justify-center mt-10">
        <Link to="/">
          <Button>
            <span className="px-5">back to homepage</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
