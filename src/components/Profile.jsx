function Profile({ user, skills }) {
    return (
        <div>
            <div>Name: {user.name}</div>
            <div>Age: {user.age}</div>
            <div>Job: {user.job}</div>
            <ul>{skills.map(
                (skill) => {
                    return <li key={skill}>{skill}</li>
                }
            )}
            </ul>
        </div>
    );
}

export default Profile;