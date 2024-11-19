describe('XYZ Bank elements tests', () => {
  beforeEach(() => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
  })


  it('should be able to depossit money', () => {
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('#userSelect').select('Hermoine Granger')
    cy.get('form.ng-valid > .btn').click()
    cy.get('[ng-class="btnClass2"]').click()
    cy.get('.form-control').click().type('1000')
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('have.text', 'Deposit Successful')
  })

  it('should be able to withdraw money', () => {
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('#userSelect').select('Hermoine Granger')
    cy.get('form.ng-valid > .btn').click()
    cy.get('[ng-class="btnClass3"]').click()
    cy.get('.form-control').click().type('1000')
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('have.text', 'Transaction successful')
  })

  it('should be able to view transactions', () => {
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('#userSelect').select('Hermoine Granger')
    cy.get('form.ng-valid > .btn').click()
    cy.get('[ng-class="btnClass1"]').click()
    cy.get('.table').should('be.visible')
  })

  it("should'nt be able to withdraw more money than the account has", () => {
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('#userSelect').select('Hermoine Granger')
    cy.get('form.ng-valid > .btn').click()
    cy.get('[ng-class="btnClass3"]').click()
    cy.get('.form-control').click().type('1000000')
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('have.text', 'Transaction Failed. You can not withdraw amount more than the balance.')
  })

  it('should be able to logout', () => {
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('#userSelect').select('Hermoine Granger')
    cy.get('form.ng-valid > .btn').click()
    cy.get('#userSelect').not('be.visible')
    cy.get('.logout').click()
    cy.get('#userSelect').should('be.visible')
  })

  it('should be able to add a new customer', () => {
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[ng-class="btnClass1"]').click()
    cy.get(':nth-child(1) > .form-control').click().type('Rubeus')
    cy.get(':nth-child(2) > .form-control').click().type('Hagrid')
    cy.get(':nth-child(3) > .form-control').click().type('10000')
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.home').click()
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('#userSelect').select('Rubeus Hagrid')
    cy.get('form.ng-valid > .btn').click()
    cy.get('.fontBig').should('have.text', 'Rubeus Hagrid')
  })
})