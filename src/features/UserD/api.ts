import UserAll from './types/UserAll';
// import UserDto from './types/UserDto';

export async function getAll(): Promise<UserAll[]> {
	const res = await fetch('/api/users/allUsers');
	return res.json();
}
