describe('book app', () => {
	it('Should successfully login', () => {
		cy.visit('/');
		cy.login('test@test.com', 'test');
		cy.contains('Добро пожаловать test@test.com').should('be.visible');
	});

	it('Should not login with empty login', () => {
		cy.visit('/');
		cy.login(' ', 'test');
		cy.get('#mail').then($el => $el[0].checkValidity()).should('be.false');
	});

	it('Should not login with empty password', () => {
		cy.visit('/');
		cy.login('test@test.com', '');
		cy.get('#pass').then($el => $el[0].checkValidity()).should('be.false')
	});

	it('Adding a book to favorites', () => {
		cy.visit('/');
		cy.login('test@test.com', 'test');
		cy.contains('Add to favorite').click();
		cy.contains('Delete from favorite').should('be.visible');
	});

	it('Delete a book to favorites', () => {
		cy.visit('/');
		cy.login('test@test.com', 'test');
		cy.contains('Delete from favorite').click();
		cy.contains('Add to favorite').should('be.visible');
	});

	it('Downloading a book', () => {
		cy.visit('/');
		cy.login('test@test.com', 'test');
		cy.contains('Minutu vnimaniya').click();
		cy.contains('Dowload book').click();
	});
});

