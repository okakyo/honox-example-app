/**
 * API ハンドラーの例
 * ユースケース層と連携してビジネスロジックを処理
 */

export interface User {
	id: number;
	name: string;
	email: string;
	createdAt: Date;
}

export class UserService {
	// TODO: 実際のデータベース接続に置き換え
	private users: User[] = [
		{
			id: 1,
			name: 'Alice',
			email: 'alice@example.com',
			createdAt: new Date()
		},
		{
			id: 2,
			name: 'Bob',
			email: 'bob@example.com',
			createdAt: new Date()
		}
	];

	async getUsers(): Promise<User[]> {
		return this.users;
	}

	async getUserById(id: number): Promise<User | undefined> {
		return this.users.find((user) => user.id === id);
	}

	async createUser(data: Omit<User, 'id' | 'createdAt'>): Promise<User> {
		const newUser: User = {
			id: this.users.length + 1,
			...data,
			createdAt: new Date()
		};
		this.users.push(newUser);
		return newUser;
	}
}
