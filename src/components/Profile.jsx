function Profile({ name, age, isDeveloper }) {
    return(
    <div>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Developer: {String(isDeveloper)}</div>
    </div>
    );
}

export default Profile;