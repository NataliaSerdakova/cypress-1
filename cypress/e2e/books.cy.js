describe('Positive tests', () => {
	beforeEach(() => {
		cy.visitAndLogin('test@test.com', 'test'); // Предварительно готовимся перед каждым тестом
	});

	it('Should successfully login', () => {
		cy.contains('Добро пожаловать test@test.com').should('be.visible');
	});

	it('Adding a book to favorites', () => {
		cy.contains('Add to favorite').click();
		cy.contains('Delete from favorite').should('be.visible');
	});

	it('Delete a book to favorites', () => {
		cy.contains('Delete from favorite').click();
		cy.contains('Add to favorite').should('be.visible');
	});

	it('Downloading a book', () => {
		cy.contains('Minutu vnimaniya').click();
		cy.contains('Dowload book').click();
		cy.contains('Minutu vnimaniya').should('be.visible');
	});
});

describe('Negative tests', () => {
	it('Should not login with empty login', () => {
		cy.visitAndLogin(' ', 'test');
		cy.get('#mail').then(($el) => $el[0].checkValidity()).should('be.false');
	});

	it('Should not login with empty password', () => {
		cy.visitAndLogin('test@test.com', '');
		cy.get('#pass').then(($el) => $el[0].checkValidity()).should('be.false');
	});
});