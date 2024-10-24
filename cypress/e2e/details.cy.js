describe('Details Page', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies', {
            statusCode: 200,
            fixture: 'movie_posters'
        })

        cy.intercept('GET', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/155', {
            statusCode: 200,
            fixture: 'movie_details'
        })

        cy.visit('http://localhost:3000/')
        cy.get('.movie-card').first().find('.movieImage').click()
    })

    it('displays title on page load', () => {
        cy.get('h1').contains('The RT Files')
    })

    it('displays the movie details', () =>{
        cy.get('.movie-info > img').should('exist')
        cy.get('.movie-info > .list-container').should('exist')
        cy.get('.movie-info > h2').should('exist')
        cy.get('.movie-info > p').should('exist')
        cy.get('.movie-info > .extra_info').should('exist')
    })
})