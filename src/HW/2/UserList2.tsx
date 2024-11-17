import {CurrentUser} from './CurrentUser';
import {UsersObjectType} from './HW2';

type UserList2PropsType = {
	users: UsersObjectType // пропиши типизацию
	filterUsers: () => void // пропиши типизацию
};

export const UserList2 = (props: UserList2PropsType) => {
	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'} onClick={() => props.filterUsers}>SHOW ME FRIENDS FROM LA</button>

			<ul>
			  {props.users.myFriends.map((el) => (
			    <CurrentUser user={el} key={el.id} />
			  ))}
			</ul>
		</div>
	);
};