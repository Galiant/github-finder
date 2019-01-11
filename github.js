class Github {
  constructor() {
    this.client_id = '67b5b0e3ea6cb8c1b951';
    this.client_secret = '63f538a960478cd140a0b796787f7d87b291f1e0';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`)

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}