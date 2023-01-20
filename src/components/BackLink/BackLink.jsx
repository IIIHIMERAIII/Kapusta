import { Link } from "./styled"
import sprite from '../../images/icons_sprite.svg'
export const BackLink = () => {

    return (
        <Link
            to= "/wallet"
        >
          <svg
            width='24px'
            height='24px'
          >
            <use
              href={sprite + '#arrow_back'}
            />
          </svg>
          Main page
    </Link>
    )
}