function StudentProfile({id , name , email , course , cohort , skills= true, github , onSelect}) {
    return(
        <>
         <div className="profile-container">
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>course: {course}</p>
            <p>cohort: {cohort}</p>
            <p>skills: {skills }</p>
            <p>github: {github}</p>
            <p>onSelect: {onSelect}</p>
            <button className="button" onClick={onSelect}>Click</button>
         </div>
        </>
    )
}

export default StudentProfile;