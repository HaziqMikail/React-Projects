import profilePic from './assets/axolotl.png'

function Card() {

  return (
    <div className="card">
        <img className="card-img" src={profilePic} alt="Error404" />
        <h2 className='card-title'>Mikail</h2>
        <p className='card-description'>Hello World</p>
    </div>
  )
}

export default Card