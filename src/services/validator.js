class Validator {

	signIn(formObject) {
	const error = []

		if (!formObject.email) {
			error.push('Please enter your email')
		} else {
			const test = /[^@]+@[^]+\..+/.test(formObject.email)
			if (!test) {
				error.push('Please enter a valid email address')
			}
		}
		if (!formObject.password || formObject.password.length < 6) {
			error.push('Password is too short. It must include min. 6 characters')
		}
		// FIX ME: Need to add comparison to MDB: password must equal to connected email
		return error
	}

	signUp(formObject) {
		const error = []

		if (!formObject.firstname || formObject.firstname.length < 2) {
			error.push('Please add your first name')
		}
		if (!formObject.lastname || formObject.lastname.length < 2) {
			error.push('Please add your last name')
		}
		if (!formObject.email) {
				error.push('Please enter your email')
		} 
		else {
			const test = /[^@]+@[^]+\..+/.test(formObject.email)
			if (!test) {
				error.push('Please enter a valid email address')
			}
		}
		if (!formObject.password || formObject.password.length < 6) {
			error.push('Password is too short. It must include min. 6 characters')
		}		
		if (!formObject.confirmPassword) {
			error.push('Please repeat the password')
		}
		else if (formObject.confirmPassword !== formObject.password) {
			error.push("Passwords don't match")
		}
		return error
	}
}

module.exports = new Validator()
