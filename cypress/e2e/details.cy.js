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

    it('displays header on page load', () => {
        cy.get('h1').contains('The RT Files')
        cy.get('[data-cy="homeButton"]').should('have.attr', 'src', '/static/media/home_icon copy.32e59a4a577771916c33.png')
    })

    it('displays the movie details', () =>{
        cy.get('.movie-info > img').should('have.attr','src', 'https://image.tmdb.org/t/p/original//nMKdUUepR0i5zn0y1T4CsSB5chy.jpg')
        cy.get('.movie-info > .list-container').should('contain', 'Drama') 
        cy.get('.movie-info > .list-container').should('contain', 'Action')
        cy.get('.movie-info > .list-container').should('contain', 'Crime')
        cy.get('.movie-info > .list-container').should('contain', 'Thriller')
        cy.get('.movie-info > h2').should('contain', 'The Dark Knight')
        cy.get('.movie-info > p').should('contain', 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.')
        cy.get('.movie-info > .extra_info').should('contain', 'Language: en, Rating: 145.213, Release Date: 2008-07-16')
    })

    it('returns to home page when home button is clicked', () => {
        cy.get('[data-cy="homeButton"]').click()
        cy.url().should('not.include', '155')
        cy.url().should('include', '/')
    })
})