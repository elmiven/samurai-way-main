import StyleSheet from './users.module.css';

let Users = (props: any) => {

    if (props.users.length === 0)
        props.setUsers(
            [
                {
                    id: 1, photoUrl: 'https://thumbs.dreamstime.com/b/businessman-programmer-avatar-profile-userpic-white-background-vector-illustration-66140549.jpg',
                    followed: false, fullName: 'Mitka', status: "I'm a bozzz", location: { city: 'Minsk', country: 'Belarus' }
                },
                {
                    id: 2, photoUrl: 'https://thumbs.dreamstime.com/b/businessman-programmer-avatar-profile-userpic-white-background-vector-illustration-66140549.jpg',
                    followed: true, fullName: 'Vitka', status: "I'm a boszsz", location: { city: 'Kiev', country: 'Ukraine' }
                },
                {
                    id: 3, photoUrl: 'https://thumbs.dreamstime.com/b/businessman-programmer-avatar-profile-userpic-white-background-vector-illustration-66140549.jpg',
                    followed: true, fullName: 'Andrew', status: "I'm a boooo", location: { city: 'Lviv', country: 'Ukraine' }
                },
            ]
        )



    return <div>
        {
            props.users.map((u: any) => <div key={u.id}>

                <span>
                    <div>
                        <img src={u.photoUrl} className={StyleSheet.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }} >Unfolow</button>
                            : <button onClick={() => { props.follow(u.id) }} >Folow</button>
                        }
                    </div>
                </span>

                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>


                </span>

            </div>)


        }

    </div>

}


export default Users