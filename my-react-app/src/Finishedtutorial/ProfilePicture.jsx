

function ProfilePicture() {

    const imageUrl = "./src/assets/axolotl.png";
    const handleClick = (e) => e.target.style.display = "none"; //hides image when clicked

    return (<img onClick={(e) => handleClick(e)} src={imageUrl} alt="Profile" />);

}

export default ProfilePicture;