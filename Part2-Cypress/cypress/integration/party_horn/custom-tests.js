describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });
  
  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(function($el) {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(function($el) {
      expect($el).to.have.value(33);
    });
  });

  it('Audio element changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('audio').then(function($el) {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image and sound sources change when select party horn', () => {
    cy.get('[type="radio"]').check();
    cy.get('audio').then(function($el) {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
    cy.get('img').then(function($el) {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
  });

  it('Volume image changes when increasing volume', () => {
    cy.get('#volume-slider').invoke('val', 67).trigger('input');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });

    cy.get('#volume-slider').invoke('val', 34).trigger('input');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });

    cy.get('#volume-slider').invoke('val', 1).trigger('input');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });

    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
  });

  it('Honk button disabled when textbox input is empty/non-number', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').should('be.disabled');

    cy.get('#volume-number').type('hi');
    cy.get('#honk-btn').should('be.disabled');
  });

  it('Error shown for number outside given range', () => {
    cy.get('#volume-number').type('101');
    cy.get('input:invalid').should('have.length', 1);
  });

});
