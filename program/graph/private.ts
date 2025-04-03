export class Singleton {
	private static instance?: Singleton;
	#ccc = 1;

	private constructor() {
		this.#ccc++;
		this.#con();
	}
	#con() {
		console.log(this.#ccc);
	}
	static getInstance() {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}

		return Singleton.instance;
	}
}

const s = Singleton.getInstance();

// const tt = new Singleton()
