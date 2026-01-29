const Profile = ({name,age,skills}) => {
  return (
    <>
    <div className="bg-amber-200 mt-10">
        <h1 className="font-bold text-5xl">Iam {name} {age} years old</h1>
        <ul className="bg-amber-500 mt-5 flex space-x-5 hover:text-2xl rounded">
        {skills.map((skill) => {
            return <li key={skill}>{skill}</li>;
        })}
        </ul>
    </div>
    </>
  )
}
export default Profile
