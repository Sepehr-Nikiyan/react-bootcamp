function Profile({ user, skills , role="Student"}) {
    return (
        <div>
            <div>Name: {user.name}</div>
            <div>Age: {user.age}</div>
            <div>Job: {user.job}</div>
            <div>Role: {role}</div>
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