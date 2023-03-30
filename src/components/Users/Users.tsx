import StyleSheet from './users.module.css';

let Users = (props: any) => {
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