describe('Main Page', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/155', {
            statusCode: 200,
            fixture: 'movie_posters'
        })
        cy.visit('http://localhost:3000/155')
    })

    it('displays title on page load', () => {
        cy.get('h1').contains('The RT Files')
    })
})