// Mock data to use for testing:
// import posters from '../fixtures/movie_posters.json' (we've added mock data to this file for you!)
// import details from '../fixtures/movie_details.json' (you will need to add your own mock data to this file!)

describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies', {
      statusCode: 200,
      fixture: "movie_posters"
    })
    cy.visit('http://localhost:3000/')
  })

  it('displays title on page load', () => {
    cy.get('h1').contains('The RT Files')
  })

  it('displays the movie cards with appropriate data on page load', () =>{
    cy.get('.movie-card').first().should('exist')
    cy.get('.movie-card').first().find('.movieImage').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg')
    cy.get('.movie-card').first().find('.vote-count').contains(32544)
    cy.get('.movie-card').first().find('.upvote').should('be.visible').and('not.be.disabled')
    cy.get('.movie-card').first().find('.downvote').should('be.visible').and('not.be.disabled')


    cy.get('.movie-card').eq(3).should('exist')
    cy.get('.movie-card').eq(3).find('.movieImage').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg')
    cy.get('.movie-card').eq(3).find('.vote-count').contains(27642)
    cy.get('.movie-card').eq(3).find('.upvote').should('be.visible').and('not.be.disabled')
    cy.get('.movie-card').eq(3).find('.downvote').should('be.visible').and('not.be.disabled')
  })
})
