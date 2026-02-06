function ProfileCard({name, role}){
    return(
        <div className="profile-card">
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    )
}

export default ProfileCard;