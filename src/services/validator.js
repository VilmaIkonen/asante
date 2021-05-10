class Validator {

		signIn(formObject) {
		const error = []

		if (!formObject.email) {
			error.push('please enter your email')
		} else {
			const test = /[^@]+@[^\.]+\..+/.test(formObject.email)
			if (!test) {
				error.push('Please enter a valid email address')
			}
		}
		if (!formObject.password || formObject.password.length < 8) {
			error.push('Password is too short. It must include min. 8 characters')
		}
		return error
	}
}

module.exports = new Validator()
