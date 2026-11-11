function Profile({user}) {
    return(
    <div>
        <div>Name: {user.name}</div>
        <div>Age: {user.age}</div>
        <div>Job: {user.job}</div>
    </div>
    );
}

export default Profile;